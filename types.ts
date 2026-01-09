import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface ServiceStatus {
  name: string;
  status: "operational" | "degraded" | "down";
  uptime: string;
}
