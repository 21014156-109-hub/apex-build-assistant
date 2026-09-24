import { createFileRoute } from "@tanstack/react-router";
import { HistoricalProjectsPage } from "@/components/construction/dashboard-pages";

export const Route = createFileRoute("/historical-projects")({
  head: () => ({
    meta: [
      { title: "Historical Projects — Apex Construction Intelligence" },
      { name: "description", content: "Comparable past projects and the rates used by the estimate." },
      { property: "og:title", content: "Historical Projects — Apex Construction Intelligence" },
      { property: "og:description", content: "Comparable past projects and the rates used by the estimate." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HistoricalProjectsPage,
});
