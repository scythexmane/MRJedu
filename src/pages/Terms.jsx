import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, AlertTriangle, Globe, Lock, CreditCard, RefreshCcw, BadgePercent, Undo2, FileWarning, PencilRuler, ExternalLink } from "lucide-react";

const terms = [
  {
    icon: <BookOpen size={24} />, key: "general"
  },
  {
    icon: <ShieldCheck size={24} />, key: "intellectual"
  },
  {
    icon: <AlertTriangle size={24} />, key: "disclaimer"
  },
  {
    icon: <Globe size={24} />, key: "thirdParty"
  },
  {
    icon: <Lock size={24} />, key: "offensive"
  },
  {
    icon: <CreditCard size={24} />, key: "payments"
  },
  {
    icon: <RefreshCcw size={24} />, key: "exchange"
  },
  {
    icon: <BadgePercent size={24} />, key: "vat"
  },
  {
    icon: <Lock size={24} />, key: "privacy"
  },
  {
    icon: <Undo2 size={24} />, key: "reclamation"
  },
  {
    icon: <FileWarning size={24} />, key: "refund"
  },
  {
    icon: <PencilRuler size={24} />, key: "complaints"
  },
  {
    icon: <ExternalLink size={24} />, key: "modifications"
  }
];

const TermsOfUse = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 px-6 md:px-16 bg-[#F8F8FF] overflow-hidden">
      {/* Decorative cyan blobs */}
      <div className="absolute top-[70px] left-[-60px] w-[300px] h-[300px] bg-cyan-400 opacity-30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-cyan-100 opacity-20 rounded-full blur-2xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
        >
          {t("terms.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 max-w-2xl mb-12"
        >
          {t("terms.subtitle")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {terms.map((term, index) => (
            <motion.div
              key={term.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-cyan-600 group-hover:text-cyan-700 transition">
                  {term.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {t(`terms.${term.key}.title`)}
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t(`terms.${term.key}.text`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
