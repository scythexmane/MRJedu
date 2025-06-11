import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import {
  BookOpenCheck,
  Share2,
  FolderOpenDot,
  Globe,
  LockOpen,
  Users,
  Copyright,
  ShieldCheck,
  FileCheck2,
  Landmark,
  KeyRound,
  Network,
  FileText,
  BookUser,
  RefreshCcw,
} from "lucide-react";

export default function OpenAccessSection() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative px-6 py-20 md:px-10 lg:py-28 bg-[#F8F8FF] overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-800 mb-6">
            {t("openAccess.title")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t("openAccess.description")}
          </p>

          <p className="text-gray-600 text-base mb-6">
            Open access promotes transparency and collaboration in science. By
            removing paywalls, we ensure that discoveries reach a wider audience
            — from researchers to policymakers and the general public. Our
            journal is committed to fostering an inclusive environment where
            knowledge is a universal right, not a privilege.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <BookOpenCheck className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("openAccess.points.boai")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Share2 className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("openAccess.points.license")}</span>
            </li>
            <li className="flex items-start gap-3">
              <FolderOpenDot className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("openAccess.points.archive")}</span>
            </li>
            <li className="flex items-start gap-3">
              <LockOpen className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("openAccess.points.immediate")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("openAccess.points.global")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("openAccess.points.equity")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Landmark className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("openAccess.points.educationSupport")}</span>
            </li>
            <li className="flex items-start gap-3">
              <KeyRound className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("openAccess.points.responsibleReuse")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Network className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("openAccess.points.openCommunity")}</span>
            </li>
          </ul>
        </div>

        {/* Right: Illustration or Visual */}
        <div className="relative" data-aos="fade-left">
          <img
            src="https://cdn.vectorstock.com/i/1000v/01/47/holy-and-magic-book-vector-17100147.jpg"
            alt="Open book with glowing light and ancient symbols - symbol of open knowledge, educational freedom"
            className="rounded-2xl shadow-xl object-cover w-full h-full max-h-[420px]"
          />
          <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 text-sm font-medium rounded-full shadow">
            {t("openAccess.badge")}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-20 max-w-5xl mx-auto" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-cyan-700 mb-6">
          {t("copyright.title")}
        </h3>
        <p className="text-gray-700 text-lg mb-6">
          {t("copyright.description")}
        </p>

        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <Copyright className="text-cyan-600 w-6 h-6 shrink-0" />
            <span>{t("copyright.points.ownership")}</span>
          </li>
          <li className="flex items-start gap-3">
            <ShieldCheck className="text-cyan-600 w-6 h-6 shrink-0" />
            <span>{t("copyright.points.permissions")}</span>
          </li>
          <li className="flex items-start gap-3">
            <FileCheck2 className="text-cyan-600 w-6 h-6 shrink-0" />
            <span>{t("copyright.points.usage")}</span>
          </li>
          <li className="flex items-start gap-3">
            <BookUser className="text-cyan-600 w-6 h-6 shrink-0" />
            <span>{t("copyright.points.attribution")}</span>
          </li>
          <li className="flex items-start gap-3">
            <FileText className="text-cyan-600 w-6 h-6 shrink-0" />
            <span>{t("copyright.points.ccLicense")}</span>
          </li>
          <li className="flex items-start gap-3">
            <RefreshCcw className="text-cyan-600 w-6 h-6 shrink-0" />
            <span>{t("copyright.points.reuseAllowed")}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
