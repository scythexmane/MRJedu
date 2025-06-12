import React, { useEffect, useState } from "react";
import { ShieldCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const COOKIE_KEY = "cookieConsent";
const DAY = 24 * 60 * 60 * 1000;
const MONTH = 30 * DAY;

const CookieConsent = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      const expiresIn = data.accepted ? MONTH : DAY;
      const shouldShow = Date.now() - data.timestamp > expiresIn;
      setShow(shouldShow);
    } else {
      setShow(true);
    }
  }, []);

  const handleResponse = (accepted) => {
    localStorage.setItem(
      COOKIE_KEY,
      JSON.stringify({ accepted, timestamp: Date.now() })
    );
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 z-50 max-w-md shadow-2xl rounded-3xl border border-teal-200 bg-gradient-to-br from-white via-slate-50 to-teal-50 p-6 flex items-start gap-4 backdrop-blur-lg"
        >
          <div className="bg-teal-600/10 text-teal-700 p-3 rounded-full shadow">
            <ShieldCheck size={24} />
          </div>
          <div className="flex-1 text-sm text-slate-700">
            <p className="font-bold text-base mb-1 text-teal-700">
              {t("cookie.title", "Мы используем куки 🍪")}
            </p>
            <p className="text-slate-600">
              {t(
                "cookie.description",
                "Для улучшения работы портала, аналитики и персонализации контента."
              )}
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => handleResponse(true)}
                className="px-4 py-2 text-sm font-medium bg-teal-600 text-white rounded-xl hover:bg-teal-700 shadow transition"
              >
                {t("cookie.accept", "Принять")}
              </button>
              <button
                onClick={() => handleResponse(false)}
                className="px-4 py-2 text-sm font-medium border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-100 transition"
              >
                {t("cookie.decline", "Отклонить")}
              </button>
            </div>
          </div>
          <button
            className="ml-2 text-slate-400 hover:text-slate-600 transition"
            onClick={() => handleResponse(false)}
          >
            <X size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
