"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-2xl border border-border bg-background/95 p-4 text-sm shadow-glow backdrop-blur-xs transition",
  {
    variants: {
      variant: {
        default: "text-foreground",
        destructive: "border-destructive/60 bg-destructive/15 text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

const ToastContext = React.createContext<{
  toasts: ToastProps[];
  toast: (toast: ToastProps) => void;
  dismiss: (id: string) => void;
}>({
  toasts: [],
  toast: () => undefined,
  dismiss: () => undefined
});

export type ToastProps = VariantProps<typeof toastVariants> & {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  duration?: number;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = React.useState<ToastProps[]>([]);

  const dismiss = React.useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const toast = React.useCallback((toast: ToastProps) => {
    const id = toast.id ?? (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2));
    setToasts((current) => [...current, { ...toast, id }]);
    const duration = toast.duration ?? 4000;
    window.setTimeout(() => dismiss(id), duration);
  }, [dismiss]);

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <div className="fixed inset-x-0 bottom-6 z-[100] flex flex-col items-center gap-3 px-4 sm:items-end sm:px-8">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => React.useContext(ToastContext);

const Toast = ({ title, description, action, variant, id }: ToastProps) => {
  const { dismiss } = useToast();

  return (
    <div className={cn(toastVariants({ variant }))} role="status" aria-live="polite">
      <div className="flex flex-1 flex-col gap-1">
        {title && <p className="text-sm font-semibold">{title}</p>}
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
        {action}
      </div>
      <button
        onClick={() => id && dismiss(id)}
        className="rounded-full p-1 text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export { Toast };
