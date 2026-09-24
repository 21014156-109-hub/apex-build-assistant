import { createFileRoute } from "@tanstack/react-router";
import { EstimatorPage } from "@/components/construction/estimate-pages";

export const Route = createFileRoute("/estimator")({
  head: () => ({
    meta: [
      { title: "AI Estimator — Apex Construction Intelligence" },
      { name: "description", content: "Evidence-backed estimate lines with verification and human review." },
      { property: "og:title", content: "AI Estimator — Apex Construction Intelligence" },
      { property: "og:description", content: "Evidence-backed estimate lines with verification and human review." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EstimatorPage,
});
