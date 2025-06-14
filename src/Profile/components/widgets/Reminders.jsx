import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Bell } from 'lucide-react';
import { remindersData } from '../../data/mockData';

const Reminders = () => {
  const { t } = useTranslation();
  return (
    <motion.div className="bg-white p-5 rounded-3xl shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-800 text-lg">{t("tasks_for_today")}</h3>
        <Bell size={22} className="text-slate-400" />
      </div>
      <ul className="space-y-3">
        {remindersData.map((reminder, index) => (
          <motion.li key={index} className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer" whileHover={{ x: 5 }}>
            <div className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-xl mr-3 text-xl flex-shrink-0">{reminder.icon}</div>
            <div className="flex-1"><p className="text-sm font-medium text-slate-700">{t(reminder.textKey)}</p></div>
            <p className="text-sm text-slate-500 font-mono">{reminder.time}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Reminders;