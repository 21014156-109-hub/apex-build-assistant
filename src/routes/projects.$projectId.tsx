import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailPage } from "@/components/construction/dashboard-pages";

export const Route = createFileRoute("/projects/$projectId")({
  head: () => ({
    meta: [
      { title: "Project Details — Apex Construction Intelligence" },
      { name: "description", content: "Project facts, progress, estimate, and risk summary." },
      { property: "og:title", content: "Project Details — Apex Construction Intelligence" },
      { property: "og:description", content: "Project facts, progress, estimate, and risk summary." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Detail,
});

function Detail() {
  const { projectId } = Route.useParams();
  return <ProjectDetailPage projectId={projectId} />;
}
