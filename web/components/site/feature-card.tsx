"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";
import { useGsapHover } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  const ref = useGsapHover<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "group relative flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-soft transition"
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition group-hover:opacity-100" style={{ boxShadow: "0 30px 80px -40px rgba(124, 58, 237, 0.35)" }} />
    </div>
  );
};
