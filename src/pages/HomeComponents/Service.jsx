import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FileText,
  ArrowRight,
  BookOpen,
  Percent,
  Users,
  Award,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const articles = [
  {
    type: "Research Article",
    title:
      "The food-energy-water nexus: Using Hydroviz to support undergraduate students' systems thinking about complex socio-hydrologic issues",
    authors:
      "Silvia-Jessica Mostacedo-Marasovic, Holly C. White, Cory T. Forbes",
    journalInfo:
      "INTERDISCIP J ENV SCI ED, Volume 21, Issue 2, 2025, Article No: e2506",
    doi: "https://doi.org/10.29333/ijese/15901",
  },
  {
    type: "Research Article",
    title:
      "Exploring the effect of the source of information on awareness of climate change in secondary students in the Gippsland Region",
    authors: "Amy Cooby, Patricia Menchon, Jaime K. Manning",
    journalInfo:
      "INTERDISCIP J ENV SCI ED, Volume 21, Issue 2, 2025, Article No: e2507",
    doi: "https://doi.org/10.29333/ijese/15902",
  },
  {
    type: "Research Article",
    title:
      "Nuclear wastewater release to the Pacific Ocean: An environmentally critical socio-scientific issue to promote students' and teachers' grasp of evidence",
    authors: "Won Jung Kim",
    journalInfo:
      "INTERDISCIP J ENV SCI ED, Volume 21, Issue 2, 2025, Article No: e2508",
    doi: "https://doi.org/10.29333/ijese/15938",
  },
  {
    type: "Research Article",
    title:
      "How to reliably diagnose children's concepts in learning science? Using the water cycle as an example",
    authors: "Andreas Louis Imhof, Markus Kübler",
    journalInfo:
      "INTERDISCIP J ENV SCI ED, Volume 21, Issue 2, 2025, Article No: e2509",
    doi: "https://doi.org/10.29333/ijese/15960",
  },
];

const InfoCard = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-base text-gray-600">{children}</p>
    </div>
  </div>
);

export default function RefreshedJournalPage() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-[#F8F8FF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          <div data-aos="fade-right">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t("journal.title")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              {t("journal.description1")}
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              {t("journal.description2")}
            </p>
          </div>

          <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
            <InfoCard icon={<BookOpen size={24} />} title={t("journal.openAccessTitle")}> 
              {t("journal.openAccessText")}
            </InfoCard>
            <InfoCard icon={<Users size={24} />} title={t("journal.cooperationTitle")}> 
              {t("journal.cooperationText")}
            </InfoCard>
            <InfoCard icon={<Percent size={24} />} title={t("journal.acceptanceTitle")}> 
              {t("journal.acceptanceText")}
            </InfoCard>
          </div>
        </div>
      </div>

      <div className="bg-[#F8F8FF] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl" data-aos="fade-up">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t("journal.currentIssue")}
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              {t("journal.volumeInfo")}
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:mt-16 grid-cols-1 lg:grid-cols-2">
            {articles.map((article, index) => (
              <article
                key={article.doi}
                className="group flex flex-col justify-between bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm transition-all duration-300 ease-in-out"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {article.type}
                  </span>
                  <a
                    href={article.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                  </a>
                  <p className="mt-4 text-sm font-medium text-gray-700">
                    {article.authors}
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    {article.journalInfo}
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href={article.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 group"
                  >
                    {t("journal.readArticle")}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
