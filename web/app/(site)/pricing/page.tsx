import { PricingTable } from "@/components/site/pricing-table";
import { SplitCta } from "@/components/site/split-cta";

export const metadata = {
  title: "Pricing",
  description: "Choose the BitsArcade plan that fits your roadmap."
};

export default function PricingPage() {
  return (
    <div className="space-y-12">
      <div className="container space-y-4 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Transparent pricing</p>
        <h1 className="text-4xl font-display font-semibold text-foreground">Plans crafted for every operator stage</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          No hidden fees. Scale your brand with predictable spend and access to the capabilities that matter most.
        </p>
      </div>
      <PricingTable />
      <SplitCta />
    </div>
  );
}
