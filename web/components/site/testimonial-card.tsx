"use client";

import * as React from "react";
import Image from "next/image";
import { useGsapFadeIn, useGsapHover } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  index: number;
}

export const TestimonialCard = ({ quote, name, title, avatar, index }: TestimonialCardProps) => {
  const fadeRef = useGsapFadeIn<HTMLDivElement>({ delay: index * 0.1 });
  const hoverRef = useGsapHover<HTMLDivElement>();
  const composedRef = React.useCallback((node: HTMLDivElement | null) => {
    (fadeRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    (hoverRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
  }, [fadeRef, hoverRef]);

  return (
    <div
      ref={composedRef}
      className={cn(
        "flex w-full min-w-[280px] max-w-md flex-col gap-4 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-soft"
      )}
    >
      <p className="text-base text-foreground">“{quote}”</p>
      <div className="flex items-center gap-4 pt-4">
        <Image
          src={avatar}
          alt={`${name} avatar`}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full border border-border object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  );
};
