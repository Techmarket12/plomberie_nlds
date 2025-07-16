import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Débouchage Plomberie Service 24 - Services professionnels de plomberie et débouchage"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(to bottom, #1e3a8a, #1e40af)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "40px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#00b8e6",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "20px",
          }}
        >
          {/* Simple robinet icon */}
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 16V6M19 16H5M19 16C19.5523 16 20 16.4477 20 17V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V17C4 16.4477 4.44772 16 5 16M5 16V6M5 6C5 4.89543 5.89543 4 7 4H17C18.1046 4 19 4.89543 19 6M12 16V21M9 10V12M15 10V12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div style={{ fontWeight: "bold", fontSize: "52px" }}>Débouchage Plomberie</div>
      </div>
      <div style={{ fontSize: "40px", marginBottom: "20px" }}>SERVICE 24</div>
      <div style={{ fontSize: "28px", opacity: 0.9, textAlign: "center", maxWidth: "80%" }}>
        Intervention rapide en 45 minutes • Disponible 24h/24 et 7j/7
      </div>
    </div>,
    { ...size },
  )
}
