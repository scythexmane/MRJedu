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
    AOS.init({
      duration: 900,
      once: true,
      offset: 120,
      easing: "ease-out-quart",
    });
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24 bg-[#F8F8FF]">
      <h2
        className="mb-14 text-center text-4xl font-extrabold tracking-tight text-black"
        data-aos="fade-down"
      >
        {t("archive.title", "Archive")}
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(archiveData).map(([year, issues], yearIdx) => (
          <article
            key={year}
            className="relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 ease-in-out hover:shadow-xl hover:z-10 animate-card"
            data-aos={isMobile ? "fade-up" : "zoom-in-up"}
          >
            <div className="absolute inset-0 rounded-3xl border border-slate-200 pointer-events-none transition-all duration-500 group-hover:border-cyan-300"></div>
            <div className="relative z-10 p-6 pb-4">
              <h3 className="text-3xl font-bold text-black transition-all duration-500 group-hover:text-cyan-600">
                {year}
              </h3>
            </div>

            <ul className="relative z-10 space-y-2 px-6 pb-6">
              {issues.map((i, idx) => (
                <li
                  key={`${i.volume}-${i.issue}`}
                  className="flex items-center justify-between rounded-xl bg-white/80 px-3 py-2 shadow-inner ring-1 ring-slate-200 backdrop-blur transition-all duration-400 hover:scale-[1.02] hover:ring-cyan-300"
                  data-aos={isMobile ? "fade-up" : "fade-left"}
                  data-aos-delay={isMobile ? 0 : idx * 100}
                >
                  <span className="text-sm font-medium text-black">
                    {t("archive.volume", { volume: i.volume })}
                    {i.issue && `, ${t("archive.issue", { issue: i.issue })}`}
                  </span>
                  {i.label && (
                    <span className="select-none rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-600">
                      {t(`archive.labels.${i.label}`, i.label)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
<br />
<br />
      <h3 className="mb-3 text-2xl font-bold">{t("archive.history.title")}</h3>
      <p className="mb-3">
        <strong>{t("archive.history.currentLabel")}</strong>{" "}
        {t("archive.history.current")}
      </p>
      <p className="mb-6">
        <strong>{t("archive.history.formerLabel")}</strong>{" "}
        {t("archive.history.former")}
      </p>
      <p className="rounded-xl bg-cyan-100 px-4 py-3 font-medium shadow-inner">
        {t("archive.history.note")}
      </p>          

      <style jsx>{`
        @keyframes cardFloat {
          0% {
            transform: translateY(0) scale(1);
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          }
          50% {
            transform: translateY(-5px) scale(1.015);
            box-shadow: 0 8px 20px rgba(0, 100, 150, 0.15);
          }
          100% {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 12px 25px rgba(0, 100, 150, 0.25);
          }
        }

        .animate-card:hover {
          animation: cardFloat 0.6s forwards ease-in-out;
        }
      `}</style>
    </section>
  );
}
