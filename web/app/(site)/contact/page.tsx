"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextareaHTMLAttributes } from "react";
import { useToast } from "@/components/ui/toast";
import { useGsapFadeIn } from "@/lib/animations";

const messageSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more about your goals")
});

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(function TextArea(
  { className, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={`min-h-[140px] w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className ?? ""}`}
      {...props}
    />
  );
});
TextArea.displayName = "TextArea";

export default function ContactPage() {
  const { toast } = useToast();
  const formRef = useGsapFadeIn<HTMLFormElement>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<z.infer<typeof messageSchema>>({ resolver: zodResolver(messageSchema) });

  const onSubmit = handleSubmit(async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast({
      title: "Message sent",
      description: "Our team will get back to you within one business day."
    });
    reset();
  });

  return (
    <div className="container grid gap-12 py-24 md:grid-cols-[1.2fr_1fr]">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Let’s build</p>
        <h1 className="text-4xl font-display font-semibold text-foreground">Partner with BitsArcade</h1>
        <p className="text-muted-foreground">
          Share your goals and a product specialist will craft a tailored launch plan. We support new ventures, migration projects, and enterprise expansions.
        </p>
      </div>
      <form ref={formRef} onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card/80 p-8 shadow-soft">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-foreground" htmlFor="name">
              Name
            </label>
            <Input id="name" placeholder="Jane Operator" aria-invalid={!!errors.name} {...register("name")} />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-foreground" htmlFor="email">
              Email
            </label>
            <Input id="email" type="email" placeholder="you@studio.gg" aria-invalid={!!errors.email} {...register("email")} />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="company">
            Studio / Company
          </label>
          <Input id="company" placeholder="Orbit Gaming" aria-invalid={!!errors.company} {...register("company")} />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="message">
            How can we help?
          </label>
          <TextArea id="message" placeholder="Share your timeline, regions, and any integrations." aria-invalid={!!errors.message} {...register("message")} />
          {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
      </form>
    </div>
  );
}
