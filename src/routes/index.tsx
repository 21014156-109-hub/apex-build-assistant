import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/construction/dashboard-pages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Apex Construction Intelligence" },
      { name: "description", content: "Executive overview of estimates, verification status, and field activity." },
      { property: "og:title", content: "Dashboard — Apex Construction Intelligence" },
      { property: "og:description", content: "Executive overview of estimates, verification status, and field activity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DashboardPage,
});
