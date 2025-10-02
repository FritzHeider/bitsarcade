export const colorTokens = {
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: "hsl(var(--primary))",
  primaryForeground: "hsl(var(--primary-foreground))",
  secondary: "hsl(var(--secondary))",
  secondaryForeground: "hsl(var(--secondary-foreground))",
  accent: "hsl(var(--accent))",
  accentForeground: "hsl(var(--accent-foreground))",
  muted: "hsl(var(--muted))",
  mutedForeground: "hsl(var(--muted-foreground))",
  card: "hsl(var(--card))",
  cardForeground: "hsl(var(--card-foreground))",
  border: "hsl(var(--border))",
  ring: "hsl(var(--ring))"
} as const;

export const radiusTokens = {
  xl: "1.25rem",
  xxl: "1.75rem",
  pill: "999px"
} as const;

export const layoutTokens = {
  containerPadding: {
    base: "1.5rem",
    sm: "2rem",
    lg: "3rem"
  },
  maxWidth: "1440px"
} as const;

export const gradientTokens = {
  hero: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
  panel: "linear-gradient(120deg, rgba(124, 58, 237, 0.12) 0%, rgba(59, 130, 246, 0.04) 100%)"
} as const;

export const typography = {
  hero: {
    fontSize: "clamp(2.8rem, 5vw, 4.75rem)",
    lineHeight: 1.05
  },
  eyebrow: {
    letterSpacing: "0.18em",
    fontSize: "0.85rem"
  }
} as const;
