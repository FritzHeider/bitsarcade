"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGsapTimeline } from "@/lib/animations";
import { gradientTokens, typography } from "@/lib/design-tokens";

export const Hero = () => {
  const containerRef = useGsapTimeline<HTMLDivElement>((tl, el) => {
    const heroNodes = Array.from(el.querySelectorAll("[data-hero]"));
    const [eyebrow, headline, subcopy, ctas] = heroNodes;
    if (eyebrow) {
      tl.from(eyebrow, { y: 40, opacity: 0, duration: 0.6 });
    }
    if (headline) {
      tl.from(headline, { y: 48, opacity: 0, duration: 0.75 }, "-=0.3");
    }
    if (subcopy) {
      tl.from(subcopy, { y: 32, opacity: 0, duration: 0.6 }, "-=0.4");
    }
    if (ctas instanceof HTMLElement) {
      tl.from(ctas.children, { y: 24, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3");
    }
  });

  const backgroundRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (!backgroundRef.current) return;
    const el = backgroundRef.current;
    const mm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mm.matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: -18,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          scrub: true
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden pb-20 pt-32">
      <div
        ref={backgroundRef}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[680px] -translate-y-20 opacity-80"
        style={{ background: gradientTokens.hero, filter: "blur(80px)" }}
      />
      <div ref={containerRef} className="container relative">
        <div className="max-w-xl space-y-6">
          <Badge className="bg-primary/15 text-primary" data-hero>
            Powered by provable fairness
          </Badge>
          <h1
            className="font-display font-semibold tracking-tight text-foreground"
            data-hero
            style={typography.hero}
          >
            The gaming growth OS for bold operators
          </h1>
          <p className="text-lg text-muted-foreground" data-hero>
            Launch immersive wagering experiences with realtime analytics, automated compliance, and cinematic motion design—all in one cloud-native stack.
          </p>
          <div className="flex flex-wrap gap-4" data-hero>
            <Button asChild>
              <Link href="/contact">
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/features">Explore the platform</Link>
            </Button>
          </div>
        </div>
        <div className="relative mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/80 bg-card/60 p-6 shadow-soft backdrop-blur-xs">
            <h3 className="text-sm font-semibold text-muted-foreground">Realtime pipelines</h3>
            <p className="mt-3 text-foreground">
              Stream gameplay events into your data warehouse with zero-config connectors and actionable alerts.
            </p>
          </div>
          <div className="relative rounded-2xl border border-border/80 bg-card/60 p-6 shadow-soft backdrop-blur-xs">
            <Image
              src="/hero-dashboard.svg"
              alt="Platform dashboard"
              width={560}
              height={340}
              className="h-auto w-full rounded-xl border border-border/60 object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="container mt-20 flex flex-wrap items-center justify-between gap-6 text-muted-foreground">
        <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground/70">Trusted by teams scaling esports and casinos</p>
        <div className="flex flex-wrap items-center gap-6 opacity-60">
          {[
            "NeonForge",
            "Apex Arena",
            "Orbit Gaming",
            "Flux Labs",
            "CrystalPlay"
          ].map((brand) => (
            <span key={brand} className="text-base font-semibold tracking-wide">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
