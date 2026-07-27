import {
  Upload,
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  FileCode,
  X,
} from "lucide-react";
import { useRef, useState } from "react";

interface UploadZoneProps {
  title: string;
  accept: string;
  onFileSelect?: (file: File | null) => void;
}

export default function UploadZone({
  title,
  accept,
  onFileSelect,
}: UploadZoneProps) {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File | null) {
    if (!file) return;

    setFile(file);
    setDragging(false);

    onFileSelect?.(file);
  }

  function getIcon() {
    if (!file)
      return <Upload size={42} className="text-blue-400" />;

    if (file.type.startsWith("image"))
      return <ImageIcon size={42} className="text-pink-400" />;

    if (file.type.includes("pdf"))
      return <FileText size={42} className="text-red-400" />;

    return <FileCode size={42} className="text-green-400" />;
  }

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        handleFile(e.dataTransfer.files[0]);
      }}
      className={`relative cursor-pointer rounded-3xl border-2 border-dashed p-8 transition-all duration-300
      ${
        dragging
          ? "border-blue-500 bg-blue-500/10 scale-[1.02]"
          : "border-zinc-700 bg-zinc-900 hover:border-blue-500 hover:bg-zinc-800"
      }`}
    >
      <input
        hidden
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={(e) => handleFile(e.target.files?.[0] || null)}
      />

      {file && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setFile(null);
            onFileSelect?.(null);
          }}
          className="absolute right-4 top-4 rounded-full bg-zinc-800 p-2 hover:bg-red-500"
        >
          <X size={16} />
        </button>
      )}

      <div className="flex flex-col items-center text-center">
        {file &&
        file.type.startsWith("image") ? (
          <img
            src={URL.createObjectURL(file)}
            alt=""
            className="mb-5 h-28 w-full rounded-xl object-cover"
          />
        ) : (
          <div className="mb-5">{getIcon()}</div>
        )}

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        {file ? (
          <>
            <p className="mt-3 break-all text-zinc-300">
              {file.name}
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              {(file.size / 1024).toFixed(1)} KB
            </p>

            <div className="mt-5 flex items-center gap-2 text-green-400">
              <CheckCircle2 size={18} />
              Uploaded Successfully
            </div>
          </>
        ) : (
          <>
            <p className="mt-3 text-zinc-400">
              Drag & Drop
            </p>

            <p className="text-zinc-500">
              or click to browse
            </p>

            <p className="mt-5 text-xs text-zinc-600">
              {accept}
            </p>
          </>
        )}
      </div>
    </div>
  );
}