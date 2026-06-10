import { Hero } from "@/components/sections/Hero";
import { ProductMindset } from "@/components/sections/ProductMindset";
import { DesignProcess } from "@/components/sections/DesignProcess";
import { WhyProductDesign } from "@/components/sections/WhyProductDesign";
import { About } from "@/components/sections/About";
import { TechnicalExpertise } from "@/components/sections/TechnicalExpertise";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export const metadata = {
  title: "Jahnvi Priyam — Product Design & Engineering Enthusiast",
  description: "Aspiring product designer and software engineer focused on user workflows, product thinking, and scalable systems. Exploring product design, UX, AI, and engineering.",
  openGraph: {
    title: "Jahnvi Priyam — Product Design & Engineering Enthusiast",
    description: "Aspiring product designer and software engineer focused on user workflows, product thinking, and scalable systems.",
    images: ["/images/profile.png"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Hero />
      <WhyProductDesign />
      <DesignProcess />
      <ProductMindset />
      <Projects />
      <About />
      <TechnicalExpertise />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
}
