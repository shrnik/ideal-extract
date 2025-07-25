import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainProvider from "./components/MainProvider";
import ExtractFields from "./components/extract-fields";
import JobManagement from "./components/job-management";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <HashRouter>
    <Routes>
      <Route path="/" element={<MainProvider><ExtractFields /></MainProvider>} />
      <Route path="extract" element={<MainProvider><ExtractFields /></MainProvider>} />
      <Route path="job-management" element={<MainProvider><JobManagement /></MainProvider>} />
    </Routes>
   </HashRouter>
  </StrictMode>
);
