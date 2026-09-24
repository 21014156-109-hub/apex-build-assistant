import { createFileRoute } from "@tanstack/react-router";
import { ReportsPage } from "@/components/construction/field-pages";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Reports — Apex Construction Intelligence" },
      { name: "description", content: "Estimate, cost, and field report library." },
      { property: "og:title", content: "Reports — Apex Construction Intelligence" },
      { property: "og:description", content: "Estimate, cost, and field report library." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReportsPage,
});
