import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaUserMd, FaBalanceScale, FaMoneyCheckAlt, FaHeartbeat, FaClipboardCheck,
  FaHandsHelping, FaLock, FaDatabase, FaRegCopyright, FaShieldAlt,
  FaRedo, FaComments, FaUser
} from "react-icons/fa";

const icons = [
  <FaUserMd />, <FaBalanceScale />, <FaMoneyCheckAlt />, <FaHeartbeat />, <FaClipboardCheck />,
  <FaHandsHelping />, <FaLock />, <FaDatabase />, <FaRegCopyright />, <FaShieldAlt />,
  <FaRedo />, <FaComments />, <FaUser />
];

export default function EthicalStatement() {
  const { t } = useTranslation();
  const sections = t("ethics.sections", { returnObjects: true });

  return (
    <section className="bg-[#F8F8FF] text-gray-900 py-16 px-6 sm:px-10 md:px-20 max-w-7xl mx-auto">
      <motion.h2 
        className="text-4xl font-extrabold mb-12 border-b-4 border-blue-500 inline-block pb-2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      >
        {t("ethics.title")}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {sections.map((sec, i) => (
          <motion.div 
            key={i}
            className="flex flex-col md:flex-row items-start gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex-shrink-0 text-5xl text-blue-500 bg-blue-100 p-4 rounded-full shadow-md animate-pulse">
              {icons[i]}
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg hover:shadow-blue-200 transition-shadow duration-300 w-full">
              <h3 className="text-2xl font-semibold mb-2">{sec.heading}</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{sec.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 border-t border-gray-200 pt-6 text-center text-sm text-gray-600"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.4 }}
      >
        {t("ethics.contact")}{" "}
        <a 
          href="mailto:publications@modestum.co.uk" 
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          publications@modestum.co.uk
        </a>
      </motion.div>
    </section>
  );
}
