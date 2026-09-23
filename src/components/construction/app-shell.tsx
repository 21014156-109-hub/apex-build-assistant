import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, Blocks, Bot, Building2, Calculator, ChartNoAxesCombined, ChevronDown, ClipboardList, FileBarChart, FileStack, FolderKanban, HardHat, History, Menu, Search, Settings, Shapes, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { company } from "@/lib/construction-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  ["Dashboard", "/", Blocks], ["Projects", "/projects", FolderKanban], ["AI Estimator", "/estimator", Calculator],
  ["Documents", "/documents", FileStack], ["Historical Projects", "/historical-projects", History], ["Takeoff", "/takeoff", Shapes],
  ["Cost Analysis", "/cost-analysis", ChartNoAxesCombined], ["Field Reports", "/field-reports", ClipboardList],
  ["WhatsApp Agent", "/whatsapp-agent", Bot], ["Reports", "/reports", FileBarChart], ["Settings", "/settings", Settings],
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const sidebar = <>
    <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-5">
      <div className="grid size-9 place-items-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground"><HardHat className="size-5" /></div>
      <div className="min-w-0"><p className="truncate text-sm font-bold">APEX</p><p className="truncate text-[11px] text-sidebar-foreground/60">Construction Intelligence</p></div>
      <button className="ml-auto lg:hidden" aria-label="Close menu" onClick={() => setMobileOpen(false)}><X className="size-5" /></button>
    </div>
    <div className="border-b border-sidebar-border p-3">
      <button className="flex w-full items-center gap-3 rounded-md border border-sidebar-border bg-sidebar-accent px-3 py-2.5 text-left">
        <Building2 className="size-4 text-sidebar-primary"/><span className="min-w-0 flex-1"><span className="block truncate text-xs font-semibold">Riverside Office Complex</span><span className="block text-[10px] text-sidebar-foreground/60">Active project</span></span><ChevronDown className="size-3.5"/>
      </button>
    </div>
    <nav className="flex-1 space-y-1 overflow-y-auto p-3" aria-label="Main navigation">
      {nav.map(([label, to, Icon]) => {
        const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
        return <Link key={to} to={to} onClick={() => setMobileOpen(false)} className={cn("flex h-10 items-center gap-3 rounded-md px-3 text-sm transition-colors", active ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground")}><Icon className="size-4"/><span>{label}</span></Link>;
      })}
    </nav>
    <div className="border-t border-sidebar-border p-4"><div className="flex items-center gap-3"><div className="grid size-8 place-items-center rounded-full bg-sidebar-accent text-xs font-bold">MZ</div><div><p className="text-xs font-semibold">Muhammad Zohaib</p><p className="text-[10px] text-sidebar-foreground/60">Preconstruction Director</p></div></div></div>
  </>;

  return <div className="min-h-screen bg-background text-foreground">
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex">{sidebar}</aside>
    {mobileOpen && <div className="fixed inset-0 z-50 lg:hidden"><button className="absolute inset-0 bg-foreground/30" aria-label="Close menu" onClick={() => setMobileOpen(false)}/><aside className="relative flex h-full w-72 flex-col bg-sidebar text-sidebar-foreground shadow-xl">{sidebar}</aside></div>}
    <div className="lg:pl-64">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur md:px-7">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu/></Button>
        <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex"><span>{company.name}</span><span>/</span><span className="font-medium text-foreground">Operations</span></div>
        <div className="ml-auto flex items-center gap-2"><button aria-label="Search" className="grid size-9 place-items-center rounded-md text-muted-foreground hover:bg-muted"><Search className="size-4"/></button><button aria-label="Notifications" className="relative grid size-9 place-items-center rounded-md text-muted-foreground hover:bg-muted"><Bell className="size-4"/><span className="absolute right-2 top-2 size-1.5 rounded-full bg-destructive"/></button><div className="ml-1 hidden h-8 items-center border-l pl-3 text-xs font-medium md:flex">Demo workspace</div></div>
      </header>
      <main className="mx-auto w-full max-w-[1600px] p-4 md:p-7 xl:p-8">{children}</main>
    </div>
  </div>;
}