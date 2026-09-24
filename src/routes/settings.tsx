import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "@/components/construction/field-pages";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Apex Construction Intelligence" },
      { name: "description", content: "Company, verification, and integration settings." },
      { property: "og:title", content: "Settings — Apex Construction Intelligence" },
      { property: "og:description", content: "Company, verification, and integration settings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SettingsPage,
});
