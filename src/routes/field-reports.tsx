import { createFileRoute } from "@tanstack/react-router";
import { FieldReportsPage } from "@/components/construction/field-pages";

export const Route = createFileRoute("/field-reports")({
  head: () => ({
    meta: [
      { title: "Field Reports — Apex Construction Intelligence" },
      { name: "description", content: "Daily site reports from supervisors and the WhatsApp agent." },
      { property: "og:title", content: "Field Reports — Apex Construction Intelligence" },
      { property: "og:description", content: "Daily site reports from supervisors and the WhatsApp agent." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FieldReportsPage,
});
