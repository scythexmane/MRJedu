import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, PlusCircle } from 'lucide-react';

const CalendarWidget = () => {
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());
  const activeDays = [14, 19, 28]; // Example active days

  const weekdaysKeys = ["monday_short", "tuesday_short", "wednesday_short", "thursday_short", "friday_short", "saturday_short", "sunday_short"];
  const monthNamesKeys = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  
  const daysInMonth = () => new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = () => new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const blanks = Array((firstDayOfMonth() + 6) % 7).fill(null);
  const days = Array.from({ length: daysInMonth() }, (_, i) => i + 1);

  return (
    <motion.div className="bg-white p-5 rounded-3xl shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <motion.button className="p-2 rounded-full hover:bg-slate-100" onClick={handlePrevMonth} whileTap={{ scale: 0.9 }}>
          <ChevronLeft size={20} className="text-slate-600" />
        </motion.button>
        <h3 className="font-semibold text-slate-800 text-lg">{t(monthNamesKeys[currentDate.getMonth()])} {currentDate.getFullYear()}</h3>
        <motion.button className="p-2 rounded-full hover:bg-slate-100" onClick={handleNextMonth} whileTap={{ scale: 0.9 }}>
          <ChevronRight size={20} className="text-slate-600" />
        </motion.button>
      </div>
      <div className="grid grid-cols-7 gap-y-2 text-center border-b pb-2 mb-2 border-slate-200">
        {weekdaysKeys.map((key) => <span key={key} className="text-xs font-bold text-slate-400">{t(key)}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-y-2 text-center">
        {blanks.map((_, i) => <div key={`blank-${i}`} />)}
        {days.map((day) => (
          <div key={day} className="flex justify-center items-center">
            <button className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${activeDays.includes(day) ? "bg-brand-blue text-white shadow-md" : "text-black hover:bg-slate-100"}`}>
              {day}
            </button>
          </div>
        ))}
      </div>
      <motion.button className="w-full mt-4 flex items-center justify-center bg-blue-800 text-white py-2.5 rounded-xl font-medium shadow-md hover:bg-brand-blue transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <PlusCircle size={18} className="mr-2" /> {t("add_event")}
      </motion.button>
    </motion.div>
  );
};

export default CalendarWidget;