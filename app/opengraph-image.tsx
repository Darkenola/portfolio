import { ImageResponse } from "next/og";

export const alt = "Darkenola portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top, rgba(120,159,255,0.22), transparent 30%), linear-gradient(180deg, #0b0d12 0%, #07080b 55%, #05060a 100%)",
          color: "#f6f7fb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "110px 110px",
            opacity: 0.16,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -80,
            top: 80,
            width: 340,
            height: 340,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(141,216,255,0.24), transparent 70%)",
            filter: "blur(18px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "68px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f6f7fb",
                color: "#07080b",
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: "0.18em",
              }}
            >
              D
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
                Darkenola
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: "rgba(246,247,251,0.62)",
                }}
              >
                emirhanatici.xyz
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 860,
            }}
          >
            <div
              style={{
                fontSize: 80,
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: "-0.07em",
              }}
            >
              Emirhan
            </div>
            <div
              style={{
                fontSize: 78,
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: "-0.07em",
                color: "#9bdfff",
              }}
            >
              Software Developer
            </div>
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.35,
                color: "rgba(246,247,251,0.72)",
                maxWidth: 800,
              }}
            >
              Building modern, real-world digital experiences with a focus on
              backend systems, automation, and polished execution.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
            }}
          >
            {["Backend systems", "Automation-first", "Builder mindset"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px 18px",
                    borderRadius: 9999,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    fontSize: 18,
                    color: "rgba(246,247,251,0.82)",
                  }}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
