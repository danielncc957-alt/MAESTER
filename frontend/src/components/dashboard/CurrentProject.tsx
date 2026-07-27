import { useNavigate } from "react-router-dom";
import { ArrowRight, Cpu } from "lucide-react";

export default function CurrentProject() {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Current Project
          </h2>

          <p className="text-zinc-400">
            Continue where you left off.
          </p>
        </div>

        <Cpu className="text-blue-400" size={32} />
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-zinc-500">Project</p>
          <h3 className="text-xl font-semibold text-white">
            Smart Helmet AI
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-zinc-800 p-4">
            <p className="text-sm text-zinc-400">Board</p>
            <p className="mt-1 font-semibold text-white">
              ESP32-S3
            </p>
          </div>

          <div className="rounded-xl bg-zinc-800 p-4">
            <p className="text-sm text-zinc-400">Firmware</p>
            <p className="mt-1 font-semibold text-white">
              v1.2.4
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate("/workspace")}
          className="mt-4 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Open Workspace
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}