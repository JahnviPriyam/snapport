import { RESUME_DATA } from "@/data/resume";
import { FadeIn } from "@/components/animations/FadeIn";
import { buttonVariants } from "@/components/ui/Button";
import { Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto px-4">
      <FadeIn className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-primaryText mb-4">Let&apos;s Connect</h2>
        <p className="text-base text-secondaryText mb-8">
          I&apos;m currently open for new opportunities in backend and cloud engineering. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`mailto:${RESUME_DATA.email}`} className={buttonVariants({ size: "lg" })}>
            <Mail className="w-4 h-4 mr-2" />
            Say Hello
          </a>
          <a href={RESUME_DATA.linkedin} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg" })}>
            LinkedIn
            <ArrowUpRight className="w-4 h-4 ml-2 opacity-50" />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
