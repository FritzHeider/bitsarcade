import { featureList } from "@/lib/copy";
import { FeatureCard } from "@/components/site/feature-card";
import * as Icons from "lucide-react";
import { Metadata } from "next";

const iconMap = {
  shield: Icons.ShieldCheck,
  zap: Icons.Zap,
  trophy: Icons.Trophy,
  scale: Icons.Scale,
  wallet: Icons.Wallet,
  radar: Icons.Radar
} as const;

export const metadata: Metadata = {
  title: "Features",
  description: "Explore the BitsArcade feature stack for modern operators."
};

export default function FeaturesPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Platform features</p>
        <h1 className="text-4xl font-display font-semibold text-foreground">Built for cinematic, compliant operations</h1>
        <p className="text-muted-foreground">
          BitsArcade delivers modular capabilities covering wallets, compliance, tournaments, live ops, and growth automation. Each capability scales across chains and jurisdictions.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
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
  );
}
