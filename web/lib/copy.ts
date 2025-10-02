export const navItems = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;

export const featureList = [
  {
    name: "Provably fair play",
    description: "Cryptographic verification built into every wager ensures transparency and trust across the platform.",
    icon: "shield"
  },
  {
    name: "Instant liquidity",
    description: "High-throughput infrastructure processes more than 10k transactions per second with <50ms latency.",
    icon: "zap"
  },
  {
    name: "Global tournaments",
    description: "Host bracketed, multi-game competitions with live leaderboards and automated payouts.",
    icon: "trophy"
  },
  {
    name: "Smart compliance",
    description: "Region-aware compliance toolkit keeps your operation protected without blocking genuine players.",
    icon: "scale"
  },
  {
    name: "Wallet orchestration",
    description: "Built-in custodial and non-custodial wallet support with automated KYC flows.",
    icon: "wallet"
  },
  {
    name: "Realtime ops center",
    description: "Monitor live game health, detect fraud, and configure promotions from a single dashboard.",
    icon: "radar"
  }
] as const;

export const metricList = [
  { label: "Active players", value: 320000 },
  { label: "Markets supported", value: 42 },
  { label: "Avg. uptime", value: 99.98, precision: 2 },
  { label: "Gross wagered", value: 780000000 }
] as const;

export const testimonials = [
  {
    quote:
      "BitsArcade let us launch a multi-chain arcade in under six weeks. Player retention jumped 38% after the redesign.",
    name: "Elena Park",
    title: "COO, NeonForge",
    avatar: "/avatars/elena.svg"
  },
  {
    quote:
      "The GSAP-powered transitions give our esports broadcasts a polish we never thought possible with a lean team.",
    name: "Noah Singh",
    title: "Head of Product, Apex Arena",
    avatar: "/avatars/noah.svg"
  },
  {
    quote:
      "With BitsArcade we consolidated five legacy tools and cut hosting spend by 62% while shipping faster.",
    name: "Ivy Bennett",
    title: "GM, Orbit Gaming",
    avatar: "/avatars/ivy.svg"
  }
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    priceMonthly: 79,
    priceAnnual: 790,
    description: "Launch your brand with core casino mechanics and live ops tooling.",
    features: [
      "Core games library",
      "1M monthly API calls",
      "Realtime analytics",
      "Email support"
    ]
  },
  {
    name: "Scale",
    priceMonthly: 249,
    priceAnnual: 2490,
    description: "Grow fast with automation, compliance, and multiplayer tournaments.",
    featured: true,
    features: [
      "All Starter features",
      "Cross-chain wallet routing",
      "Advanced fraud detection",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    priceMonthly: 649,
    priceAnnual: 6490,
    description: "Tailored deployments, white-glove migration, and 24/7 operations coverage.",
    features: [
      "Dedicated customer team",
      "Custom game integrations",
      "On-premise or hybrid hosting",
      "24/7 incident response"
    ]
  }
] as const;

export const faqs = [
  {
    question: "How quickly can we launch?",
    answer:
      "Most customers onboard in two weeks with our guided migration playbooks and automated data imports."
  },
  {
    question: "Do you provide compliance tooling?",
    answer:
      "Yes. BitsArcade includes built-in KYC/KYB workflows, AML monitoring, and jurisdiction-based geofencing."
  },
  {
    question: "Can we bring our own games?",
    answer:
      "Absolutely. Use our SDK or REST API to onboard proprietary titles alongside catalog content."
  },
  {
    question: "What about chain support?",
    answer:
      "We support major L1/L2 networks with automatic failover and custody options for fiat on-ramps."
  }
] as const;

export const blogPosts = [
  {
    slug: "designing-provably-fair-experiences",
    title: "Designing Provably Fair Experiences",
    excerpt: "Strategies for weaving transparency into every touch point of a modern gaming platform.",
    date: "2024-06-04"
  },
  {
    slug: "operator-growth-playbook",
    title: "Operator Growth Playbook",
    excerpt: "From retention loops to VIP programs, explore tactics that scale wagering volume responsibly.",
    date: "2024-05-22"
  },
  {
    slug: "motion-design-in-esports",
    title: "Motion Design in Esports Broadcasts",
    excerpt: "How GSAP and WebGL amplify storytelling for live competitions and highlight reels.",
    date: "2024-05-02"
  }
] as const;
