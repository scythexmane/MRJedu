import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HeroMinimal() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-[#F8F8FF] py-28 px-4 md:px-12 ">
      {/* Декоративная сетка */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[radial-gradient(#ccc_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
      </div>

      {/* Контент */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          {t("hero.title")} <br />
          <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-transparent bg-clip-text">
            {t("hero.highlight")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            to="/journal/about"
            className="inline-block mt-6 px-6 py-3 bg-emerald-500 text-white text-lg font-medium rounded-full hover:bg-emerald-600 transition"
          >
            {t("hero.cta")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
