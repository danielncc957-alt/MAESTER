import {
  FileCode,
  FileText,
  Terminal,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

export default function ReasoningPipeline() {
  const steps = [
    {
      title: "Firmware",
      icon: <FileCode size={24} />,
      color: "text-blue-400",
    },
    {
      title: "Datasheet",
      icon: <FileText size={24} />,
      color: "text-green-400",
    },
    {
      title: "Serial Log",
      icon: <Terminal size={24} />,
      color: "text-yellow-400",
    },
    {
      title: "MIMIR",
      icon: <BrainCircuit size={24} />,
      color: "text-violet-400",
    },
    {
      title: "Diagnosis",
      icon: <CheckCircle2 size={24} />,
      color: "text-emerald-400",
    },
  ];

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          MIMIR Reasoning Pipeline
        </h2>

        <p className="mt-1 text-zinc-400">
          Watch how MIMIR understands your embedded system.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">

        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex items-center gap-4"
          >
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-800 transition hover:border-blue-500">
              <div className={step.color}>
                {step.icon}
              </div>

              <p className="mt-2 text-sm font-medium text-white">
                {step.title}
              </p>
            </div>

            {index !== steps.length - 1 && (
              <div className="hidden h-1 w-10 rounded-full bg-zinc-700 lg:block" />
            )}
          </div>
        ))}

      </div>
    </div>
  );
}