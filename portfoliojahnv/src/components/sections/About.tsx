import { RESUME_DATA } from "@/data/resume";
import { FadeIn } from "@/components/animations/FadeIn";

export function About() {
  return (
    <section id="about" className="py-12 max-w-5xl mx-auto px-4">
      <FadeIn>
        <h2 className="text-2xl font-bold tracking-tight text-primaryText mb-6">About</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-base md:text-lg text-secondaryText leading-relaxed">
            {RESUME_DATA.about}
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
