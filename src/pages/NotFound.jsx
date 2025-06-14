// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600">{t("notFound.message")}</p>
      <Link
        to="/"
        className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
      >
        {t("notFound.backHome")}
      </Link>
    </div>
  );
}