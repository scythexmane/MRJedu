// src/SettingsContent.js
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Settings, User, Key, Bell, Sun, Moon } from 'lucide-react';

const SettingsContent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
    <br />
    <br />
      <h1 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
        <Settings size={32} className="mr-3 text-brand-blue" />
        {t('settings')}
      </h1>
      <p className="text-slate-600 mb-8 text-lg">
        {t('settings_overview_description')}
      </p>

      <motion.div
        className="space-y-8"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* General Settings */}
        <motion.div className="bg-white p-6 rounded-3xl shadow-soft" variants={itemFadeIn}>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
            <User size={24} className="mr-3 text-brand-blue" />
            {t('general_settings')}
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-slate-700 text-sm font-medium mb-1">{t('language')}</label>
              <select
                className="block w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200 shadow-sm bg-white"
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="ru">{t('russian_language')}</option>
                <option value="en">{t('english_language')}</option>
                <option value="uz">{t('uzbek_language')}</option>
              </select>
            </div>
            {/* Дополнительные поля общих настроек */}
            {/* <div>
              <label className="block text-slate-700 text-sm font-medium mb-1">{t('theme')}</label>
              <div className="flex space-x-4">
                <button className="flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
                    <Sun size={18} className="mr-2" /> {t('light_theme')}
                </button>
                <button className="flex items-center px-4 py-2 rounded-full bg-slate-800 text-white hover:bg-slate-700">
                    <Moon size={18} className="mr-2" /> {t('dark_theme')}
                </button>
              </div>
            </div> */}
          </div>
        </motion.div>

        {/* Security Settings */}
        <motion.div className="bg-white p-6 rounded-3xl shadow-soft" variants={itemFadeIn}>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
            <Key size={24} className="mr-3 text-brand-blue" />
            {t('security_settings')}
          </h2>
          <div className="space-y-4">
            <motion.button
              className="w-full bg-brand-blue text-white py-2.5 rounded-xl font-medium shadow-md hover:bg-indigo-700 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('change_password')}
            </motion.button>
            <motion.button
              className="w-full bg-slate-100 text-slate-700 py-2.5 rounded-xl font-medium shadow-md hover:bg-slate-200 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('two_factor_auth')}
            </motion.button>
          </div>
        </motion.div>

        {/* Notifications Settings */}
        <motion.div className="bg-white p-6 rounded-3xl shadow-soft" variants={itemFadeIn}>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
            <Bell size={24} className="mr-3 text-brand-blue" />
            {t('notification_settings')}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-700">{t('email_notifications')}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-blue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-blue"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700">{t('push_notifications')}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-blue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-blue"></div>
              </label>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SettingsContent;