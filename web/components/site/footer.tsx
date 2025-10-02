import Link from "next/link";
import { navItems } from "@/lib/copy";

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12">
      <div className="container grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          <Link href="/" className="text-lg font-display font-semibold">
            BitsArcade
          </Link>
          <p className="max-w-md text-sm text-muted-foreground">
            Ship immersive, compliant, and provably fair gaming products faster with our modular platform and realtime ops tooling.
          </p>
          <p className="text-xs text-muted-foreground/70">© {new Date().getFullYear()} BitsArcade. All rights reserved.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-1 text-muted-foreground">
              {navItems.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-1 text-muted-foreground">
              {navItems.slice(3).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
