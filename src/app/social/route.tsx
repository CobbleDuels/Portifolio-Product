import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";

export async function GET() {
  const portrait = await readFile(join(process.cwd(), "public/images/social-portrait.jpg"));
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#101010", color: "#f2f2f2", padding: 48, gap: 54, alignItems: "center" }}>
      <img src={`data:image/jpeg;base64,${portrait.toString("base64")}`} width={390} height={534} alt="" style={{ objectFit: "cover", objectPosition: "50% 22%", borderRadius: 8 }} />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontSize: 20, letterSpacing: 4, color: "#a3a3a3", marginBottom: 34 }}>PRODUCT PORTFOLIO</div>
        <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.05, letterSpacing: -4 }}>Yago Jesus</div>
        <div style={{ fontSize: 36, marginTop: 22 }}>Product Manager</div>
        <div style={{ fontSize: 22, lineHeight: 1.6, color: "#a3a3a3", marginTop: 54 }}>Business · Technology · Experience</div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
