import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

export default function JournalArchive() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 120, easing: "ease-out-quart" });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24 bg-[#F8F8FF]">
      <h2
        className="mb-14 text-center text-4xl font-extrabold tracking-tight text-black dark:text-black drop-shadow-sm"
        data-aos="fade-down"
      >
        {t("archive.title", "Archive")}
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(archiveData).map(([year, issues], yearIdx) => (
          <article
            key={year}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-md brightness-100 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:animate-rise hover:shadow-xl hover:brightness-95 dark:border-slate-700 dark:bg-slate-800 dark:hover:brightness-110"
            data-aos={isMobile ? "fade-up" : "zoom-in-up"}
          >
            <span className="pointer-events-none absolute -top-3 -left-3 h-14 w-14 rotate-[-6deg] bg-gradient-to-br from-teal-500 to-cyan-600 opacity-80 shadow-md transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110" />
            <div className="relative z-10 p-6 pb-4">
              <h3 className="text-3xl font-bold text-black dark:text-white">{year}</h3>
            </div>

            <ul className="relative z-10 space-y-2 px-6 pb-6">
              {issues.map((i, idx) => (
                <li
                  key={`${i.volume}-${i.issue}`}
                  className="flex items-center justify-between rounded-xl bg-white/70 px-3 py-2 shadow-inner ring-1 ring-slate-200 backdrop-blur transition-all duration-400 ease-in-out hover:brightness-90 dark:bg-slate-700/50 dark:ring-slate-700 dark:hover:brightness-110"
                  data-aos={isMobile ? "fade-up" : "fade-left"}
                  data-aos-delay={isMobile ? 0 : idx * 100}
                >
                  <span className="text-sm font-medium text-black dark:text-slate-100">
                    {t("archive.volume", { volume: i.volume })}
                    {i.issue && `, ${t("archive.issue", { issue: i.issue })}`}
                  </span>
                  {i.label && (
                    <span className="select-none rounded-full bg-amber-200 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-800/40 dark:text-amber-300">
                      {t(`archive.labels.${i.label}`, i.label)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div
        className="mt-20 rounded-3xl bg-cyan-50 px-8 py-10 text-black shadow-md ring-1 ring-cyan-200 dark:bg-slate-700 dark:text-white dark:ring-slate-600"
        data-aos="fade-up"
      >
        <h3 className="mb-4 text-2xl font-bold">Publication History</h3>
        <p className="mb-3">
          <strong>Currently known as:</strong> Interdisciplinary Journal of Environmental and Science Education (Volume 15 Issue 1, 2019 - current)
        </p>
        <p className="mb-6">
          <strong>Formerly known as:</strong> International Journal of Environmental and Science Education with ISSN 1306-3065 (Volume 1 Issue 1, 2006 - Volume 14 Issue 9, 2019)
        </p>
        <p className="rounded-xl bg-cyan-100 px-4 py-3 font-medium shadow-inner dark:bg-slate-600">
          Starting Volume 19 Issue 1 (2023), Interdisciplinary Journal of Environmental and Science Education is published by <strong>Modestum</strong>.
        </p>
      </div>

      <style jsx>{`
        @keyframes rise {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(-12px);
          }
        }
        .animate-rise {
          animation: rise 0.5s forwards ease-out;
        }
      `}</style>
    </section>
  );
}
