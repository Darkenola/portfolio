import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Darkenola Portfolio",
    short_name: "Darkenola",
    description:
      "Premium software developer portfolio for Emirhan, focused on backend systems, automation, and polished digital experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#07080b",
    theme_color: "#07080b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
