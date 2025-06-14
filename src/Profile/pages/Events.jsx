// src/EventsContent.js
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  CalendarDays,
  PlusCircle,
  BellRing,
  BriefcaseBusiness,
  Lightbulb,
  MapPin,
} from "lucide-react"; // Added more icons for variety

const EventsContent = ({ onAddNewEvent }) => {
  // Added onAddNewEvent prop
  const { t } = useTranslation();

  // Define a palette of subtle, appealing gradients for event cards
  const cardBackgrounds = [
    "from-blue-50 to-indigo-50",
    "from-green-50 to-teal-50",
    "from-purple-50 to-pink-50",
    "from-yellow-50 to-orange-50",
    "from-red-50 to-rose-50",
  ];

  const getCardBackground = (id) => {
    return cardBackgrounds[id % cardBackgrounds.length]; // Simple cycling through backgrounds
  };

  // --- MOCK ДАННЫЕ для событий ---
  const events = [
    {
      id: 1,
      titleKey: "event_crispr_meeting",
      date: "2025-06-14 11:00",
      location: "Conference Room 3B",
      icon: <Lightbulb className="text-amber-500" size={24} />,
      descriptionKey: "event_crispr_description",
    },
    {
      id: 2,
      titleKey: "event_lab_safety_training",
      date: "2025-06-20 14:00",
      location: "Main Auditorium",
      icon: <BellRing className="text-red-500" size={24} />,
      descriptionKey: "event_safety_description",
    },
    {
      id: 3,
      titleKey: "event_biotech_conference",
      date: "2025-07-05 09:00",
      location: "Virtual / Online",
      icon: <BriefcaseBusiness className="text-blue-500" size={24} />,
      descriptionKey: "event_conference_description",
    },
    {
      id: 4,
      titleKey: "event_ai_in_science",
      date: "2025-07-10 10:00",
      location: "Lecture Hall 1",
      icon: <Lightbulb className="text-emerald-500" size={24} />,
      descriptionKey: "event_ai_description",
    },
    {
      id: 5,
      titleKey: "event_team_building",
      date: "2025-07-18 16:00",
      location: "Outdoor Area A",
      icon: <BriefcaseBusiness className="text-purple-500" size={24} />,
      descriptionKey: "event_team_description",
    },
    {
      id: 6,
      titleKey: "event_data_analysis_workshop",
      date: "2025-07-25 09:30",
      location: "Computer Lab 2",
      icon: <Lightbulb className="text-cyan-500" size={24} />,
      descriptionKey: "event_data_description",
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 30 }, // Slightly larger initial Y displacement
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    }, // More springy animation
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.3 },
    },
  };

  return (
    <motion.div
      initial="hidden" // Use predefined variant
      animate="show" // Use predefined variant
      variants={{ show: { transition: { staggerChildren: 0.1 } } }} // For overall page animation
    >
      <br />
      <br />
      <motion.h1
        className="text-4xl font-extrabold text-slate-900 mb-4 flex items-center" // Bigger and bolder
        variants={headerVariants}
      >
        <CalendarDays size={38} className="mr-3 text-blue-600" />{" "}
        {/* Consistent blue color */}
        {t("events")}
      </motion.h1>
      <motion.p
        className="text-slate-600 mb-8 text-lg max-w-2xl" // Wider text
        variants={headerVariants}
      >
        {t("events_overview_description")}
      </motion.p>

      <motion.button
        className="flex items-center bg-blue-600 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap mb-10 text-base" // Larger padding, more prominent shadow
        whileHover={{
          scale: 1.03,
          boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
        }} // More pronounced shadow on hover
        whileTap={{ scale: 0.97 }}
        variants={buttonVariants}
        onClick={onAddNewEvent} // Make it functional
      >
        <PlusCircle size={18} className="mr-2" /> {t("add_new_event")}
      </motion.button>

      {events.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" // Consistent gap
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemFadeIn}
              className={`bg-gradient-to-br ${getCardBackground(
                event.id
              )} p-6 rounded-3xl shadow-lg border border-transparent flex flex-col h-full cursor-pointer`} // Added h-full and cursor-pointer
              whileHover={{
                scale: 1.02,
                boxShadow: "0 12px 25px rgba(0, 0, 0, 0.15)",
                borderColor: "rgba(59, 130, 246, 0.6)",
              }} // Stronger shadow and border on hover
              transition={{ type: "spring", stiffness: 250, damping: 20 }} // More natural spring animation
            >
              <div className="flex items-center mb-3">
                {event.icon}
                <h3 className="font-bold text-slate-800 text-xl ml-3 leading-snug">
                  {t(event.titleKey)}
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                <span className="font-bold text-slate-700 mr-1">
                  {t("date")}:
                </span>{" "}
                {event.date}
              </p>
              <p className="text-sm text-slate-600 mb-4">
                <span className="font-bold text-slate-700 mr-1">
                  {t("location")}:
                </span>{" "}
                {event.location}
              </p>
              <p className="text-base text-slate-700 flex-grow leading-relaxed">
                {t(event.descriptionKey)}
              </p>{" "}
              {/* Larger description text */}
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Add a subtle fade-in
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-slate-500 py-10 text-xl font-medium" // Larger text for empty state
        >
          {t("no_events_found")}
        </motion.div>
      )}
    </motion.div>
  );
};

export default EventsContent;
