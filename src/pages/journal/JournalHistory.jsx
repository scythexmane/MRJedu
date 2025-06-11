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
  Megaphone,
  Target,
  Mail,
  BellOff,
  Handshake,
  ThumbsUp,
  Calendar,
  Activity,
  BookOpen,
  Bookmark
} from "lucide-react";

export default function OpenAccessSection() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative px-6 py-20 md:px-10 lg:py-28 bg-[#F8F8FF] overflow-hidden space-y-24">
      {/* OPEN ACCESS & COPYRIGHT BLOCK */}
      {/* ... existing Open Access and Copyright blocks ... */}

      {/* ARCHIVING POLICY BLOCK */}
      {/* ... existing Archiving block ... */}

      {/* ADVERTISEMENT & MARKETING BLOCK */}
      {/* ... existing Advertisement block ... */}

      {/* JOURNAL HISTORY BLOCK */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
        <div>
          <h3 className="text-3xl font-bold text-cyan-800 mb-6">
            {t("history.title")}
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            {t("history.intro")}
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <Calendar className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("history.points.firstPublished")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Activity className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("history.points.status")}</span>
            </li>
            <li className="flex items-start gap-3">
              <RefreshCcw className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("history.points.frequency")}</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("history.points.type")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("history.points.language")}</span>
            </li>
          </ul>

          <div className="mt-8 space-y-4">
            <h4 className="text-2xl font-semibold text-cyan-700 flex items-center gap-2">
              <BookOpen className="w-6 h-6" /> {t("history.currentTitle")}
            </h4>
            <p className="text-gray-600">
              {t("history.currentName")}
            </p>

            <h4 className="text-2xl font-semibold text-cyan-700 flex items-center gap-2 mt-6">
              <Bookmark className="w-6 h-6" /> {t("history.formerTitle")}
            </h4>
            <p className="text-gray-600">
              {t("history.formerName")}
            </p>

            <div className="mt-8 border-t pt-6 space-y-3">
              <p className="text-gray-700">
                {t("history.additional")}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t("history.addPoints.rebranding")}</li>
                <li>{t("history.addPoints.editorialGrowth")}</li>
                <li>{t("history.addPoints.globalReach")}</li>
                <li>{t("history.addPoints.digitalIndexing")}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* No image version */}
        <div className="relative p-8 rounded-2xl bg-cyan-50 shadow-inner" data-aos="fade-left">
          <h4 className="text-xl font-semibold text-cyan-800 mb-4">{t("history.timeline.title")}</h4>
          <ul className="space-y-4 text-cyan-900">
            <li>
              <strong>2006:</strong> {t("history.timeline.founded")}
            </li>
            <li>
              <strong>2015:</strong> {t("history.timeline.openAccess")}
            </li>
            <li>
              <strong>2019:</strong> {t("history.timeline.renamed")}
            </li>
            <li>
              <strong>2023:</strong> {t("history.timeline.indexing")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
