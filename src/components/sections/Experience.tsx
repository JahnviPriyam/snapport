import { RESUME_DATA } from "@/data/resume";
import { FadeIn } from "@/components/animations/FadeIn";

export function Experience() {
  return (
    <section id="experience" className="py-12 max-w-5xl mx-auto px-4">
      <FadeIn>
        <h2 className="text-2xl font-bold tracking-tight text-primaryText mb-8">Education & Training</h2>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <FadeIn delay={0.1}>
            <h3 className="text-lg font-semibold text-primaryText mb-6 border-b border-border pb-2">Academic Background</h3>
            <div className="space-y-6">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="relative pl-4 border-l border-border">
                  <div className="absolute w-2 h-2 bg-border rounded-full -left-[5px] top-1.5" />
                  <h4 className="font-medium text-primaryText">{edu.degree}</h4>
                  <p className="text-sm text-secondaryText mt-1">{edu.institution} • {edu.score}</p>
                  <p className="text-xs text-secondaryText/70 mt-1">{edu.date}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="space-y-8">
          <FadeIn delay={0.2}>
            <h3 className="text-lg font-semibold text-primaryText mb-6 border-b border-border pb-2">Specialized Training</h3>
            <div className="space-y-6">
              {RESUME_DATA.training.map((train, idx) => (
                <div key={idx} className="relative pl-4 border-l border-border">
                  <div className="absolute w-2 h-2 bg-accent rounded-full -left-[5px] top-1.5" />
                  <h4 className="font-medium text-primaryText">{train.title}</h4>
                  <p className="text-sm text-secondaryText mt-1">{train.organization} • {train.date}</p>
                  <ul className="mt-3 space-y-2 text-sm text-secondaryText">
                    {train.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-secondaryText/50 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
