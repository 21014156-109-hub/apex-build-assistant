import { assumptions, estimateItems, historicalProjects, type EstimateItem } from "./construction-data";

export interface AIService {
  analyzeDocuments(): Promise<{ documents: number; pages: number; matches: number; reviewItems: number }>;
  findHistoricalProjects(): Promise<typeof historicalProjects>;
  generateEstimate(): Promise<typeof estimateItems>;
  explainEstimate(item: EstimateItem): Promise<string>;
  identifyAssumptions(): Promise<typeof assumptions>;
  generateFieldReport(): Promise<{ success: true; id: string }>;
  continueFieldConversation(message: string): Promise<string>;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockAIService: AIService = {
  async analyzeDocuments() { await delay(350); return { documents: 14, pages: 238, matches: 3, reviewItems: 4 }; },
  async findHistoricalProjects() { return historicalProjects; },
  async generateEstimate() { return estimateItems; },
  async explainEstimate(item) { return item.explanation; },
  async identifyAssumptions() { return assumptions; },
  async generateFieldReport() { await delay(300); return { success: true, id: "FR-049" }; },
  async continueFieldConversation(message) {
    const text = message.toLowerCase();
    if (text.includes("electrical")) return "Which area of the project did you work on?";
    if (text.includes("third floor")) return "What electrical work was completed?";
    if (text.includes("fixture")) return "Approximately how many fixtures were installed?";
    return "Thanks. Were there any delays, safety concerns, or issues to record?";
  },
};