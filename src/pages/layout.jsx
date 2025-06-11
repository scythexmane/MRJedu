import React from "react";
import Navbar from "../pages/HomeComponents/Navbar";
import Footer from "../pages/HomeComponents/Footer";
import Hero from "../pages/HomeComponents/Hero";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import IntroOverlay from "../IntroOverlay"; // 👈 новый импорт

export default function Layout() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  return (
    <>
    
      <IntroOverlay /> {/* 👈 вот сюда */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={i18n.language}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Navbar />
          {pathname === "/" && <Hero />}
          <main className="min-h-screen">
            <Outlet />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
