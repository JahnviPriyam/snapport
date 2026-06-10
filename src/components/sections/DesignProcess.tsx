import { FadeIn } from "@/components/animations/FadeIn";

export function DesignProcess() {
  const steps = [
    {
      title: "Understand Users",
      desc: "Gather context from stakeholders and users to identify needs and constraints.",
    },
    {
      title: "Define Problems",
      desc: "Frame clear problem statements and prioritize user pain points to solve.",
    },
    {
      title: "Design Solutions",
      desc: "Sketch flows and propose solutions that balance usability and technical feasibility.",
    },
    {
      title: "Build & Iterate",
      desc: "Implement pragmatic prototypes, ship incremental improvements, and iterate.",
    },
    {
      title: "Measure & Improve",
      desc: "Collect feedback and metrics to refine the product and reduce user friction.",
    },
  ];

  return (
    <section id="how-i-build" className="py-12 max-w-5xl mx-auto px-4">
      <FadeIn>
        <h2 className="text-2xl font-bold tracking-tight text-primaryText mb-6">How I Build Products</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
        {steps.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.05}>
            <div className="flex flex-col items-start">
              <div className="text-accent font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-secondaryText max-w-xs">{s.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block mt-6 text-secondaryText">↓</div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
