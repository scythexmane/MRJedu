import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Link2,
  Map,
  Database,
  Brain,
  BookOpenCheck,
} from "lucide-react";

// Indexing databases + short translation keys for their descriptions
const indexingPlatforms = [
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Google_Scholar_logo.svg/512px-Google_Scholar_logo.svg.png",
    descKey: "googleScholar",
    Icon: GraduationCap,
  },
  {
    name: "CROSSREF",
    url: "https://www.crossref.org/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/CrossRef_Logo.png/320px-CrossRef_Logo.png",
    descKey: "crossref",
    Icon: Link2,
  },
  {
    name: "ROAD",
    url: "https://road.issn.org/",
    logo: "https://road.issn.org/themes/road/logo-en.png",
    descKey: "road",
    Icon: Map,
  },
  {
    name: "SCILIT",
    url: "https://www.scilit.net/",
    logo: "https://www.scilit.net/img/logo.png",
    descKey: "scilit",
    Icon: Database,
  },
  {
    name: "Semantic Scholar",
    url: "https://www.semanticscholar.org/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Semantic_Scholar_logo.svg/512px-Semantic_Scholar_logo.svg.png",
    descKey: "semanticScholar",
    Icon: Brain,
  },
  {
    name: "DOAJ",
    url: "https://doaj.org/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Directory_of_Open_Access_Journals_logo.png/512px-Directory_of_Open_Access_Journals_logo.png",
    descKey: "doaj",
    Icon: BookOpenCheck,
  },
];

// Animated Stat component
function Stat({ value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
    >
      <span className="block text-4xl md:text-5xl font-bold text-cyan-800 drop-shadow-sm">
        {value}
      </span>
      <span className="text-cyan-700 text-sm md:text-base mt-1 inline-block">
        {label}
      </span>
    </motion.div>
  );
}

export default function IndexingSection() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative px-6 py-20 md:px-10 lg:py-28 bg-gradient-to-br bg-[#F8F8FF] overflow-hidden">
      {/* glowing gradient orb */}
      <div className="absolute top-20 -right-10 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 text-cyan-800"
          data-aos="fade-up"
        >
          {t("indexing.title")}
        </h2>

        {/* Subtitle */}
        <p
          className="mx-auto max-w-2xl text-lg text-cyan-700 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t("indexing.subtitle")}
        </p>

        {/* Quick stats */}
        <div
          className="flex flex-wrap justify-center gap-8 mb-14"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Stat value="6+" label={t("indexing.stats.databases")} />
          <Stat value="10+" label={t("indexing.stats.years")} />
          <Stat value="15K+" label={t("indexing.stats.citations")} />
        </div>

        {/* Indexing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {indexingPlatforms.map((platform, idx) => {
            const { Icon } = platform;
            return (
              <a
                key={idx}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="group bg-white/80 backdrop-blur border border-cyan-100 rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center hover:-translate-y-1"
              >
                {/* Brand logo */}
                <motion.img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-16 object-contain mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                {/* Contextual Icon */}
                <div className="mb-2">
                  <Icon
                    className="w-8 h-8 text-cyan-600 transition-transform duration-300 group-hover:rotate-6 shrink-0"
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>
                <span className="text-lg font-medium text-cyan-700 mb-2">
                  {platform.name}
                </span>
                {/* Reveal description on hover */}
                <p className="text-sm text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t(`indexing.descriptions.${platform.descKey}`)}
                </p>
              </a>
            );
          })}
        </div>

        {/* Call to Action */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-14">
          <Link
            to="/contact" // Replace with real URL
            className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-full shadow-lg transition focus-visible:ring focus-visible:ring-cyan-400 focus-visible:ring-opacity-50"
          >
            {t("indexing.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
