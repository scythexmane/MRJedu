import React from "react";
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

  const handleLinkClick = () => {
    // Закрываем только на мобилках
    if (window.innerWidth < 768 && setOpen) {
      setOpen(false);
    }
  };

  const handleLogout = () => {
    logout(); // Вызываем существующую функцию logout
    navigate("/"); // Перенаправляем на главную страницу
  };

  return (
    <motion.aside
      initial={false}
      animate={{ x: isOpen || window.innerWidth >= 768 ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed md:static top-0 left-0 z-40 md:z-10 flex flex-col w-72 h-screen bg-white/80 backdrop-blur-lg border-r border-slate-200/80 transition-transform duration-300"
    >
      <div className="flex flex-col items-center p-4 border-b border-slate-200/80">
        <div className="relative group cursor-pointer">
          <motion.img
            src={
              
              "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
            }
            alt="User Avatar"
            className="w-24 h-24 rounded-full object-cover"
            whileHover={{ scale: 1.05, filter: "brightness(75%)" }}
          />
          <motion.div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Upload className="text-white" size={28} />
          </motion.div>
        </div>
        <h2 className="font-bold text-xl mt-3 text-slate-800">
          {user?.firstName || "User Name"}
        </h2>
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
