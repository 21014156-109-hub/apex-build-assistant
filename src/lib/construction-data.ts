export type EvidenceStatus = "VERIFIED" | "SUPPORTED" | "NEEDS REVIEW" | "MISSING";

export type Project = {
  id: string; name: string; type: string; location: string; client: string;
  value: number; size: number; status: string; completion: number; phase: string;
};

export type EstimateItem = {
  id: string; code: string; trade: string; item: string; quantity: number | null;
  unit: string; rate: number | null; cost: number; status: EvidenceStatus;
  source: string; historical: string; explanation: string;
};

export const company = { name: "Apex Commercial Construction", initials: "AC" };

export const projects: Project[] = [
  { id: "riverside", name: "Riverside Office Complex", type: "Commercial Office Building", location: "Austin, TX", client: "Riverside Holdings", value: 2400000, size: 52000, status: "Active", completion: 38, phase: "Interior build-out" },
  { id: "harbor", name: "Harbor Logistics Center", type: "Industrial", location: "Houston, TX", client: "Harbor Freight Group", value: 2150000, size: 68000, status: "Active", completion: 64, phase: "MEP rough-in" },
  { id: "cedar", name: "Cedar Grove Clinic", type: "Healthcare", location: "Round Rock, TX", client: "Cedar Health", value: 1850000, size: 31000, status: "Active", completion: 21, phase: "Structure" },
  { id: "union", name: "Union Market Hall", type: "Retail", location: "San Antonio, TX", client: "Union Partners", value: 1360000, size: 26000, status: "Active", completion: 77, phase: "Finishes" },
  { id: "oak", name: "Oakline Headquarters", type: "Commercial Office", location: "Dallas, TX", client: "Oakline Systems", value: 940000, size: 18500, status: "Preconstruction", completion: 8, phase: "Estimating" },
];

export const historicalProjects = [
  { name: "Northpoint Corporate Plaza", value: 2800000, size: 54000, type: "Commercial Office", year: 2025, similarity: 86, usedFor: ["Drywall pricing", "Flooring rates", "Labor assumptions", "General conditions"] },
  { name: "Downtown Business Center", value: 2450000, size: 49800, type: "Commercial Office", year: 2024, similarity: 82, usedFor: ["Concrete rates", "Electrical allowances", "Steel erection"] },
  { name: "Westside Medical Office", value: 3150000, size: 46700, type: "Medical Office", year: 2025, similarity: 74, usedFor: ["HVAC labor", "Interior finishes", "Door hardware"] },
  { name: "Lakeside Retail Center", value: 1980000, size: 58300, type: "Retail", year: 2023, similarity: 68, usedFor: ["Sitework", "Flooring materials", "General conditions"] },
  { name: "Midtown Office Renovation", value: 1240000, size: 28500, type: "Office Renovation", year: 2024, similarity: 65, usedFor: ["Painting rates", "Ceiling systems", "Finish labor"] },
];

const documentNames = [
  ["Architectural", "A-001 Cover & Code Summary", "PDF", "4.2 MB"], ["Architectural", "A-101 First Floor Plan", "PDF", "8.4 MB"],
  ["Architectural", "A-102 Second Floor Plan", "PDF", "8.1 MB"], ["Architectural", "A-201 Elevations", "PDF", "6.7 MB"],
  ["Architectural", "A-301 Building Sections", "PDF", "5.9 MB"], ["Architectural", "A-401 Wall Sections", "PDF", "4.6 MB"],
  ["Architectural", "A-601 Door Schedule", "PDF", "3.1 MB"], ["Structural", "S-001 General Notes", "PDF", "2.2 MB"],
  ["Structural", "S-101 Foundation Plan", "PDF", "7.8 MB"], ["Structural", "S-201 Structural Layout", "PDF", "7.2 MB"],
  ["Structural", "S-301 Framing Details", "PDF", "5.4 MB"], ["Mechanical", "M-001 Mechanical Schedule", "PDF", "2.8 MB"],
  ["Mechanical", "M-101 HVAC Plan", "PDF", "9.1 MB"], ["Mechanical", "M-201 HVAC Details", "PDF", "4.9 MB"],
  ["Electrical", "E-001 Electrical Schedule", "PDF", "2.5 MB"], ["Electrical", "E-101 Lighting Plan", "PDF", "8.6 MB"],
  ["Electrical", "E-201 Power Plan", "PDF", "8.0 MB"], ["Plumbing", "P-101 Plumbing Plan", "PDF", "6.3 MB"],
  ["Specifications", "Project Specifications", "PDF", "18.4 MB"], ["Specifications", "Finish Schedule", "XLSX", "1.2 MB"],
  ["Previous Estimates", "Riverside Preliminary Estimate", "XLSX", "2.4 MB"], ["Previous Estimates", "Riverside Approved Estimate", "XLSX", "2.7 MB"],
] as const;

