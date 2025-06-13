// src/Login.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // <--- ИМПОРТ useNavigate
import {
  Mail,
  Lock,
  User,
  Phone,
  ArrowLeft,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "./AuthContext";

// Инициализируем AOS один-разово
AOS.init({ once: true, duration: 700, easing: "ease-in-out" });

/* ------------------------- ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ---------------------- */

const FormInput = ({
  icon,
  type,
  placeholder,
  value,
  onChange,
  toggleVisibility,
  showPassword,
}) => (
  <div className="relative flex items-center">
    {icon}
    <input
      type={type}
      placeholder={placeholder}
      className="w-full pl-12 pr-12 py-3 bg-white/80 rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
      value={value}
      onChange={onChange}
    />
    {toggleVisibility && (
      <motion.button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 focus:outline-none"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </motion.button>
    )}
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

/* ------------------------------- ГЛАВНЫЙ КОМПОНЕНТ ------------------------- */

export default function Login() {
  const { t, i18n } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate(); // <--- Инициализация useNavigate

  /* ------------ состояние формы ------------ */
  const [formType, setFormType] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  /* ------------ вспомогательное состояние ------------ */
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null); // текст уведомления

  /* ------------ анимационные варианты ------------ */
  const formVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  /* ------------ обновляем AOS при смене языка ------------ */
  useEffect(() => {
    const refresh = () => AOS.refreshHard();
    refresh();
    i18n.on("languageChanged", refresh);
    return () => i18n.off("languageChanged", refresh);
  }, [i18n]);

  /* ------------ уведомление об успехе ------------ */
  const triggerSuccess = (key, callback) => { // <--- Добавили callback
    setSuccessMsg(t(`login.success.${key}`));
    setTimeout(() => {
      setSuccessMsg(null);
      if (callback) callback(); // <--- Вызываем callback после исчезновения сообщения
    }, 3500);
  };

  /* ------------ простая валидация & обработчики ------------ */
  // В handleLogin
  const handleLogin = () => {
    if (email && password) {
      login({
        firstName: "Пользователь",
        name: "Дефолтный Пользователь",
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        status: "Исследователь",
      });
      triggerSuccess("login", () => navigate("/profile")); // <--- Перенаправление
    }
  };

  // В handleRegister
  const handleRegister = () => {
    if (
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword &&
      firstName &&
      lastName
    ) {
      login({
        firstName: firstName,
        name: `${firstName} ${lastName}`,
        avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        status: "Новый пользователь",
      });
      triggerSuccess("register", () => navigate("/profile")); // <--- Перенаправление
    }
  };

  const handleReset = () => {
    if (email) {
      triggerSuccess("reset");
      // Для сброса пароля не нужно логинить пользователя, поэтому login не вызываем
    }
  };

  /* ------------ формы ------------ */
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
              type={showPassword ? "text" : "password"}
              placeholder={t("login.passwordPlaceholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              toggleVisibility={() => setShowPassword(!showPassword)}
              showPassword={showPassword}
            />
            <FormInput
              icon={
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              }
              type={showConfirmPassword ? "text" : "password"}
              placeholder={t("login.confirmPasswordPlaceholder")}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              toggleVisibility={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              showPassword={showConfirmPassword}
            />

            <AuthButton
              text={t("login.registerButton")}
              onClick={handleRegister}
            />

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
            <AuthButton text={t("login.sendButton")} onClick={handleReset} />
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
              type={showPassword ? "text" : "password"}
              placeholder={t("login.passwordPlaceholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              toggleVisibility={() => setShowPassword(!showPassword)}
              showPassword={showPassword}
            />
            <AuthButton text={t("login.loginButton")} onClick={handleLogin} />
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

  /* ---------------------------- Рендер ---------------------------- */
  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-gradient">
      {/* Уведомление */}
      <AnimatePresence>
        {successMsg && (
          <motion.div
            key="success-toast"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full shadow-xl"
          >
            <CheckCircle2 className="w-5 h-5" />
            {successMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Форма */}
      <div className="relative w-full max-w-md">
        <LanguageSwitcher />
        <div
          key={i18n.language}
          className="bg-white/50 backdrop-blur-lg rounded-3xl shadow-2xl p-10"
          data-aos="fade-up"
        >
          <AnimatePresence mode="wait">{renderForm()}</AnimatePresence>
        </div>
      </div>
    </div>
  );
}