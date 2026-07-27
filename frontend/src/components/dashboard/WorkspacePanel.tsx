import {
  FileText,
  FileCode,
  Image,
  Terminal,
  Brain,
} from "lucide-react";

export default function WorkspacePanel() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Engineering Workspace
        </h2>

        <p className="mt-1 text-zinc-400">
          Give MIMIR everything it needs to understand your project.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <button className="flex flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-800 p-6 transition hover:border-blue-500 hover:bg-zinc-700">
          <FileCode size={34} className="mb-3 text-blue-400" />
          <span className="text-white font-medium">
            Firmware
          </span>
        </button>

        <button className="flex flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-800 p-6 transition hover:border-blue-500 hover:bg-zinc-700">
          <FileText size={34} className="mb-3 text-green-400" />
          <span className="text-white font-medium">
            Datasheet
          </span>
        </button>

        <button className="flex flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-800 p-6 transition hover:border-blue-500 hover:bg-zinc-700">
          <Terminal size={34} className="mb-3 text-yellow-400" />
          <span className="text-white font-medium">
            Serial Log
          </span>
        </button>

        <button className="flex flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-800 p-6 transition hover:border-blue-500 hover:bg-zinc-700">
          <Image size={34} className="mb-3 text-pink-400" />
          <span className="text-white font-medium">
            PCB Image
          </span>
        </button>

      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">
        <Brain size={22} />
        Analyze with MIMIR
      </button>
    </div>
  );
}