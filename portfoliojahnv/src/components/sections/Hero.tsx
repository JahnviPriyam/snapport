import { RESUME_DATA } from "@/data/resume";
import { FadeIn } from "@/components/animations/FadeIn";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { buttonVariants } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 max-w-5xl mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">

        <div className="flex-1 space-y-6">

          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primaryText">
              {RESUME_DATA.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-xl md:text-2xl font-medium text-secondaryText">
              {RESUME_DATA.title}
            </h2>

            <p className="mt-4 text-base md:text-lg text-secondaryText max-w-xl leading-relaxed">
              {RESUME_DATA.headline}.
            </p>

            <p className="mt-3 text-sm md:text-base text-secondaryText max-w-xl">
              Exploring the intersection of product design, user experience, AI, and software engineering.
            </p>

            <p className="mt-3 text-sm text-primaryText">
              {RESUME_DATA.techStack.join(" • ")}
            </p>
          </FadeIn>

          <FadeIn
            delay={0.2}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="/resume/Jahnvi_Priyam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "default" })}
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>

            <a
              href="#projects"
              className={buttonVariants({ variant: "outline" })}
            >
              View Case Studies
            </a>

            <a
              href={RESUME_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={buttonVariants({
                variant: "outline",
                size: "icon",
              })}
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={RESUME_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={buttonVariants({
                variant: "outline",
                size: "icon",
              })}
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${RESUME_DATA.email}`}
              aria-label="Email"
              className={buttonVariants({
                variant: "outline",
                size: "icon",
              })}
            >
              <Mail className="h-4 w-4" />
            </a>
          </FadeIn>
        </div>

        <FadeIn
          delay={0.3}
          direction="none"
          className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
        >
          <div className="w-full h-full overflow-hidden rounded-2xl border border-white/5 bg-surface shadow-sm grayscale hover:grayscale-0 transition-all duration-500">
            <img
              src="/images/profile.png"
              alt={RESUME_DATA.name}
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}