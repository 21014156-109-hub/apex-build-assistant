import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { activities, fieldReports } from "@/lib/construction-data";

type DemoContextValue = {
  analysisComplete: boolean; setAnalysisComplete: (value: boolean) => void;
  reportSubmitted: boolean; submitReport: () => void;
  correctedFlooring: number | null; setCorrectedFlooring: (value: number | null) => void;
  activities: string[]; fieldReports: typeof fieldReports;
};

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [correctedFlooring, setCorrectedFlooring] = useState<number | null>(null);

  const value = useMemo(() => ({
    analysisComplete, setAnalysisComplete, reportSubmitted,
    submitReport: () => setReportSubmitted(true), correctedFlooring, setCorrectedFlooring,
    activities: reportSubmitted ? ["New WhatsApp report received from Mike Johnson", ...activities] : activities,
    fieldReports: reportSubmitted ? [{ id: "FR-049", project: "Riverside Office Complex", worker: "Mike Johnson", date: "Sep 23, 2026", work: "Drywall installation — second floor", quantity: "1,200 SF", status: "Completed", photos: 3 }, ...fieldReports] : fieldReports,
  }), [analysisComplete, reportSubmitted, correctedFlooring]);

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (!context) throw new Error("useDemo must be used within DemoProvider");
  return context;
}