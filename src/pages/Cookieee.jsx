import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Globe,
  UserCheck,
  FileText,
  ExternalLink,
  Cookie,
} from "lucide-react";

const sections = [
  
  "cookie_policy",
  "cookie_def",
  "cookie_types",
  "cookie_use",
  "cookie_manage",
  "cookie_changes",
  "cookie_contact"
];

const icons = {
 
  cookie_policy: <Cookie className="w-7 h-7 text-cyan-600 group-hover:rotate-12 transition-transform duration-300" />, 
  cookie_def: <Cookie className="w-7 h-7 text-cyan-600 group-hover:rotate-12 transition-transform duration-300" />, 
  cookie_types: <Cookie className="w-7 h-7 text-cyan-600 group-hover:rotate-12 transition-transform duration-300" />, 
  cookie_use: <Cookie className="w-7 h-7 text-cyan-600 group-hover:rotate-12 transition-transform duration-300" />, 
  cookie_manage: <Cookie className="w-7 h-7 text-cyan-600 group-hover:rotate-12 transition-transform duration-300" />, 
  cookie_changes: <Cookie className="w-7 h-7 text-cyan-600 group-hover:rotate-12 transition-transform duration-300" />, 
  cookie_contact: <Cookie className="w-7 h-7 text-cyan-600 group-hover:rotate-12 transition-transform duration-300" />,
};

const PrivacyPolicySection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative px-6 py-24 md:px-20 bg-[#F8F8FF] overflow-hidden">
      {/* Abstract floating cyan accents */}
      <div className="absolute top-[-12%] left-[-12%] w-[380px] h-[380px] bg-cyan-100 opacity-40 rounded-full blur-3xl animate-[ping_8s_linear_infinite]" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[300px] h-[300px] bg-cyan-200 opacity-30 rounded-full blur-2xl animate-[pulse_10s_ease-in-out_infinite]" />
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[240px] h-[240px] bg-cyan-50 opacity-20 rounded-full blur-3xl animate-[spin_60s_linear_infinite]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center text-cyan-900 mb-16 tracking-tight leading-tight drop-shadow-md">
          {t("cookie_policy.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {sections.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/70 border border-cyan-100 rounded-[2rem] shadow-2xl p-10 hover:shadow-cyan-200/60 hover:scale-[1.02] transition-all duration-400 backdrop-blur-2xl relative overflow-hidden"
            >
              {/* Decorative overlay blob */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-100 opacity-20 rounded-full blur-xl pointer-events-none animate-[ping_12s_ease-in-out_infinite]" />

              <div className="flex items-center gap-4 mb-5">
                {icons[key]}
                <h3 className="text-2xl font-semibold text-cyan-800 group-hover:text-cyan-700 transition-colors">
                  {t(`privacy.${key}.title`)}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors text-[17px]">
                {t(`privacy.${key}.text`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
