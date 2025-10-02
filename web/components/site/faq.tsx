"use client";

import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/copy";
import { useGsapFadeIn } from "@/lib/animations";
import { gsap } from "gsap";

const FaqItem = ({ faq, index, isOpen }: { faq: (typeof faqs)[number]; index: number; isOpen: boolean }) => {
  const fadeRef = useGsapFadeIn<HTMLDivElement>({ delay: index * 0.05 });
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const initialized = React.useRef(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const content = contentRef.current;
    if (!content) return;

    if (!initialized.current) {
      initialized.current = true;
      content.style.height = isOpen ? "auto" : "0px";
      return;
    }

    const targetHeight = isOpen ? content.scrollHeight : 0;
    const startHeight = isOpen ? 0 : content.scrollHeight;
    content.style.height = `${startHeight}px`;
    const mm = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mm.matches) {
      content.style.height = `${targetHeight}px`;
      return;
    }

    gsap.to(content, {
      height: targetHeight,
      duration: 0.45,
      ease: "power2.out",
      onComplete: () => {
        if (isOpen) {
          content.style.height = "auto";
        }
      }
    });
  }, [isOpen]);

  return (
    <Accordion.Item
      value={faq.question}
      ref={(node) => {
        (fadeRef as React.MutableRefObject<HTMLDivElement | null>).current = node as HTMLDivElement;
      }}
      className="overflow-hidden rounded-2xl border border-border/60 bg-card/80"
    >
      <Accordion.Header>
        <Accordion.Trigger
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-foreground transition hover:bg-muted/60"
        >
          {faq.question}
          <ChevronDown className="h-5 w-5 transition data-[state=open]:rotate-180" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content
        forceMount
        ref={contentRef}
        className="px-6 text-sm text-muted-foreground"
        style={{ height: isOpen ? "auto" : 0, overflow: "hidden" }}
      >
        <div className="py-4">{faq.answer}</div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export const FAQ = () => {
  const [openItem, setOpenItem] = React.useState<string | undefined>();

  return (
    <section aria-labelledby="faq-heading" className="bg-secondary/20">
      <div className="container space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.28em] text-primary">FAQ</p>
          <h2 id="faq-heading" className="text-3xl font-display font-semibold text-foreground">
            Answers before kickoff
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Everything you need to know about launch timelines, compliance, integrations, and supported markets.
          </p>
        </div>
        <Accordion.Root
          type="single"
          collapsible
          value={openItem}
          onValueChange={(value) => setOpenItem(value || undefined)}
          className="grid gap-4"
        >
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} faq={faq} index={index} isOpen={openItem === faq.question} />
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};
