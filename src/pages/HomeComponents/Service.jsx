/******************************************************************
 *  MedicalPortal.jsx  ·  с i18n-переводами
 ******************************************************************/

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Stethoscope,
  FlaskConical,
  Syringe,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { motion, AnimatePresence } from "framer-motion";

/* ---------- demo-данные --------- */
const MED_ARTICLES = [
  {
    headline: "CRISPR-терапия при наследственной анемии: фаза II",
    authors: "M. Takeda, L. Santangelo, P. Huang",
    issue: "Journal of Gene Therapy · 2025 · 18(3)",
    doi: "https://doi.org/10.1234/jgt.2025.0031",
  },
  {
    headline: "ИИ в диагностике меланомы vs дерматоскопия",
    authors: "S. Hossain, J. Müller, A. Rossi",
    issue: "Dermatology AI Review · 2025 · 7(1)",
    doi: "https://doi.org/10.5678/dair.2025.0005",
  },
  {
    headline: "Наночастичная вакцина против RSV: 94 % эффективность",
    authors: "K. Onishi, D. Cole, N. Bhatia",
    issue: "Vaccine Science · 2025 · 12(2)",
    doi: "https://doi.org/10.9101/vs.2025.0217",
  },
  {
    headline: "МРТ-помощник: LLM опережает радиологов на 21 %",
    authors: "E. Huang, P. Carvalho, T. Mukherjee",
    issue: "AI in Imaging · 2025 · 5(6)",
    doi: "https://doi.org/10.2100/aii.2025.0006",
  },
  {
    headline: "Волновая терапия сердца: первые результаты",
    authors: "L. Ferrer, C. Kwon",
    issue: "Cardio Innovations · 2025 · 9(4)",
    doi: "https://doi.org/10.4433/ci.2025.0411",
  },
  {
    headline: "Телемедицина снижает реадмиссию на 37 %",
    authors: "H. Simons, V. Capri, J. Lee",
    issue: "Digital Health · 2025 · 11(2)",
    doi: "https://doi.org/10.3322/dh.2025.0089",
  },
];

/* ---------------- Hero-карусель ---------------- */
function HeroCarousel() {
  const { t } = useTranslation();
  const slides = t("heroSlides", { returnObjects: true }) || [];
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const id = setInterval(() => setCurr((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative">
      {/* Top decorative wave */}
      <svg
        className="absolute top-0 left-0 w-full rotate-180 fill-[#F8F8FF]"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path d="M0,100 C300,200 600,0 1440,100 L1440,0 L0,0 Z" />
      </svg>

      <section
        className="relative flex items-center justify-center h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-sky-900/65" />

        {/* Slide‑in heading */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={curr}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            {slides[curr]}
          </motion.h1>
        </AnimatePresence>

        {/* Bottom decorative wave */}
        <svg
          className="absolute bottom-0 w-full fill-[#F8F8FF]"
          viewBox="0 0 1440 130"
          preserveAspectRatio="none"
        >
          <path d="M0,100 C300,200 600,0 1440,100 L1440,130 L0,130 Z" />
        </svg>
      </section>
    </div>
  );
}

/* ----------- Highlights = статистика ----------- */
function Highlights() {
  const { t } = useTranslation();

  const Stat = ({ icon, label, target, delay }) => {
    const [val, setVal] = useState(0);
    useEffect(() => {
      const step = Math.ceil(target / 80);
      const id = setInterval(() => {
        setVal((v) => {
          if (v + step >= target) {
            clearInterval(id);
            return target;
          }
          return v + step;
        });
      }, 12);
      return () => clearInterval(id);
    }, [target]);

    return (
      <div
        className="flex flex-col items-center"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div
          className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-600/15 text-teal-500 mb-3
                        shadow-inner shadow-teal-500/10 transition hover:shadow-teal-500/25 bg-[#F8F8FF]"
        >
          {icon}
        </div>
        <span className="text-3xl font-bold text-gray-900">
          {val}
          <span className="text-teal-500">+</span>
        </span>
        <p className="mt-1 text-sm text-gray-600">{t(label)}</p>
      </div>
    );
  };

  return (
    <section className="relative py-20 bg-[#F8F8FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12">
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
            {t("factsTitle")}
          </h2>
          <p className="mt-4 text-gray-600">{t("factsDescription")}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          <Stat
            icon={<HeartPulse className="w-6 h-6" />}
            label="patients"
            target={12000}
            delay={100}
          />
          <Stat
            icon={<FlaskConical className="w-6 h-6" />}
            label="projects"
            target={340}
            delay={200}
          />
          <Stat
            icon={<Syringe className="w-6 h-6" />}
            label="trials"
            target={56}
            delay={300}
          />
          <Stat
            icon={<Stethoscope className="w-6 h-6" />}
            label="clinics"
            target={78}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------ Research Feed ------------------ */
function ResearchFeed() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#F8F8FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
            {t("articlesTitle")}
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            {t("articlesDescription")}
          </p>
        </header>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {MED_ARTICLES.map((art, i) => (
            <article
              key={art.doi}
              className="group bg-white rounded-2xl p-6 shadow-md ring-1 ring-gray-200
             transition-all duration-500 hover:shadow-lg hover:animate-tilt-left-pop preserve-3d"
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <h3 className="text-lg font-semibold text-sky-800">
                {art.headline}
              </h3>
              <p className="mt-3 text-sm text-gray-700">{art.authors}</p>
              <p className="mt-1 text-xs text-gray-500">{art.issue}</p>
              <a
                href={art.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-800 mt-5
                           font-medium text-sm"
              >
                {t("readMore")}
                <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- root --------------------------- */
export default function MedicalPortal() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="bg-white">
      <HeroCarousel />
      <Highlights />
      <ResearchFeed />
    </div>
  );
}
