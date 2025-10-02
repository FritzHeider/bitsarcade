"use client";

import * as React from "react";
import { gsap } from "gsap";
import { pricingPlans } from "@/lib/copy";
import { Button } from "@/components/ui/button";
import { useGsapFadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

export const PricingTable = () => {
  const [billing, setBilling] = React.useState<"monthly" | "annual">("monthly");
  const containerRef = useGsapFadeIn<HTMLDivElement>();
  const cardsRef = React.useRef<HTMLDivElement[]>([]);

  const toggleBilling = (next: "monthly" | "annual") => {
    if (next === billing) return;
    setBilling(next);
  };

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mm.matches) return;

    const tl = gsap.timeline({ defaults: { duration: 0.45, ease: "power2.out" } });
    tl.to(cardsRef.current, { y: 16, opacity: 0, stagger: 0.05 })
      .set(cardsRef.current, { y: -16 })
      .to(cardsRef.current, { y: 0, opacity: 1, stagger: 0.05 });
  }, [billing]);

  return (
    <section id="pricing" aria-labelledby="pricing-heading">
      <div className="container space-y-10" ref={containerRef}>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-primary">Pricing</p>
            <h2 id="pricing-heading" className="text-3xl font-display font-semibold text-foreground">
              Choose a launch lane
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Predictable pricing with annual savings for teams ready to scale. Toggle billing to see how much your studio keeps in the bank.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-muted/60 p-1">
            <Button
              variant={billing === "monthly" ? "default" : "ghost"}
              className="rounded-full px-4"
              onClick={() => toggleBilling("monthly")}
            >
              Monthly
            </Button>
            <Button
              variant={billing === "annual" ? "default" : "ghost"}
              className="rounded-full px-4"
              onClick={() => toggleBilling("annual")}
            >
              Annual <span className="ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">Save 15%</span>
            </Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              ref={(node) => {
                if (node) cardsRef.current[index] = node;
              }}
              className={cn(
                "relative flex h-full flex-col gap-6 rounded-2xl border border-border/70 bg-card/90 p-8 shadow-soft",
                plan.featured && "overflow-hidden ring-2 ring-primary"
              )}
            >
              {plan.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <div className="text-4xl font-display font-semibold">
                {billing === "monthly" ? `$${plan.priceMonthly}` : `$${plan.priceAnnual}`}
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  / {billing === "monthly" ? "month" : "year"}
                </span>
              </div>
              <ul className="flex flex-1 flex-col gap-3 text-sm text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-auto">{plan.featured ? "Start scaling" : "Talk to sales"}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
