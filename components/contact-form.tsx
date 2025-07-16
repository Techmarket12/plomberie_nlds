"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

// ** CONFIGURATION CLOUDINARY **
// Remplacez 'YOUR_CLOUD_NAME' par votre Cloud Name Cloudinary
// Remplacez 'YOUR_UNSIGNED_UPLOAD_PRESET' par le nom de votre preset d'upload non signé (ex: 'plombier_upload')
const CLOUDINARY_CLOUD_NAME = 'dw9jkwccj'; // Exemple: votre cloud name Cloudinary
const CLOUDINARY_UPLOAD_PRESET = 'plombier_aquadeb'; // Exemple: le nom de votre preset non signé

// Définition du schéma de validation avec Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  phone: z.string().min(10, {
    message: "Le numéro de téléphone doit contenir au moins 10 chiffres.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  message: z.string().optional(),
  // MODIFICATION ICI POUR GÉRER LE RENVOI CÔTÉ SERVEUR
  // Nous utilisons z.custom pour une validation plus flexible et conditionnelle.
  images: z.custom<FileList | undefined>(
    (val) => {
      // Cette validation s'exécute côté serveur ET côté client.
      // Côté serveur, FileList n'est pas défini, donc nous devons éviter son accès.
      // Si nous sommes côté serveur, la valeur sera généralement undefined ou un objet vide au départ.
      // Nous ne voulons pas lancer d'erreur côté serveur ici.
      if (typeof window === 'undefined') { // Vérification si nous sommes côté serveur
        return true; // Accepte n'importe quoi côté serveur pour éviter l'erreur FileList is not defined
      }

      // Côté client, nous pouvons valider FileList.
      return val instanceof FileList || val === undefined || val === null;
    },
    {
      message: "Le champ d'images doit être des fichiers valides ou vide.",
    }
  ).optional().transform(val => {
    // La transformation s'exécute après la validation.
    // Elle s'exécute côté serveur ET côté client.
    // On s'assure que FileList est défini et que c'est une instance de FileList avant de le convertir.
    if (val && typeof FileList !== 'undefined' && val instanceof FileList) {
      return Array.from(val);
    }
    return undefined; // Si ce n'est pas un FileList valide ou s'il n'y a rien
  }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedImageUrls, setUploadedImageUrls] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      images: undefined,
    },
  })

  const uploadImageToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Cloudinary upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Erreur lors de l'upload vers Cloudinary:", error);
      throw error;
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    let finalImageUrls: string[] = [];

    try {
      if (values.images && values.images.length > 0) {
        toast({
          title: "Téléchargement des images...",
          description: "Veuillez patienter pendant que nous envoyons vos photos.",
        });
        const uploadPromises = values.images.map(file => uploadImageToCloudinary(file));
        finalImageUrls = await Promise.all(uploadPromises);
        setUploadedImageUrls(finalImageUrls);
      }

      const formspreeData = {
        name: values.name,
        phone: values.phone,
        email: values.email,
        message: values.message || "",
        image_urls: finalImageUrls.join(', '),
      };

      const response = await fetch("https://formspree.io/f/mkgwkeyl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formspreeData),
      })

      if (response.ok) {
        form.reset()
        setUploadedImageUrls([]);
        toast({
          title: "Demande envoyée",
          description: "Un technicien vous contactera dans les plus brefs délais.",
        })

        if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
          (window as any).gtag_report_conversion()
        }
      } else {
        const errorData = await response.json().catch(() => ({ message: "Réponse du serveur non JSON de Formspree." }));
        throw new Error(errorData.message || "Une erreur est survenue lors de l'envoi du formulaire.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error)
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-blue-600 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-white mb-1">Demander un rappel immédiat</h2>
      <p className="text-white mb-4">Un technicien vous rappellera dans les plus brefs délais.</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nom et prénom</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Votre nom complet"
                    {...field}
                    className="bg-white border-0 h-12 text-black placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Téléphone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Votre numéro de téléphone"
                    type="tel"
                    {...field}
                    className="bg-white border-0 h-12 text-black placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Votre adresse email"
                    type="email"
                    {...field}
                    className="bg-white border-0 h-12 text-black placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Description du problème</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Décrivez votre problème (mentionnez le code PLOMB15 pour la remise)"
                    {...field}
                    className="bg-white border-0 min-h-[100px] text-black placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="images"
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel className="text-white">Ajouter des photos du problème (optionnel)</FormLabel>
                <FormControl>
                  <Input
                    {...fieldProps}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(event) => {
                      onChange(event.target.files);
                    }}
                    className="bg-white border-0 h-12 text-black placeholder:text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />

          {uploadedImageUrls.length > 0 && (
            <div className="text-white text-sm">
              <p className="font-semibold">Images envoyées :</p>
              <ul className="list-disc pl-5">
                {uploadedImageUrls.map((url, index) => (
                  <li key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">
                      Image {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black hover:bg-gray-800 text-white font-medium h-12"
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
