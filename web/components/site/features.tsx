"use client";

import * as React from "react";
import { featureList } from "@/lib/copy";
import { FeatureCard } from "./feature-card";
import { useGsapFadeIn } from "@/lib/animations";
import * as Icons from "lucide-react";

const iconMap = {
  shield: Icons.ShieldCheck,
  zap: Icons.Zap,
  trophy: Icons.Trophy,
  scale: Icons.Scale,
  wallet: Icons.Wallet,
  radar: Icons.Radar
} as const;

export const Features = () => {
  const containerRef = useGsapFadeIn<HTMLDivElement>();

  return (
    <section aria-labelledby="features-heading">
      <div ref={containerRef} className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Platform</p>
          <h2 id="features-heading" className="text-3xl font-display font-semibold text-foreground">
            Everything operators need to craft unforgettable play
          </h2>
          <p className="text-muted-foreground">
            From wallet orchestration to compliance, BitsArcade brings modular building blocks with realtime observability and cinematic presentation layers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featureList.map((feature) => (
            <FeatureCard
              key={feature.name}
              icon={iconMap[feature.icon as keyof typeof iconMap] ?? Icons.Sparkles}
              title={feature.name}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
