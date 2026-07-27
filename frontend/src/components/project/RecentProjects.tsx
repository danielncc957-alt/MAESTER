import ProjectCard from "./ProjectCard";

export default function RecentProjects() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Recent Projects
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Continue working on your embedded systems.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
          + New Project
        </button>
      </div>

      <div className="space-y-4">
        <ProjectCard
          name="Smart Helmet AI"
          description="AI-powered accident detection and emergency alerts."
          status="Active"
        />

        <ProjectCard
          name="RC Plane Assistant"
          description="Autonomous flight controller with ESP32."
          status="Planning"
        />

        <ProjectCard
          name="Voice Assistant Hub"
          description="Offline voice assistant using ESP32-S3."
          status="Offline"
        />
      </div>
    </section>
  );
}