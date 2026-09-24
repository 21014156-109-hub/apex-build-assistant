import { createFileRoute } from "@tanstack/react-router";
import { TakeoffPage } from "@/components/construction/estimate-pages";

export const Route = createFileRoute("/takeoff")({
  head: () => ({
    meta: [
      { title: "Takeoff — Apex Construction Intelligence" },
      { name: "description", content: "Simulated plan takeoff with quantity evidence overlays." },
      { property: "og:title", content: "Takeoff — Apex Construction Intelligence" },
      { property: "og:description", content: "Simulated plan takeoff with quantity evidence overlays." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TakeoffPage,
});
