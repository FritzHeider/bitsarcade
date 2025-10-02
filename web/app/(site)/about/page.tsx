export const metadata = {
  title: "About",
  description: "Meet the team behind BitsArcade."
};

export default function AboutPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Our story</p>
        <h1 className="text-4xl font-display font-semibold text-foreground">A studio of operators, designers, and engineers</h1>
        <p className="text-muted-foreground">
          BitsArcade began as an internal tools initiative to power provably fair tournaments. Today we ship the infrastructure that keeps operators compliant, performant, and bold.
        </p>
        <div className="grid gap-6 rounded-2xl border border-border bg-card/80 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">What drives us</h2>
          <p className="text-muted-foreground">
            We believe gaming is at its best when motion, trust, and community collide. Our team pairs motion design, distributed systems, and compliance expertise to craft an operator OS that feels as good as it performs.
          </p>
          <p className="text-muted-foreground">
            From Singapore to São Paulo, we design with a global player base in mind—localization, regional compliance, and cultural nuance are in our DNA.
          </p>
        </div>
      </div>
    </div>
  );
}
