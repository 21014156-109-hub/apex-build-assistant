import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/construction/dashboard-pages";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Apex Construction Intelligence" },
      { name: "description", content: "Active commercial construction projects and their estimate status." },
      { property: "og:title", content: "Projects — Apex Construction Intelligence" },
      { property: "og:description", content: "Active commercial construction projects and their estimate status." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});
