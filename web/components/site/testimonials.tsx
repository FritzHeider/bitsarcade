"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/copy";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "./testimonial-card";

export const Testimonials = () => {
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const scrollBy = (delta: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container space-y-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-primary">Testimonials</p>
            <h2 id="testimonials-heading" className="text-3xl font-display font-semibold text-foreground">
              Teams shipping with BitsArcade
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Progressive operators across esports, casino, and sports use BitsArcade to deliver cinematic gameplay and provable trust at scale.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => scrollBy(-320)} aria-label="Scroll testimonials left">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scrollBy(320)} aria-label="Scroll testimonials right">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="snap-start">
              <TestimonialCard index={index} {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
