import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const archiveData = {
  2025: [
    { volume: 21, issue: 2, label: "inProgress" },
    { volume: 21, issue: 1 },
  ],
  2024: [
    { volume: 20, issue: 4 },
    { volume: 20, issue: 3 },
    { volume: 20, issue: 2 },
    { volume: 20, issue: 1 },
  ],
  2023: [
    { volume: 19, issue: 4 },
    { volume: 19, issue: 3 },
    { volume: 19, issue: 2 },
    { volume: 19, issue: 1 },
  ],
  2022: [
    { volume: 18, issue: 4 },
    { volume: 18, issue: 3 },
    { volume: 18, issue: 2 },
    { volume: 18, issue: 1 },
  ],
  2021: [
    { volume: 17, issue: 4 },
    { volume: 17, issue: 3 },
    { volume: 17, issue: 2 },
    { volume: 17, issue: 1 },
  ],
  2020: [
    { volume: 16, issue: 4 },
    { volume: 16, issue: 3 },
    { volume: 16, issue: 2 },
    { volume: 16, issue: 1 },
  ],
  2019: [{ volume: 15, issue: 1 }],
};

export default function FuturisticJournalArchive() {
  const { t } = useTranslation();
  const [expandedYear, setExpandedYear] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120 });
  }, []);

  const sortedYears = Object.keys(archiveData).sort((a, b) => b - a);

  return (
    <section className="relative px-4 py-16 md:px-8 lg:py-24 bg-[#F8F8FF] ">
      {/* vertical center line */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full -translate-x-1/2">
        <div className="h-full w-px bg-gradient-to-b from-transparent via-cyan-300 to-transparent" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-14 text-center text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600"
      >
        {t("archive.title", "Archive")}
      </motion.h2>

      <div className="relative space-y-12">
        {sortedYears.map((year, i) => {
          const issues = archiveData[year];
          const isLeft = i % 2 === 0;
          return (
            <div
              key={year}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className={`relative flex w-full ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* connector dot */}
              <span className="absolute left-1/2 top-4 -translate-x-1/2 h-4 w-4 rounded-full bg-cyan-400 shadow-lg" />

              <motion.div
                whileHover={{ scale: 1.04 }}
                className="w-[60ch] max-w-full cursor-pointer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isLeft ? "flex-end" : "flex-start",
                }}
                onClick={() =>
                  setExpandedYear(expandedYear === year ? null : year)
                }
              >
                <motion.h3
                  layout
                  className="mb-3 text-2xl font-bold text-gray-800 hover:text-cyan-600 transition-colors"
                >
                  {year}
                </motion.h3>

                <AnimatePresence initial={false}>
                  {expandedYear === year && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, type: "tween" }}
                      className="space-y-3 w-full flex flex-col items-center"
                    >
                      {issues.map((iss, idx) => (
                        <li
                          key={`${iss.volume}-${iss.issue}`}
                          className="group relative rounded-xl border border-cyan-300/30 bg-white/60 backdrop-blur-md px-4 py-2 shadow-md hover:shadow-cyan-400/40 transition w-[200px] text-end"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: isLeft ? "flex-end" : "flex-start",
                          }}
                        >
                          <span className="text-xs font-medium text-gray-800 block">
                            {t("archive.volume", { volume: iss.volume })}
                            {iss.issue &&
                              `, ${t("archive.issue", { issue: iss.issue })}`}
                          </span>
                          {iss.label && (
                            <span className="mt-1 block rounded-full bg-yellow-400/20 text-yellow-600 px-2 py-0.5 text-[10px] font-semibold">
                              {t(`archive.labels.${iss.label}`, iss.label)}
                            </span>
                          )}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
