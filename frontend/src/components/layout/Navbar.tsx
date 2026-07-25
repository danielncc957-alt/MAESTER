import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 px-8 py-5 bg-zinc-950">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-sm text-zinc-500">
          Welcome back. Let's build something incredible.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-xl bg-zinc-900 p-3 hover:bg-zinc-800 transition">
          <Search className="text-zinc-300" size={20} />
        </button>

        <button className="rounded-xl bg-zinc-900 p-3 hover:bg-zinc-800 transition">
          <Bell className="text-zinc-300" size={20} />
        </button>

        <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2">
          <UserCircle2 className="text-zinc-300" size={28} />
          <span className="text-white font-medium">Daniel</span>
        </div>
      </div>
    </header>
  );
}