export const documents = documentNames.map((doc, index) => ({
  id: `doc-${index + 1}`, category: doc[0], name: doc[1], type: doc[2], size: doc[3],
  uploaded: index < 8 ? "Sep 18, 2026" : index < 16 ? "Sep 19, 2026" : "Sep 20, 2026",
  processing: index === 21 ? "Ready" : "Processed", aiStatus: index === 21 ? "Needs review" : "AI analyzed",
}));

const baseItems: Omit<EstimateItem, "id" | "code">[] = [
  { trade: "General Conditions", item: "Project supervision", quantity: 10, unit: "MO", rate: 18200, cost: 182000, status: "VERIFIED", source: "Project schedule — 10 months", historical: "Northpoint Corporate Plaza", explanation: "Duration was taken from the project schedule and checked against two similar office projects." },
  { trade: "Concrete", item: "Foundations and slabs", quantity: 1240, unit: "CY", rate: 240.65, cost: 298400, status: "VERIFIED", source: "S-101 — Foundation Plan", historical: "Downtown Business Center", explanation: "Concrete volume was measured from foundation dimensions and priced against a recent comparable project." },
  { trade: "Structural Steel", item: "Structural steel frame", quantity: 182, unit: "TON", rate: 2285.71, cost: 416000, status: "VERIFIED", source: "S-201 — Structural Layout", historical: "Downtown Business Center", explanation: "Steel tonnage is supported by the structural schedule and comparable erection rates." },
  { trade: "Drywall", item: "Interior gypsum assemblies", quantity: 62400, unit: "SF", rate: 2.8, cost: 174720, status: "VERIFIED", source: "A-102 — Second Floor Plan", historical: "Northpoint Corporate Plaza", explanation: "The estimated drywall quantity was derived from the second-floor plan and cross-checked against three historical commercial projects with similar floor areas and scope." },
  { trade: "Flooring", item: "Carpet tile and LVT", quantity: 48200, unit: "SF", rate: 4.4, cost: 212080, status: "NEEDS REVIEW", source: "Finish Schedule — partial", historical: "Northpoint Corporate Plaza", explanation: "Floor area is measured, but final material selections are incomplete. The rate uses the latest comparable office project." },
  { trade: "Electrical", item: "Electrical systems allowance", quantity: null, unit: "LS", rate: null, cost: 386500, status: "NEEDS REVIEW", source: "E-101 / E-201 — design development", historical: "Downtown Business Center", explanation: "The allowance is based on current drawings and a comparable office project; fixture specifications require confirmation." },
  { trade: "HVAC", item: "HVAC systems allowance", quantity: null, unit: "LS", rate: null, cost: 328000, status: "MISSING", source: "M-101 — incomplete equipment schedule", historical: "Westside Medical Office", explanation: "Duct distribution is documented, but final equipment specifications are missing. Supervisor review is required." },
  { trade: "Painting", item: "Interior walls and ceilings", quantity: 91000, unit: "SF", rate: 1.5, cost: 136500, status: "VERIFIED", source: "A-101 / A-102 — Floor Plans", historical: "Midtown Office Renovation", explanation: "Paintable surface was derived from wall lengths and heights, with openings deducted." },
];

const detailTemplates = [
  ["Sitework", "Earthwork and grading", 52000, "SF", 0.72, "VERIFIED"], ["Sitework", "Storm drainage", 1, "LS", 27500, "SUPPORTED"],
  ["Concrete", "Reinforcing steel", 86, "TON", 1320, "VERIFIED"], ["Concrete", "Formwork", 14800, "SF", 5.6, "VERIFIED"],
  ["Masonry", "Exterior masonry", 16500, "SF", 10.4, "SUPPORTED"], ["Metals", "Miscellaneous metals", 1, "LS", 48500, "SUPPORTED"],
  ["Carpentry", "Rough carpentry", 1, "LS", 28600, "VERIFIED"], ["Thermal", "Roofing system", 26800, "SF", 6.35, "VERIFIED"],
  ["Openings", "Doors and hardware", 48, "EA", 1380, "VERIFIED"], ["Openings", "Exterior glazing", 76, "EA", 1040, "SUPPORTED"],
  ["Finishes", "Acoustic ceilings", 41200, "SF", 2.15, "VERIFIED"], ["Finishes", "Ceramic tile", 6800, "SF", 7.9, "NEEDS REVIEW"],
  ["Specialties", "Toilet accessories", 1, "LS", 18400, "SUPPORTED"], ["Equipment", "Breakroom equipment", 1, "LS", 16200, "NEEDS REVIEW"],
  ["Furnishings", "Window treatments", 76, "EA", 285, "SUPPORTED"], ["Fire Protection", "Sprinkler system", 52000, "SF", 2.05, "SUPPORTED"],
  ["Plumbing", "Plumbing systems", 1, "LS", 186000, "SUPPORTED"], ["Electrical", "Lighting fixtures", 248, "EA", 385, "NEEDS REVIEW"],
  ["Communications", "Data and low voltage", 1, "LS", 82400, "MISSING"], ["Security", "Access control", 16, "EA", 1250, "SUPPORTED"],
  ["Landscaping", "Landscape and irrigation", 1, "LS", 39200, "SUPPORTED"], ["Closeout", "Testing and commissioning", 1, "LS", 22500, "VERIFIED"],
  ["Closeout", "Final cleaning", 52000, "SF", 0.28, "VERIFIED"], ["General Conditions", "Temporary facilities", 10, "MO", 5600, "SUPPORTED"],
] as const;

