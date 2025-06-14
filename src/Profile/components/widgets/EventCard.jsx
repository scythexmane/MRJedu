import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { nextEventData } from '../../data/mockData';

const EventCard = () => {
  const { t } = useTranslation();
  return (
    <motion.div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-3xl text-white shadow-xl relative overflow-hidden" whileHover={{ translateY: -5, boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)" }}>
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="flex justify-between items-center z-10 relative">
        <p className="font-medium text-lg">{t(nextEventData.titleKey)}</p>
        <div className="flex items-center bg-white/20 px-3 py-1.5 rounded-full text-xs font-semibold">
          {nextEventData.icon}
          <span>{t(nextEventData.typeKey)}</span>
        </div>
      </div>
      <h3 className="text-3xl font-bold mt-3 leading-tight">{nextEventData.date}</h3>
      <div className="mt-4 z-10 relative">
        <p className="font-semibold text-lg">{nextEventData.description}</p>
        <p className="text-sm opacity-90 mt-1">{nextEventData.participants}</p>
      </div>
      <motion.button className="w-full mt-6 bg-white text-indigo-700 font-semibold py-3 rounded-xl hover:bg-slate-100 transition-colors duration-200 shadow-md" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        {t("connect_to_meeting")}
      </motion.button>
    </motion.div>
  );
};

export default EventCard;