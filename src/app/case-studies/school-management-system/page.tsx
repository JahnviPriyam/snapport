import { RESUME_DATA } from "@/data/resume";
import { FadeIn } from "@/components/animations/FadeIn";
import { WorkflowDiagram } from "@/components/ui/WorkflowDiagram";
import Link from "next/link";

export default function SchoolManagementCaseStudy() {
  const project = RESUME_DATA.projects.find(p => p.title.includes("School Management"));

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
            <div>2025</div>
          </div>

          <div className="bg-background/50 border border-border rounded-lg p-3">
            <div className="font-medium text-primaryText">Focus</div>
            <div>User Workflows • System Design • Product Thinking</div>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface border border-border rounded-lg p-4">
              <h4 className="font-semibold text-primaryText mb-2">Problem</h4>
              <p className="text-sm text-secondaryText">Managing attendance, exam schedules and timetables at scale introduced manual overhead and scheduling conflicts that impacted teachers and students.</p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <h4 className="font-semibold text-primaryText mb-2">Users</h4>
              <p className="text-sm text-secondaryText">Teachers and students with distinct role-based needs for attendance tracking, exam management, and timetable visibility.</p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <h4 className="font-semibold text-primaryText mb-2">Challenges</h4>
              <ul className="list-disc pl-5 text-sm text-secondaryText">
                <li>Designing role-based access and workflows that minimize friction for teachers.</li>
                <li>Preventing timetable conflicts and making schedule changes predictable.</li>
                <li>Keeping APIs secure while enabling useful UI workflows.</li>
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4">
              <h4 className="font-semibold text-primaryText mb-2">Solution</h4>
              <p className="text-sm text-secondaryText">Implemented microservices-backed APIs for attendance and exam management, role-based access for teachers and students, and automated scheduling checks to reduce conflicts.</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-primaryText mb-3">Teacher Workflow</h4>
            <WorkflowDiagram steps={["Teacher","Mark Attendance","Attendance Stored","Student View Updated","Reports Generated"]} direction="horizontal" />
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-primaryText mb-3">Student Workflow</h4>
            <WorkflowDiagram steps={["Student","View Timetable","Check Exams","Access Results"]} direction="horizontal" />
          </div>
        </div>

        <aside className="col-span-3 md:col-span-1">
          <div className="bg-surface border border-border rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-primaryText mb-2">Product Thinking</h4>
            <p className="text-sm text-secondaryText">Focused on making administrative tasks less error-prone and faster to perform, designing flows that reduce context switches for teachers and surface the right information at the right time.</p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4">
            <h4 className="font-semibold text-primaryText mb-2">Key Screens</h4>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center text-sm text-secondaryText">
              Placeholder: Upload screenshots (login, student dashboard, teacher dashboard, attendance, timetable)
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
