// src/components/dashboard/ExperimentCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Dna, Sigma, Microscope, Beaker } from 'lucide-react';

const ExperimentCard = ({ experiment }) => {
  const { t } = useTranslation();

  // Return null if experiment is undefined or null
  if (!experiment) {
    return null;
  }

  const iconMap = {
    sequencing: <Dna className="text-purple-600" />,
    pcr: <Sigma className="text-orange-600" />,
    microscopy: <Microscope className="text-blue-600" />,
  };

  const statusColors = {
    successful: "bg-green-100 text-green-700 border-green-200",
    requires_review: "bg-yellow-100 text-yellow-700 border-yellow-200",
    in_progress: "bg-blue-100 text-blue-700 border-blue-200",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)", borderColor: "rgba(99, 102, 241, 0.5)" }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="bg-white p-6 rounded-3xl shadow-soft border border-transparent cursor-pointer flex flex-col h-full"
    >
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-100 text-2xl">
          {iconMap[experiment.type] || <Beaker className="text-slate-500" />}
        </div>
        <span
          className={`text-sm font-semibold px-3 py-1.5 rounded-full border ${
            statusColors[experiment.statusKey] || "bg-gray-100 text-gray-700 border-gray-200"
          }`}
        >
          {t(experiment.statusKey || "unknown_status")}
        </span>
      </div>
      <div className="mt-4 flex-grow">
        <h3 className="font-bold text-slate-800 text-xl leading-snug">
          {experiment.name || t("experiment.unknown_name")}
        </h3>
        <p className="text-sm text-slate-500 mt-2">
          {experiment.resultKey ? t(experiment.resultKey) : t("experiment.no_result")}
        </p>
      </div>
      <p className="text-xs text-slate-400 mt-4 self-end">
        {experiment.date || t("experiment.unknown_date")}
      </p>
    </motion.div>
  );
};

export default ExperimentCard;