import {
  LayoutDashboard,
  FolderKanban,
  Brain,
  Cpu,
  Settings,
} from "lucide-react"

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Projects",
    icon: FolderKanban,
  },
  {
    name: "MIMIR AI",
    icon: Brain,
  },
  {
    name: "Firmware",
    icon: Cpu,
  },
  {
    name: "Settings",
    icon: Settings,
  },
]

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-zinc-900 border-r border-zinc-800 flex flex-col">
      <div className="p-8">
        <h1 className="text-3xl font-bold tracking-widest text-white">
          MAESTER
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          AI Workspace for Embedded Engineers
        </p>
      </div>

      <nav className="flex flex-col gap-2 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.name}
              className="flex items-center gap-4 rounded-xl px-5 py-4 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}