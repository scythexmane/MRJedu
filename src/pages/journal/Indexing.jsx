import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const indexingPlatforms = [
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Google_Scholar_logo.svg/512px-Google_Scholar_logo.svg.png",
  },
  {
    name: "CROSSREF",
    url: "https://www.crossref.org/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/CrossRef_Logo.png/320px-CrossRef_Logo.png",
  },
  {
    name: "ROAD",
    url: "https://road.issn.org/",
    logo: "https://road.issn.org/themes/road/logo-en.png",
  },
  {
    name: "SCILIT",
    url: "https://www.scilit.net/",
    logo: "https://www.scilit.net/img/logo.png",
  },
  {
    name: "Semantic Scholar",
    url: "https://www.semanticscholar.org/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Semantic_Scholar_logo.svg/512px-Semantic_Scholar_logo.svg.png",
  },
];

export default function IndexingSection() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative px-6 py-20 md:px-10 lg:py-28 bg-gradient-to-br from-white via-[#f0faff] to-[#dbeeff] overflow-hidden">
      {/* glowing gradient orb */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 text-cyan-800"
          data-aos="fade-up"
        >
          {t("indexing.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {indexingPlatforms.map((platform, idx) => (
            <a
              key={idx}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group bg-white/80 backdrop-blur border border-cyan-100 rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center hover:-translate-y-1"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-16 object-contain mb-4 transition-transform group-hover:scale-110"
              />
              <span className="text-lg font-medium text-cyan-700">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
