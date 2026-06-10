import { FadeIn } from "@/components/animations/FadeIn";

export function ProductMindset() {
  return (
    <section id="product-mindset" className="py-8 max-w-5xl mx-auto px-4">
      <FadeIn>
        <h3 className="text-xl font-semibold text-primaryText mb-3">Product Mindset</h3>
        <p className="text-sm text-secondaryText max-w-3xl">
          I enjoy understanding how users interact with systems and identifying friction points. I focus on building solutions that are technically strong and easy to use, and I care about the intersection of AI, software engineering, and user experience.
        </p>
      </FadeIn>
    </section>
  );
}
