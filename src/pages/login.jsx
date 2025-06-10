import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Lock, User, Phone, ArrowLeft } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS (good to do this once, at a top level or here if it's the main entry)
AOS.init({ once: true, duration: 700, easing: "ease-in-out" });

// --- (FormInput, AuthButton, LanguageSwitcher components remain the same) ---
const FormInput = ({ icon, type, placeholder, value, onChange }) => (
  <div className="relative flex items-center">
    {icon}
    <input
      type={type}
      placeholder={placeholder}
      className="w-full pl-12 pr-4 py-3 bg-white/80 rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
      value={value}
      onChange={onChange}
    />
  </div>
);

const AuthButton = ({ text, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
    onClick={onClick}
  >
    {text}
  </motion.button>
);

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", name: "EN" },
    { code: "ru", name: "RU" },
    { code: "uz", name: "UZ" },
  ];

  return (
    <div className="fixed top-6 right-6 bg-white/70 backdrop-blur-md rounded-full p-1 flex space-x-1 z-50 shadow-md">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors duration-300 ${
            i18n.language.startsWith(lang.code)
              ? "bg-white text-blue-600 shadow"
              : "text-gray-600 hover:bg-white/80"
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};
// --- (End of unchanged components) ---


export default function Login() {
  const { t } = useTranslation();
  const [formType, setFormType] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const formVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  // AOS initialization moved outside the component or to a separate useEffect for performance
  // useEffect(() => {
  //   AOS.init({ once: true, duration: 700, easing: "ease-in-out" });
  // }, []); // This AOS useEffect is not strictly needed here if AOS.init is called globally.

  const renderForm = () => {
    switch (formType) {
      case "register":
        return (
          <motion.div
            key="register"
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-center text-3xl font-bold text-gray-800">
              {t("login.createAccountTitle")}
            </h2>
            <FormInput
              icon={
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              }
              type="text"
              placeholder={t("login.firstNamePlaceholder")}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <FormInput
              icon={
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              }
              type="text"
              placeholder={t("login.lastNamePlaceholder")}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <FormInput
              icon={
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              }
              type="tel"
              placeholder={t("login.phonePlaceholder")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FormInput
              icon={
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              }
              type="email"
              placeholder={t("login.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              icon={
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              }
              type="password"
              placeholder={t("login.passwordPlaceholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <AuthButton text={t("login.registerButton")} />
            <button
              onClick={() => setFormType("login")}
              className="flex items-center justify-center text-gray-500 hover:text-blue-600 transition"
            >
              <ArrowLeft size={18} />
              <span className="ml-2">{t("login.backToLoginLink")}</span>
            </button>
          </motion.div>
        );

      case "forgotPassword":
        return (
          <motion.div
            key="forgotPassword"
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-center text-3xl font-bold text-gray-800">
              {t("login.resetPasswordTitle")}
            </h2>
            <FormInput
              icon={
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              }
              type="email"
              placeholder={t("login.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AuthButton text={t("login.sendButton")} />
            <button
              onClick={() => setFormType("login")}
              className="flex items-center justify-center text-gray-500 hover:text-blue-600 transition"
            >
              <ArrowLeft size={18} />
              <span className="ml-2">{t("login.backToLoginLink")}</span>
            </button>
          </motion.div>
        );

      default:
        return (
          <motion.div
            key="login"
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-center text-3xl font-bold text-gray-800">
              {t("login.welcomeTitle")}
            </h2>
            <FormInput
              icon={
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              }
              type="email"
              placeholder={t("login.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              icon={
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              }
              type="password"
              placeholder={t("login.passwordPlaceholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <AuthButton text={t("login.loginButton")} />
            <div className="flex justify-between">
              <button
                onClick={() => setFormType("forgotPassword")}
                className="text-sm text-gray-500 hover:text-blue-600 transition"
              >
                {t("login.forgotPasswordLink")}
              </button>
              <button
                onClick={() => setFormType("register")}
                className="text-sm text-gray-500 hover:text-blue-600 transition"
              >
                {t("login.createAccountLink")}
              </button>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div
      // Use the CSS class for animation
      className="min-h-screen flex items-center justify-center p-4 animate-gradient"
    >
      <div className="relative w-full max-w-md">
        <LanguageSwitcher />
        <div
          className="bg-white/50 backdrop-blur-lg rounded-3xl shadow-2xl p-10"
          data-aos="fade-up"
        >
          <AnimatePresence mode="wait">{renderForm()}</AnimatePresence>
        </div>
      </div>
    </div>
  );
}

//