import StatusStrip from "../components/dashboard/StatusStrip";
import CurrentProject from "../components/dashboard/CurrentProject";
import WorkspacePanel from "../components/dashboard/WorkspacePanel";
import ReasoningPipeline from "../components/dashboard/ReasoningPipeline";

export default function Dashboard() {
  return (
    <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Mission Control
        </h1>

        <p className="mt-2 text-zinc-400">
          Monitor devices, build firmware and let MIMIR reason across your entire embedded project.
        </p>
      </div>

      {/* Live Status */}
      <StatusStrip />

      {/* Main Workspace */}
      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <CurrentProject />
        <WorkspacePanel />
      </div>

      {/* Reasoning */}
      <div className="mt-8">
        <ReasoningPipeline />
      </div>
    </div>
  );
}