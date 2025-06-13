// src/EventsContent.js
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CalendarDays, PlusCircle } from 'lucide-react';

const EventsContent = () => {
  const { t } = useTranslation();

  const events = [
    { id: 1, titleKey: 'event_crispr_meeting', date: '2025-06-14 11:00', descriptionKey: 'event_crispr_description' },
    { id: 2, titleKey: 'event_lab_safety_training', date: '2025-06-20 14:00', descriptionKey: 'event_safety_description' },
    { id: 3, titleKey: 'event_biotech_conference', date: '2025-07-05 09:00', descriptionKey: 'event_conference_description' },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
        <CalendarDays size={32} className="mr-3 text-brand-blue" />
        {t('events')}
      </h1>
      <p className="text-slate-600 mb-8 text-lg">
        {t('events_overview_description')}
      </p>

      <motion.button
          className="flex items-center bg-brand-blue text-white py-2.5 px-5 rounded-xl font-medium shadow-md hover:bg-indigo-700 transition-colors duration-200 whitespace-nowrap mb-8"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
      >
          <PlusCircle size={18} className="mr-2" /> {t('add_new_event')}
      </motion.button>

      {events.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {events.map(event => (
            <motion.div key={event.id} variants={itemFadeIn}
              className="bg-white p-6 rounded-3xl shadow-soft border border-transparent flex flex-col"
              whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', borderColor: 'rgba(99, 102, 241, 0.4)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h3 className="font-bold text-slate-800 text-xl mb-2">{t(event.titleKey)}</h3>
              <p className="text-sm text-slate-500 mb-1"><span className="font-semibold">{t('date')}:</span> {event.date}</p>
              <p className="text-sm text-slate-600 flex-grow">{t(event.descriptionKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-slate-500 py-10 text-lg"
        >
          {t('no_events_found')}
        </motion.div>
      )}
    </motion.div>
  );
};

export default EventsContent;