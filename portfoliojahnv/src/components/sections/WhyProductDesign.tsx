import { FadeIn } from "@/components/animations/FadeIn";

export function WhyProductDesign() {
  return (
    <section id="why-product-design" className="py-10 max-w-5xl mx-auto px-4">
      <FadeIn>
        <h3 className="text-2xl font-bold text-primaryText mb-3">Why Product Design?</h3>
        <p className="text-sm text-secondaryText max-w-3xl">
          I enjoy understanding how users interact with systems and translating complex problems into intuitive experiences. My background in software engineering helps me understand both the user perspective and technical implementation, allowing me to design practical, scalable solutions.
        </p>
      </FadeIn>
    </section>
  );
}
