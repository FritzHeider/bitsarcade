"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";
import { useGsapFadeIn } from "@/lib/animations";

const emailSchema = z.object({
  email: z.string().email("Enter a valid email address")
});

export const EmailCapture = () => {
  const { toast } = useToast();
  const formRef = useGsapFadeIn<HTMLFormElement>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema)
  });

  const onSubmit = handleSubmit(async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast({
      title: "Subscribed",
      description: "We just sent the playbook to your inbox."
    });
    reset();
  });

  return (
    <section aria-labelledby="email-heading">
      <div className="container grid gap-6 rounded-2xl border border-border bg-card/80 p-10 shadow-soft md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Newsletter</p>
          <h2 id="email-heading" className="text-3xl font-display font-semibold text-foreground">
            Get the operator growth briefing
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Monthly strategies, retention tactics, and infrastructure deep dives from the BitsArcade studio team.
          </p>
        </div>
        <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Work email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@studio.gg"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
            {isSubmitting ? "Sending…" : "Join the list"}
          </Button>
          <p className="text-xs text-muted-foreground">
            No spam ever. We respect your inbox and your players.
          </p>
        </form>
      </div>
    </section>
  );
};
