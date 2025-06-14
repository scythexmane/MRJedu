// src/pages/Dashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BarChart, PieChart } from "lucide-react";
import WelcomeHeader from "../components/dashboard/WelcomeHeader";
import ExperimentCard from "../components/dashboard/ExperimentCard";
import ChartCard from "../components/dashboard/ChartCard";
import EventCard from "../components/widgets/EventCard";
import CalendarWidget from "../components/widgets/CalendarWidget";
import Reminders from "../components/widgets/Reminders";
import ResearchProgress from "../components/widgets/ResearchProgress";
import LabStatusIndicator from "../components/widgets/LabStatusIndicator";
import LineChartMock from "../components/charts/LineChartMock";
import PieChartMock from "../components/charts/PieChartMock";
import {
  recentExperiments,
  nextEventData,
  monthlyActivityData,
  experimentTypeDistribution,
} from "../data/mockData";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const Dashboard = () => {
  const { t } = useTranslation();
  const validExperiments = recentExperiments.filter(
    (exp) => exp && typeof exp === "object" && exp.id
  );

  return (
    <motion.div
      className="w-full min-h-screen bg-[#f5f6fa] pt-[80px] pb-6 pr-6 transition-all duration-300" // Добавлен pt-[80px]
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <WelcomeHeader />
            <motion.div
              className="flex items-center space-x-3 p-3 bg-white rounded-2xl shadow-soft"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-base font-medium text-slate-700">
                {t("lab_status")}
              </p>
              <LabStatusIndicator status="online" />
            </motion.div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-5">
              {t("latest_experiments")}
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {validExperiments.length > 0 ? (
                validExperiments.map((exp) => (
                  <motion.div key={exp.id} variants={itemFadeIn}>
                    <ExperimentCard experiment={exp} />
                  </motion.div>
                ))
              ) : (
                <p className="text-slate-500">
                  {t("no_experiments_available")}
                </p>
              )}
            </motion.div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-5">
              {t(nextEventData.titleKey)}
            </h2>
            <EventCard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard titleKey="lab_activity_6_months" icon={BarChart}>
              <LineChartMock data={monthlyActivityData} />
            </ChartCard>
            <ChartCard titleKey="experiment_type_distribution" icon={PieChart}>
              <PieChartMock data={experimentTypeDistribution} />
            </ChartCard>
          </div>
        </div>

        <motion.div
          className="w-full xl:w-96 flex-shrink-0 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <CalendarWidget />
          <Reminders />
          <ResearchProgress />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;