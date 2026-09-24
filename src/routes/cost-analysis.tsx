import { createFileRoute } from "@tanstack/react-router";
import { CostAnalysisPage } from "@/components/construction/estimate-pages";

export const Route = createFileRoute("/cost-analysis")({
  head: () => ({
    meta: [
      { title: "Cost Analysis — Apex Construction Intelligence" },
      { name: "description", content: "Cost breakdown by trade and category with charts." },
      { property: "og:title", content: "Cost Analysis — Apex Construction Intelligence" },
      { property: "og:description", content: "Cost breakdown by trade and category with charts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CostAnalysisPage,
});
