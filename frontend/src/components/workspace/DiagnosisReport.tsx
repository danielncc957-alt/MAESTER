import {
  CheckCircle2,
  AlertTriangle,
  Cpu,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export default function DiagnosisReport() {
  return (
    <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">
            🧠 MIMIR Engineering Report
          </h2>

          <p className="mt-2 text-zinc-400">
            AI-generated embedded system diagnostics
          </p>
        </div>

        <div className="rounded-full bg-yellow-500/10 px-5 py-2 font-semibold text-yellow-400">
          Warning
        </div>
      </div>

      {/* Summary */}
      <div className="grid gap-5 md:grid-cols-4">

        <InfoCard
          title="Board"
          value="ESP32-S3"
          icon={<Cpu size={22} />}
        />

        <InfoCard
          title="Confidence"
          value="97%"
          icon={<ShieldCheck size={22} />}
        />

        <InfoCard
          title="Firmware"
          value="v1.2.4"
          icon={<CheckCircle2 size={22} />}
        />

        <InfoCard
          title="Risk"
          value="Medium"
          icon={<AlertTriangle size={22} />}
        />

      </div>

      {/* Root Cause */}
      <Section title="Root Cause">
        <p className="text-zinc-300 leading-7">
          The firmware repeatedly attempts communication with the MPU6050,
          but no valid I²C response is detected. This usually indicates
          incorrect wiring, an invalid device address, or missing pull-up
          resistors.
        </p>
      </Section>

      {/* Evidence */}
      <Section title="Evidence">
        <ul className="space-y-3 text-zinc-300">
          <li>✅ Firmware successfully parsed</li>
          <li>✅ Datasheet indexed</li>
          <li>✅ PCB image analyzed</li>
          <li>✅ Serial logs inspected</li>
        </ul>
      </Section>

      {/* Recommendations */}
      <Section title="Recommended Actions">
        <div className="space-y-3">

          <Recommendation text="Verify SDA and SCL wiring." />

          <Recommendation text="Check MPU6050 I²C address (0x68 / 0x69)." />

          <Recommendation text="Inspect pull-up resistors." />

          <Recommendation text="Confirm stable 3.3V power supply." />

        </div>
      </Section>

    </div>
  );
}

function InfoCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-zinc-800 p-5">
      <div className="mb-3 text-blue-400">
        {icon}
      </div>

      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <h3 className="mt-2 text-xl font-semibold text-white">
        {value}
      </h3>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 rounded-2xl bg-zinc-800 p-6">
      <h3 className="mb-4 text-xl font-semibold text-white">
        {title}
      </h3>

      {children}
    </div>
  );
}

function Recommendation({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-zinc-900 p-4">
      <Wrench className="text-blue-400" size={20} />

      <span className="text-zinc-300">
        {text}
      </span>
    </div>
  );
}