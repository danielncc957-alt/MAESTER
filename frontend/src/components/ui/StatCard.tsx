import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {value}
          </h2>
        </div>

        <div className="rounded-xl bg-zinc-800 p-3 text-blue-400">
          {icon}
        </div>
      </div>
    </div>
  );
}