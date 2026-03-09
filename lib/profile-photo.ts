import { access, readFile } from "node:fs/promises";
import path from "node:path";

const candidates = [
  "emirhan-profile.avif",
  "emirhan-profile.webp",
  "emirhan-profile.png",
  "emirhan-profile.jpg",
  "emirhan-profile.jpeg",
] as const;

function isValidImageSignature(fileName: string, bytes: Buffer) {
  if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) {
    return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  }

  if (fileName.endsWith(".png")) {
    return (
      bytes[0] === 0x89 &&
      bytes[1] === 0x50 &&
      bytes[2] === 0x4e &&
      bytes[3] === 0x47
    );
  }

  if (fileName.endsWith(".webp")) {
    return (
      bytes.subarray(0, 4).toString("ascii") === "RIFF" &&
      bytes.subarray(8, 12).toString("ascii") === "WEBP"
    );
  }

  if (fileName.endsWith(".avif")) {
    return bytes.subarray(4, 12).toString("ascii").includes("ftyp");
  }

  return false;
}

export async function getProfilePhotoPath() {
  for (const fileName of candidates) {
    const filePath = path.join(process.cwd(), "public", "images", fileName);

    try {
      await access(filePath);
      const bytes = await readFile(filePath);

      if (isValidImageSignature(fileName, bytes)) {
        return `/images/${fileName}`;
      }
    } catch {
      continue;
    }
  }

  return null;
}
