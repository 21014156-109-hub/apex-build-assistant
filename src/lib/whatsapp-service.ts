import { mockAIService } from "./ai-service";

export interface WhatsAppService {
  sendMessage(text: string): Promise<string>;
  receiveMessage(): Promise<string>;
  sendMedia(type: "photo" | "voice"): Promise<{ accepted: true; simulatedAnalysis: string }>;
  receiveMedia(): Promise<{ type: "photo"; count: number }>;
  createReport(): Promise<{ success: true; id: string }>;
}

export const mockWhatsAppService: WhatsAppService = {
  sendMessage: (text) => mockAIService.continueFieldConversation(text),
  async receiveMessage() { return "Field update received."; },
  async sendMedia(type) { return { accepted: true, simulatedAnalysis: type === "photo" ? "Possible drywall installation detected. Requires supervisor review." : "Installed around 40 light fixtures on the third floor." }; },
  async receiveMedia() { return { type: "photo", count: 3 }; },
  createReport: () => mockAIService.generateFieldReport(),
};