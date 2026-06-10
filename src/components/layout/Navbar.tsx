import Link from "next/link";
import { RESUME_DATA } from "@/data/resume";
import { buttonVariants } from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
        <div className="font-semibold tracking-tight text-primaryText">
          <Link href="/">{RESUME_DATA.name}</Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-secondaryText">
          <Link href="#about" className="hover:text-primaryText transition-colors">About</Link>
          <Link href="#projects" className="hover:text-primaryText transition-colors">Projects</Link>
          <Link href="#projects" className="hover:text-primaryText transition-colors">Case Studies</Link>
          <Link href="#experience" className="hover:text-primaryText transition-colors">Experience</Link>
          <Link href="#contact" className="hover:text-primaryText transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="/resume/Jahnvi_Priyam_Resume.pdf" target="_blank" rel="noopener noreferrer" className={`${buttonVariants({ variant: "outline", size: "sm" })} hidden md:inline-flex`}>
            Resume
          </a>
          <a href="#projects" className={`${buttonVariants({ variant: "default", size: "sm" })} hidden md:inline-flex`}>
            View Case Studies
          </a>
        </div>
      </div>
    </header>
  );
}
