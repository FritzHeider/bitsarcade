"use client";

import * as React from "react";
import { metricList } from "@/lib/copy";
import { useGsapCounter, useGsapFadeIn } from "@/lib/animations";

const MetricCard = ({ label, value, precision = 0, index }: { label: string; value: number; precision?: number; index: number }) => {
  const counterRef = useGsapCounter(0, value, { delay: index * 0.1, precision });
  const fadeRef = useGsapFadeIn<HTMLDivElement>({ delay: index * 0.05 });

  return (
    <div
      ref={fadeRef}
      className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-soft"
    >
      <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="mt-4 text-4xl font-display font-semibold">
        {label === "Gross wagered" ? "$" : ""}
        <span ref={counterRef} aria-live="polite">0</span>
        {label === "Avg. uptime" ? "%" : label === "Gross wagered" ? "+" : ""}
      </div>
    </div>
  );
};

export const Metrics = () => {
  return (
    <section aria-labelledby="metrics" className="bg-secondary/20">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Impact</p>
            <h2 id="metrics" className="text-3xl font-display font-semibold text-foreground">
              Scale without the spin-out costs
            </h2>
          </div>
          <p className="max-w-lg text-muted-foreground">
            Operators across 42 markets activate BitsArcade for reliable uptime, provably fair trust, and cinematic fan experiences.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {metricList.map((metric, index) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              precision={(metric as { precision?: number }).precision}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
