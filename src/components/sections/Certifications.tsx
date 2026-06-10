import { RESUME_DATA } from "@/data/resume";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { CheckCircle2, Compass } from "lucide-react";

export function Certifications() {
  return (
    <section className="py-12 max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeIn>
          <h2 className="text-xl font-bold tracking-tight text-primaryText mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            Certifications
          </h2>
          <div className="flex flex-col gap-3">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <Card key={idx} className="bg-transparent border-border/50 hover:border-border transition-colors">
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-sm text-primaryText">{cert.title}</h4>
                    <p className="text-xs text-secondaryText mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-secondaryText/70 whitespace-nowrap">{cert.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-xl font-bold tracking-tight text-primaryText mb-6 flex items-center gap-2">
            <Compass className="w-5 h-5 text-accent" />
            Currently Exploring
          </h2>
          <div className="bg-surface border border-border rounded-xl p-6">
            <p className="text-sm text-secondaryText mb-4">
              I am constantly learning and expanding my expertise in cloud-native ecosystems. Currently focused on:
            </p>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.currentlyExploring.map((topic, idx) => (
                <Badge key={idx} variant="outline" className="bg-background/50 py-1">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
