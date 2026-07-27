import { Cpu, BrainCircuit, Cloud, CheckCircle2 } from "lucide-react";

export default function StatusStrip() {
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 xl:grid-cols-4">

      <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
        <BrainCircuit className="text-green-400" size={22} />
        <div>
          <p className="text-sm text-zinc-400">MIMIR</p>
          <p className="font-semibold text-white">Ready</p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
        <Cpu className="text-green-400" size={22} />
        <div>
          <p className="text-sm text-zinc-400">ESP32</p>
          <p className="font-semibold text-white">Connected</p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
        <Cloud className="text-blue-400" size={22} />
        <div>
          <p className="text-sm text-zinc-400">Cloud</p>
          <p className="font-semibold text-white">Synced</p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
        <CheckCircle2 className="text-green-400" size={22} />
        <div>
          <p className="text-sm text-zinc-400">System</p>
          <p className="font-semibold text-white">Operational</p>
        </div>
      </div>

    </div>
  );
}