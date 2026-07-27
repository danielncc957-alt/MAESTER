import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import ProjectWorkspace from "./pages/ProjectWorkspace";

export default function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workspace" element={<ProjectWorkspace />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}