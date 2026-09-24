import { createFileRoute } from "@tanstack/react-router";
import { DocumentsPage } from "@/components/construction/estimate-pages";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "Documents — Apex Construction Intelligence" },
      { name: "description", content: "Project drawings, specs, and addenda with staged AI analysis." },
      { property: "og:title", content: "Documents — Apex Construction Intelligence" },
      { property: "og:description", content: "Project drawings, specs, and addenda with staged AI analysis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DocumentsPage,
});
