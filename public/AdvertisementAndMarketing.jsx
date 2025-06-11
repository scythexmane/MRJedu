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
  Archive,
  HardDriveDownload,
  UploadCloud,
  Server,
  Layers,
  DatabaseZap,
  Clock3,
  FolderSearch,
  LifeBuoy,
  // NEW icons for Advertisement block
  Megaphone,
  Target,
  Mail,
  BellOff,
  Handshake,
  ThumbsUp
} from "lucide-react";

export default function OpenAccessSection() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative px-6 py-20 md:px-10 lg:py-28 bg-white overflow-hidden space-y-24">
      {/* OPEN ACCESS & COPYRIGHT BLOCK */}
      {/* ... existing Open Access and Copyright blocks ... */}

      {/* ARCHIVING POLICY BLOCK */}
      {/* ... existing Archiving block ... */}

      {/* ADVERTISEMENT & MARKETING BLOCK */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
        {/* Text */}
        <div>
          <h3 className="text-3xl font-bold text-cyan-800 mb-6">
            {t("advertisement.title")}
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            {t("advertisement.intro")}
          </p>

          <h4 className="text-2xl font-semibold text-cyan-700 mb-4">
            {t("advertisement.detailsTitle")}
          </h4>
          <p className="text-gray-600 mb-6">
            {t("advertisement.details")}
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <BellOff className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("advertisement.points.noAds")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Target className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("advertisement.points.targetedInvites")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("advertisement.points.optOut")}</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("advertisement.points.dataPrivacy")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Megaphone className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("advertisement.points.ethics")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Handshake className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("advertisement.points.scopeAlignment")}</span>
            </li>
            <li className="flex items-start gap-3">
              <ThumbsUp className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("advertisement.points.communityTrust")}</span>
            </li>
          </ul>
        </div>
        {/* Illustration */}
        <div className="relative" data-aos="fade-left">
          <img
            src="/image.png"
            alt="Stylized megaphone on pastel background representing ethical and transparent scholarly outreach"
            className="rounded-2xl shadow-xl object-cover w-full h-full max-h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
