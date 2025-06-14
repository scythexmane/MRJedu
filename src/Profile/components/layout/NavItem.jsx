// components/NavItem.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavItem = ({ to, icon: Icon, labelKey }) => {
  const { t } = useTranslation();

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
          isActive
            ? "bg-indigo-100 text-indigo-600"
            : "text-slate-600 hover:bg-gray-100"
        }`
      }
    >
      <Icon size={20} />
      <span>{t(`profile.${labelKey}`)}</span>
    </NavLink>
  );
};

export default NavItem;
