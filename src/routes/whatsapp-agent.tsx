import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppPage } from "@/components/construction/field-pages";

export const Route = createFileRoute("/whatsapp-agent")({
  head: () => ({
    meta: [
      { title: "WhatsApp Agent — Apex Construction Intelligence" },
      { name: "description", content: "Field reporting through a conversational WhatsApp assistant." },
      { property: "og:title", content: "WhatsApp Agent — Apex Construction Intelligence" },
      { property: "og:description", content: "Field reporting through a conversational WhatsApp assistant." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhatsAppPage,
});
