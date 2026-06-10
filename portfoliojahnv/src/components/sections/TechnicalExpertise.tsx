import { RESUME_DATA } from "@/data/resume";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";

export function TechnicalExpertise() {
  return (
    <section className="py-12 max-w-5xl mx-auto px-4">
      <FadeIn>
        <h2 className="text-2xl font-bold tracking-tight text-primaryText mb-8">Engineering Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primaryText uppercase tracking-wider">Backend & APIs</h3>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.backend.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primaryText uppercase tracking-wider">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.cloudDevops.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primaryText uppercase tracking-wider">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.databases.map((skill) => (
                <Badge key={skill} variant="outline">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primaryText uppercase tracking-wider">Languages & Core</h3>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.languages.map((skill) => (
                <Badge key={skill} variant="outline">{skill}</Badge>
              ))}
              {RESUME_DATA.skills.core.map((skill) => (
                <Badge key={skill} variant="outline">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
