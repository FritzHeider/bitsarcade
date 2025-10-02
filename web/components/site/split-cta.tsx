"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useGsapFadeIn } from "@/lib/animations";

export const SplitCta = () => {
  const containerRef = useGsapFadeIn<HTMLDivElement>();

  return (
    <section aria-labelledby="cta-heading">
      <div ref={containerRef} className="container grid gap-8 rounded-2xl border border-border bg-gradient-to-br from-primary/15 via-background to-accent/10 p-10 shadow-soft md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-primary">Launch</p>
          <h2 id="cta-heading" className="text-3xl font-display font-semibold text-foreground">
            Bring cinematic wagering to your audience
          </h2>
          <p className="text-muted-foreground">
            Book a strategy session with our architects to design your go-to-market, or browse the platform to see what’s possible.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 md:items-end">
          <Button size="lg" className="w-full md:w-auto">
            Schedule a strategy call
          </Button>
          <Button variant="ghost" className="w-full md:w-auto" asChild>
            <a href="/features">View architecture diagrams</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
