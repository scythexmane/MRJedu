import React, { useState } from "react";
import Navbar from "../pages/HomeComponents/Navbar";
import Sidebar from "./components/layout/Sidebar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProfileLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggling sidebar, new state:", !isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col min-h-screen"
    >
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} setOpen={setIsSidebarOpen} />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </motion.div>
  );
}