import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { researchProgressData } from '../../data/mockData';

const ResearchProgress = () => {
  const { t } = useTranslation();
  return (
    <motion.div className="bg-white p-5 rounded-3xl shadow-soft">
      <h3 className="font-semibold text-slate-800 text-lg">{t(researchProgressData.titleKey)}</h3>
      <p className="text-sm text-slate-500 mt-1">{researchProgressData.goal}</p>
      <div className="mt-4">
        <div className="flex justify-between items-center text-sm font-medium text-slate-600 mb-2">
          <span>{t("progress")}</span>
          <span>{researchProgressData.progress}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3">
          <motion.div className="bg-brand-blue h-3 rounded-full" initial={{ width: 0 }} animate={{ width: `${researchProgressData.progress}%` }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}/>
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchProgress;