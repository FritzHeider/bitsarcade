"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/copy";
import { cn } from "@/lib/utils";

export const SiteHeader = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        isScrolled ? "backdrop-blur-lg bg-background/85 border-b border-border" : "bg-transparent"
      )}
      role="banner"
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-lg font-display font-semibold">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-primary">BA</span>
          BitsArcade
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button className="hidden lg:inline-flex" asChild>
            <Link href="/contact">Book a demo</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4 text-lg font-medium" aria-label="Mobile">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-xl px-3 py-2 transition hover:bg-muted/60">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
