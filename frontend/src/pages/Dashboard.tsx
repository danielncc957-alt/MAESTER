import StatCard from "../components/ui/StatCard";
import {
  FolderKanban,
  Cpu,
  Brain,
  Activity,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div>
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Good Afternoon 👋
        </h1>

        <p className="mt-2 text-zinc-400">
          Continue building intelligent embedded systems with AI.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Projects"
          value={0}
          icon={<FolderKanban size={28} />}
        />

        <StatCard
          title="ESP32 Devices"
          value={0}
          icon={<Cpu size={28} />}
        />

        <StatCard
          title="AI Chats"
          value={0}
          icon={<Brain size={28} />}
        />

        <StatCard
          title="Diagnostics"
          value={0}
          icon={<Activity size={28} />}
        />

      </div>
    </div>
  );
}