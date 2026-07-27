import { useEffect, useState } from "react";
import ProgressStep from "./ProgressStep";
import DiagnosisReport from "./DiagnosisReport";

const steps = [
  "Loading Firmware",
  "Reading Datasheet",
  "Analyzing PCB Image",
  "Parsing Serial Logs",
  "Cross Referencing",
  "Generating Engineering Report",
];

const thinkingMessages = [
  "Initializing MIMIR...",
  "Matching firmware with uploaded documentation...",
  "Inspecting PCB layout...",
  "Comparing serial logs with firmware behavior...",
  "Reasoning across engineering evidence...",
  "Preparing final report...",
];

export default function AnalysisPanel() {
  const [currentStep, setCurrentStep] = useState(0);
  const [message, setMessage] = useState(thinkingMessages[0]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;

      if (index >= steps.length) {
        clearInterval(interval);
        setFinished(true);
        return;
      }

      setCurrentStep(index);
      setMessage(thinkingMessages[index]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <h1 className="text-3xl font-bold text-white">
          🧠 MIMIR Analysis Engine
        </h1>

        <p className="mt-2 text-zinc-400">
          AI is analyzing your embedded project...
        </p>

        {/* Progress */}
        <div className="mt-8 space-y-4">
          {steps.map((step, index) => (
            <ProgressStep
              key={step}
              title={step}
              status={
                index < currentStep
                  ? "done"
                  : index === currentStep
                  ? "running"
                  : "waiting"
              }
            />
          ))}
        </div>

        {/* AI Thinking */}
        {!finished && (
          <div className="mt-8 rounded-2xl bg-zinc-800 p-6">
            <p className="text-sm uppercase tracking-widest text-blue-400">
              MIMIR Reasoning
            </p>

            <p className="mt-3 text-lg text-zinc-200 animate-pulse">
              {message}
            </p>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-700">
              <div
                className="h-full rounded-full bg-blue-500 transition-all duration-1000"
                style={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Report */}
      {finished && <DiagnosisReport />}
    </div>
  );
}