import { RESUME_DATA } from "@/data/resume";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/Icons";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-12 max-w-5xl mx-auto px-4">
      <FadeIn>
        <h2 className="text-2xl font-bold tracking-tight text-primaryText mb-8">Featured Projects</h2>
      </FadeIn>
      
      <div className="space-y-8">
        {RESUME_DATA.projects.map((project, idx) => (
          <FadeIn key={project.title} delay={idx * 0.1}>
            <Card className="hover:border-accent/50 transition-colors duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-primaryText">{project.title}</CardTitle>
                <CardDescription className="mt-1 text-base text-secondaryText">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-surface border-border">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Mini case study sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primaryText">Problem</h4>
                    <p className="text-sm text-secondaryText">
                      {project.title.includes("School Management") ? (
                        "Managing attendance, exam schedules and timetables across roles created friction and manual overhead for teachers and students."
                      ) : (
                        "Visibility into cloud costs and resource inefficiencies made it hard for engineers to prioritize optimizations and make cost-aware decisions."
                      )}
                    </p>

                    <h4 className="text-sm font-semibold text-primaryText">Users</h4>
                    <p className="text-sm text-secondaryText">
                      {project.title.includes("School Management") ? (
                        "Teachers and students, with role-based needs around attendance, exams, and schedules."
                      ) : (
                        "Cloud engineers, DevOps teams, and platform administrators responsible for cost and operations."
                      )}
                    </p>

                    <h4 className="text-sm font-semibold text-primaryText">Approach</h4>
                    <p className="text-sm text-secondaryText">
                      {project.title.includes("School Management") ? (
                        "Focused on streamlining workflows: clear role-based access, automated attendance flows, and conflict-aware timetable scheduling."
                      ) : (
                        "Built dashboards and cost-analysis modules to surface actionable insights and enable faster decision-making for optimizations."
                      )}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primaryText">Solution</h4>
                    <p className="text-sm text-secondaryText">
                      {project.title.includes("School Management") ? (
                        "Microservices-based APIs with role-based access for teachers and students, attendance workflows, and automated exam management."
                      ) : (
                        "FinOps monitoring platform with real-time cost visibility, alerts for idle resources, and an operational dashboard for engineers."
                      )}
                    </p>

                    <h4 className="text-sm font-semibold text-primaryText">Impact</h4>
                    <p className="text-sm text-secondaryText">
                      {project.title.includes("School Management") ? (
                        "Improved workflow efficiency for administrative tasks and reduced manual scheduling conflicts by introducing conflict checks and automation."
                      ) : (
                        "Enabled clearer cost visibility and faster operational decisions by surfacing cost drivers and idle resources in a usable dashboard."
                      )}
                    </p>

                    {project.architectureHighlights && (
                      <div className="mt-2 bg-background/50 border border-border rounded-lg p-3 text-sm text-secondaryText">
                        <div className="font-medium text-primaryText mb-2">Architecture Highlights</div>
                        <ul className="list-disc pl-4 space-y-1">
                          {project.architectureHighlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Gallery / placeholders */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 md:col-span-3 border-2 border-dashed border-border rounded-lg p-6 flex items-center justify-center text-sm text-secondaryText">
                    Placeholder: Screenshots / Dashboard previews / Workflow diagrams / Architecture diagrams
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-6 flex flex-wrap gap-3">
                {(() => {
                  const slug = project.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                  return (
                    <Link href={`/case-studies/${slug}`} className={buttonVariants({ variant: "outline", size: "sm" })}>
                      <GithubIcon className="w-4 h-4 mr-2" />
                      Case Study
                    </Link>
                  );
                })()}

                <a href={project.link} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm" })}>
                  Live Demo
                </a>
              </CardFooter>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
