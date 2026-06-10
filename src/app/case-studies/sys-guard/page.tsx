import { RESUME_DATA } from "@/data/resume";
import { FadeIn } from "@/components/animations/FadeIn";
import { WorkflowDiagram } from "@/components/ui/WorkflowDiagram";
import Link from "next/link";

export default function SysGuardCaseStudy() {
  const project = RESUME_DATA.projects.find(p => p.title.includes("SYS_GUARD"));

  if (!project) return null;

  return (
    <div className="py-12 max-w-5xl mx-auto px-4">
      <FadeIn>
        <h1 className="text-3xl font-bold text-primaryText mb-2">{project.title}</h1>
        <p className="text-sm text-secondaryText mb-2">{project.description}</p>

        <div className="flex flex-col sm:flex-row gap-4 text-sm text-secondaryText mb-6">
          <div className="bg-background/50 border border-border rounded-lg p-3">
            <div className="font-medium text-primaryText">Role</div>
            <div>Individual Project</div>
          </div>

          <div className="bg-background/50 border border-border rounded-lg p-3">
            <div className="font-medium text-primaryText">Duration</div>
            <div>Feb 2026 - Apr 2026</div>
          </div>

          <div className="bg-background/50 border border-border rounded-lg p-3">
            <div className="font-medium text-primaryText">Focus</div>
            <div>Decision Support • Dashboard Design • Cloud Optimization</div>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface border border-border rounded-lg p-4">
              <h4 className="font-semibold text-primaryText mb-2">Problem</h4>
              <p className="text-sm text-secondaryText">Lack of clear cost visibility and operational insights made it difficult to prioritize optimizations and make cost-aware infrastructure decisions.</p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <h4 className="font-semibold text-primaryText mb-2">Users</h4>
              <p className="text-sm text-secondaryText">Cloud engineers, DevOps teams, and platform administrators responsible for cost and operational efficiency.</p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <h4 className="font-semibold text-primaryText mb-2">Challenges</h4>
              <ul className="list-disc pl-5 text-sm text-secondaryText">
                <li>Presenting cost information in a way that enables actionable decisions.</li>
                <li>Integrating monitoring and cost signals without overwhelming users.</li>
                <li>Designing dashboards that surface high-impact inefficiencies.</li>
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <h4 className="font-semibold text-primaryText mb-2">Solution</h4>
              <p className="text-sm text-secondaryText">Built a FinOps monitoring platform that provides real-time cost visibility, idle resource detection, and an operational dashboard that helps engineers prioritize optimizations.</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-primaryText mb-3">SYS_GUARD Workflow</h4>
            <WorkflowDiagram steps={["Cloud Resources","Metrics Collection","Cost Analysis","Optimization Engine","Recommendations Dashboard"]} direction="horizontal" />
          </div>
        </div>

        <aside className="col-span-3 md:col-span-1">
          <div className="bg-surface border border-border rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-primaryText mb-2">Product Thinking</h4>
            <p className="text-sm text-secondaryText">Prioritized surfacing actionable signals over raw metrics—alerts and concise summaries help engineers quickly identify high-impact fixes.</p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4">
            <h4 className="font-semibold text-primaryText mb-2">Key Screens</h4>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center text-sm text-secondaryText">
              Placeholder: Upload dashboard screenshots (Grafana, cost analysis, resource monitoring)
            </div>
          </div>

          <div className="mt-4">
            <Link href="/projects" className="text-sm text-accent">Back to Projects</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
