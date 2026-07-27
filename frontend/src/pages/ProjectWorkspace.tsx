import { useState } from "react";

import UploadZone from "../components/ui/UploadZone";
import AnalysisPanel from "../components/workspace/AnalysisPanel";

import { BrainCircuit, ArrowLeft } from "lucide-react";

export default function ProjectWorkspace() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [firmware, setFirmware] = useState<File | null>(null);
  const [datasheet, setDatasheet] = useState<File | null>(null);
  const [pcbImage, setPcbImage] = useState<File | null>(null);
  const [serialLog, setSerialLog] = useState<File | null>(null);
  const [telemetry, setTelemetry] = useState<File | null>(null);
  const [config, setConfig] = useState<File | null>(null);

  async function analyzeProject() {
    console.log("Analyze button clicked");

    const formData = new FormData();

    if (firmware) formData.append("firmware", firmware);
    if (datasheet) formData.append("datasheet", datasheet);
    if (pcbImage) formData.append("pcbImage", pcbImage);
    if (serialLog) formData.append("serialLog", serialLog);
    if (telemetry) formData.append("telemetry", telemetry);
    if (config) formData.append("config", config);

    try {
      console.log("Sending request to backend....");
      const response = await fetch(
        "http://localhost:5000/api/mimir/analyze",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log(data);

      setIsAnalyzing(true);
    } catch (err) {
      console.error(err);
      alert("Backend connection failed.");
    }
  }

  if (isAnalyzing) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setIsAnalyzing(false)}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
        >
          <ArrowLeft size={18} />
          Back to Workspace
        </button>

        <AnalysisPanel />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Engineering Workspace
        </h1>

        <p className="mt-2 text-zinc-400">
          Give MIMIR everything it needs to understand your embedded project.
        </p>
      </div>

      {/* Upload Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <UploadZone
          title="Firmware"
          accept=".ino,.bin,.elf"
          onFileSelect={setFirmware}
        />

        <UploadZone
          title="Datasheet"
          accept=".pdf"
          onFileSelect={setDatasheet}
        />

        <UploadZone
          title="PCB Image"
          accept="image/*"
          onFileSelect={setPcbImage}
        />

        <UploadZone
          title="Serial Logs"
          accept=".txt,.log"
          onFileSelect={setSerialLog}
        />

        <UploadZone
          title="Telemetry"
          accept=".csv,.json"
          onFileSelect={setTelemetry}
        />

        <UploadZone
          title="Configuration"
          accept=".json,.yaml"
          onFileSelect={setConfig}
        />

      </div>

      {/* Analyze Button */}
      <button
        onClick={analyzeProject}
        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-5 text-lg font-semibold text-white transition hover:bg-blue-700"
      >
        <BrainCircuit size={24} />
        Analyze with MIMIR
      </button>
    </div>
  );
}