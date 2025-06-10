import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import { CheckCircle } from "lucide-react";

export default function AimsHero() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const topics = [
    { key: "biology", highlight: true },
    { key: "chemistry", highlight: false },
    { key: "earth", highlight: true },
    { key: "environmental", highlight: false },
    { key: "outdoor", highlight: false },
    { key: "physics", highlight: true },
    { key: "teacher", highlight: false },
    { key: "science", highlight: false },
    { key: "sustainability", highlight: true },
  ];

  const pieData = [
    { name: t("aimsHero.stats.research"), value: 55, color: "#06b6d4" },
    { name: t("aimsHero.stats.review"), value: 20, color: "#3b82f6" },
    { name: t("aimsHero.stats.theoretical"), value: 15, color: "#8b5cf6" },
    { name: t("aimsHero.stats.commentary"), value: 10, color: "#f97316" },
  ];

  const lineData = [
    { year: "2019", publications: 40 },
    { year: "2020", publications: 65 },
    { year: "2021", publications: 75 },
    { year: "2022", publications: 90 },
    { year: "2023", publications: 110 },
    { year: "2024", publications: 135 },
  ];

  return (
    <header className="relative px-6 py-20 md:px-12 lg:py-32 bg-gradient-to-br bg-[#F8F8FF] overflow-hidden">
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600"
          >
            {t("aimsHero.title")}
          </motion.h1>

          <p className="text-lg leading-relaxed text-gray-700">
            {t("aimsHero.p1")}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            {t("aimsHero.p2")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8" data-aos="fade-left" data-aos-delay="200">
          <ul className="space-y-3">
            {topics.map(({ key, highlight }) => (
              <li
                key={key}
                className="flex items-start gap-2 text-gray-800 hover:scale-[1.02] hover:text-cyan-600 transition-transform duration-300"
              >
                {highlight ? (
                  <CheckCircle className="w-5 h-5 text-cyan-600 shrink-0 animate-pulse" />
                ) : (
                  <span className="w-5 h-5 border border-gray-300 rounded-full shrink-0 hover:border-cyan-400 transition-colors duration-300" />
                )}
                <span>{t(`aimsHero.scope.${key}`)}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-6">
            <div className="h-64 w-full bg-white/70 backdrop-blur-md border border-cyan-100 rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip formatter={(v) => `${v}%`} />
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`slice-${index}`}
                        fill={entry.color}
                        className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <p className="mt-4 text-center text-sm text-gray-600 font-medium">
                {t("aimsHero.statsTitle")}
                </p>чё
            </div>

            <div className="h-48 w-full bg-white/70 backdrop-blur-md border border-cyan-100 rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />чё
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="publications" stroke="#0ea5e9" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
              <p className="mt-2 text-center text-sm text-gray-600 font-medium">
                {t("aimsHero.publicationsGrowth", "Publications Growth (2019–2024)")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
