import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoDataUrl = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/brand/logo-mark-sm.png")
).toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background:
            "linear-gradient(135deg, #0F0B1F 0%, #1B1436 55%, #2C1B54 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <img
            src={logoDataUrl}
            width={56}
            height={56}
            alt=""
            style={{ objectFit: "contain" }}
          />
          <div style={{ fontSize: 32, fontWeight: 700, color: "#fff" }}>
            {siteConfig.shortName}
          </div>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Computer Training Institute &amp; Software Development Company
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: 999,
              background: "rgba(251,191,36,0.15)",
              color: "#FBBF24",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Student Training
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: 999,
              background: "rgba(167,139,250,0.15)",
              color: "#C4B5FD",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Software Development
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
