import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-zinc-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-8 text-white">
          {children}
        </main>
      </div>
    </div>
  );
}