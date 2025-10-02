import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  metadataBase: new URL("https://bitsarcade.com"),
  title: {
    default: "BitsArcade | The modern gaming growth OS",
    template: "%s | BitsArcade"
  },
  description:
    "Build cinematic wagering experiences with provably fair trust, realtime analytics, and compliance automation.",
  openGraph: {
    title: "BitsArcade | The modern gaming growth OS",
    description:
      "Build cinematic wagering experiences with provably fair trust, realtime analytics, and compliance automation.",
    url: "https://bitsarcade.com",
    siteName: "BitsArcade",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "BitsArcade" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    creator: "@bitsarcade",
    title: "BitsArcade",
    description:
      "Build cinematic wagering experiences with provably fair trust, realtime analytics, and compliance automation.",
    images: ["/og.svg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
