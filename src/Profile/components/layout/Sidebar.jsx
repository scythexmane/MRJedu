import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  FolderKanban,
  FlaskConical,
  CalendarDays,
  FileText,
  Settings,
  LogOut,
  Upload,
  X,
} from "lucide-react";
import NavItem from "./NavItem";
import { userData } from "../../data/mockData";

const navItems = [
  { path: "/profile/dashboard", icon: LayoutDashboard, labelKey: "dashboard" },
  { path: "/profile/my-projects", icon: FolderKanban, labelKey: "my_projects" },
  { path: "/profile/experiments", icon: FlaskConical, labelKey: "experiments" },
  { path: "/profile/events", icon: CalendarDays, labelKey: "events" },
  { path: "/profile/publications", icon: FileText, labelKey: "publications" },
  { path: "/profile/settings", icon: Settings, labelKey: "settings" },
];

const Sidebar = ({ isOpen, setOpen }) => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const handleLinkClick = () => {
    if (isMobile && setOpen) setOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    if (setOpen) setOpen(false);
  };

  // Проверка ширины экрана
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Блокировка скролла при открытом сайдбаре на мобильных
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile, isOpen]);

  return (
    <motion.aside
      initial={false}
      animate={{
        x: isMobile ? (isOpen ? 0 : "-100%") : 0, // Сайдбар уезжает влево на мобильных
        width: isMobile ? (isOpen ? "100%" : 0) : "18rem", // Полная ширина на мобильных
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`${
        isMobile
          ? "fixed top-0 left-0 w-full h-full z-50" // Полный экран на мобильных
          : "static w-72 h-full z-30"
      } flex flex-col bg-[#F8F8FF] border-r border-slate-200/80 overflow-y-auto`}
    >
      {/* Кнопка закрытия для мобильных */}
      {isMobile && isOpen && (
        <div className="p-4 flex justify-end">
          <motion.button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} className="text-slate-600" />
          </motion.button>
        </div>
      )}

      <div className="flex flex-col items-center p-4 border-b border-slate-200/80">
        <div className="relative group cursor-pointer">
          <motion.img
            src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
            alt="User Avatar"
            className="w-24 h-24 rounded-full object-cover"
            whileHover={{ scale: 1.05, filter: "brightness(75%)" }}
          />
          <motion.div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Upload className="text-white" size={28} />
          </motion.div>
        </div>
        <h2 className="font-bold text-xl mt-3 text-slate-800">{t("user")}</h2>
        <p className="mt-1 text-sm text-slate-500 bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
          {userData.status}
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <div onClick={handleLinkClick} key={item.path}>
            <NavItem to={item.path} icon={item.icon} labelKey={item.labelKey} />
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200/80">
        <motion.button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2.5 rounded-lg text-slate-600 hover:bg-red-500/10 hover:text-red-600 transition-colors"
          whileHover={{ x: 5 }}
        >
          <LogOut size={20} className="mr-3" />
          <span className="font-medium">{t("logout")}</span>
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;