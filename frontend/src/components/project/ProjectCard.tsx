interface ProjectCardProps {
  name: string;
  description: string;
  status: "Active" | "Planning" | "Offline";
}

export default function ProjectCard({
  name,
  description,
  status,
}: ProjectCardProps) {
  const statusColor = {
    Active: "bg-green-500",
    Planning: "bg-yellow-500",
    Offline: "bg-red-500",
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{name}</h3>

        <div className="flex items-center gap-2">
          <div
            className={`h-2.5 w-2.5 rounded-full ${statusColor[status]}`}
          />
          <span className="text-sm text-zinc-400">{status}</span>
        </div>
      </div>

      <p className="mt-3 text-sm text-zinc-400">
        {description}
      </p>
    </div>
  );
}