export const estimateItems: EstimateItem[] = [
  ...baseItems.map((item, index) => ({ ...item, id: `est-${index + 1}`, code: `${index + 1}000` })),
  ...detailTemplates.map((item, index) => ({
    id: `est-${index + 9}`, code: `${index + 9}000`, trade: item[0], item: item[1], quantity: item[2], unit: item[3], rate: item[4],
    cost: Math.round(Number(item[2]) * Number(item[4])), status: item[5] as EvidenceStatus,
    source: index % 3 === 0 ? "Project drawings" : "Project specifications", historical: historicalProjects[index % historicalProjects.length].name,
    explanation: "The quantity is sourced from the current project set and the rate is checked against comparable company history.",
  })),
];

export const estimateTotal = 2274850;
export const costBreakdown = [
  { name: "Materials", value: 1124500, color: "var(--chart-1)" }, { name: "Labor", value: 642300, color: "var(--chart-2)" },
  { name: "Equipment", value: 178200, color: "var(--chart-3)" }, { name: "Subcontractors", value: 212000, color: "var(--chart-4)" },
  { name: "Overhead", value: 72500, color: "var(--chart-5)" }, { name: "Contingency", value: 45350, color: "var(--warning)" },
];

export const assumptions = [
  { title: "Flooring pricing", detail: "Based on the most recent comparable commercial office project.", status: "SUPPORTED" as EvidenceStatus },
  { title: "Waste factor set to 7%", detail: "Applied to drywall and finish flooring quantities.", status: "NEEDS REVIEW" as EvidenceStatus },
  { title: "HVAC equipment specification", detail: "Final equipment schedule was not included in the current drawing set.", status: "MISSING" as EvidenceStatus },
];

export const activities = [
  "AI completed analysis of Riverside Office Complex", "New field report received from Mike Johnson", "4 estimate items require review",
  "Historical project comparison completed", "Final estimate report generated", "A-102 plan revision uploaded", "Concrete quantity verified",
  "HVAC allowance flagged for missing specification", "Flooring rate matched to Northpoint Corporate Plaza", "Daily report #047 approved",
  "Steel takeoff reviewed by Sarah Chen", "Lighting fixture count updated", "Riverside estimate shared with preconstruction team",
  "Material delivery issue resolved", "Site photo added to report #046", "Electrical subcontractor quote received",
  "Waste factor assumption added", "Project schedule updated", "Door schedule analysis completed", "Cost variance report generated",
];

export const fieldReports = Array.from({ length: 11 }, (_, index) => ({
  id: `FR-${String(48 - index).padStart(3, "0")}`, project: index < 6 ? "Riverside Office Complex" : projects[(index % 4) + 1].name,
  worker: ["Mike Johnson", "Sarah Chen", "Carlos Ramirez", "Emily Davis", "James Wilson", "Priya Patel"][index % 6],
  date: index === 0 ? "Sep 23, 2026" : `Sep ${22 - index}, 2026`, work: index === 0 ? "Drywall installation — second floor" : ["Electrical rough-in", "Concrete placement", "HVAC ductwork", "Steel connections"][index % 4],
  quantity: index === 0 ? "1,200 SF" : ["40 fixtures", "86 CY", "420 LF", "18 connections"][index % 4], status: index === 3 ? "Needs review" : "Completed", photos: index % 4,
}));

export const workers = ["Mike Johnson", "Sarah Chen", "Carlos Ramirez", "Emily Davis", "James Wilson", "Priya Patel"];

const scriptedConversation = [
  ["worker", "We finished drywall on the second floor."], ["ai", "Great. How much drywall was installed?"],
  ["worker", "Around 1,200 square feet."], ["ai", "Were there any delays or issues today?"],
  ["worker", "Yes, the material arrived about 2 hours late."], ["ai", "Understood. Did the delay affect today's planned work?"],
  ["worker", "No, we still completed the planned drywall work."], ["ai", "Thanks. Please send me a photo of the completed work."],
  ["worker", "PHOTO"], ["ai", "Photo received. Possible drywall installation detected on the second floor. This simulated observation requires supervisor review."],
  ["ai", "I have everything I need. Would you like me to submit today's site report?"], ["worker", "Yes."],
] as const;

export const whatsappMessages = Array.from({ length: 32 }, (_, index) => {
  const current = scriptedConversation[index < 12 ? index : index % 8];
  return { id: `wa-${index + 1}`, role: current[0], text: current[1], time: `3:${String(4 + index).padStart(2, "0")} PM` };
});

export const formatCurrency = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
export const formatNumber = (value: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(value);