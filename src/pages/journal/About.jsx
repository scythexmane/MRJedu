import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function AboutPage() {
  const { t } = useTranslation();

  const acceptanceData = [
    { year: "2019", rate: 20 },
    { year: "2020", rate: 16 },
    { year: "2021", rate: 24 },
    { year: "2022", rate: 23 },
    { year: "2023", rate: 18 },
    { year: "2024", rate: 25 },
    { year: "2025", rate: 26 },
  ];

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setFilteredData(acceptanceData.slice(-3));
      } else {
        setFilteredData(acceptanceData);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stats = [
    { key: "issn", value: "2633-6537" },
    { key: "doi", value: "https://doi.org/10.29333/ijese", link: true },
    { key: "publisher", value: t("about.stats.publisherValue", "Modestum DOO, Serbia") },
    { key: "abbrev", value: "INTERDISCIP J ENVIRON SCI EDUC (Web of Science)" },
    { key: "impactFactor", value: "1.8 (2024)" },
    { key: "citeScore", value: "2.3 (Scopus 2024)" },
    { key: "reviewTime", value: "45 days average" },
    { key: "hIndex", value: "12 (2023)" },
    { key: "downloads", value: "85K+ article downloads/year" },
    { key: "editors", value: "18 international editors" },
    { key: "languages", value: "Supports English & Russian" },
    { key: "plagiarism", value: "Plagiarism check: Turnitin" },
  ];

  return (
    <section className="relative px-6 py-16 md:px-10 lg:py-24 bg-gradient-to-b bg-[#F8F8FF] ">
      <div className="max-w-6xl mx-auto text-gray-800">
        {/* title */}
        <h1
          data-aos="fade-up"
          className="text-center text-4xl lg:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"
        >
          {t("about.title")}
        </h1>

        {/* descriptions */}
        <div
          className="space-y-6 text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <p>{t("about.description1")}</p>
          <p>{t("about.description2")}</p>
        </div>

        {/* stats cards */}
        <div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {stats.map((item) => (
            <div
              key={item.key}
              className="group relative p-6 bg-white/70 backdrop-blur-md border border-cyan-100 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <p className="mb-2 text-sm font-semibold text-cyan-600 uppercase tracking-wide">
                {t(`about.stats.${item.key}`)}
              </p>
              {item.link ? (
                <a
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-cyan-700 underline hover:text-cyan-900"
                >
                  {item.value}
                </a>
              ) : (
                <p className="break-words text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* acceptance rates chart */}
        <div className="mt-16" data-aos="fade-up" data-aos-delay="250">
          <h2 className="text-2xl font-bold mb-4 text-cyan-700 flex justify-center">
            {t("about.acceptanceRatesTitle")}
          </h2>
          <div className="w-full flex justify-center">
            <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[60%] h-64 bg-white/70 backdrop-blur-md rounded-xl p-4 border border-cyan-100 shadow-md">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={filteredData}
                  margin={{ top: 10, right: 40, left: 0, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip formatter={(v) => `${v}%`} />
                  <Bar dataKey="rate" radius={[4, 4, 0, 0]} fill="#06b6d4" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* license */}
        <div
          className="mt-16 border-t pt-6 text-center text-sm text-gray-500"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {t("about.license")} <br />
          <a
            href="http://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 underline hover:text-cyan-800"
          >
            http://creativecommons.org/licenses/by/4.0/
          </a>
        </div>
      </div>
    </section>
  );
}
