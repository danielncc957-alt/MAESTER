import { CheckCircle2, LoaderCircle } from "lucide-react";

interface ProgressStepProps {
  title: string;
  status: "waiting" | "running" | "done";
}

export default function ProgressStep({
  title,
  status,
}: ProgressStepProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-zinc-800 p-4">
      <span className="text-white">{title}</span>

      {status === "done" && (
        <CheckCircle2 className="text-green-400" size={22} />
      )}

      {status === "running" && (
        <LoaderCircle
          size={22}
          className="animate-spin text-blue-400"
        />
      )}

      {status === "waiting" && (
        <div className="h-5 w-5 rounded-full border border-zinc-600" />
      )}
    </div>
  );
}