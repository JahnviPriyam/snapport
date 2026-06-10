import { RESUME_DATA } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8 mt-20">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-secondaryText">
          © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-secondaryText">
          <a href={RESUME_DATA.github} target="_blank" rel="noopener noreferrer" className="hover:text-primaryText transition-colors">
            GitHub
          </a>
          <a href={RESUME_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primaryText transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${RESUME_DATA.email}`} className="hover:text-primaryText transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
