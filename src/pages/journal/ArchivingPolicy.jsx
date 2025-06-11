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
  LifeBuoy
} from "lucide-react";

export default function OpenAccessSection() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative px-6 py-20 md:px-10 lg:py-28 bg-[#F8F8FF] overflow-hidden space-y-24">
      {/* OPEN ACCESS & COPYRIGHT BLOCK*/}
      {/* ... existing Open Access and Copyright blocks ... */}

      {/* ARCHIVING POLICY BLOCK */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
        {/* Illustration */}
        <div className="order-last md:order-first" data-aos="fade-right">
          <img
            src="https://cdek-tk.ru/wp-content/uploads/2022/12/agreement.png"
            alt="Rows of secure data servers symbolizing long-term digital preservation and archive redundancy"
            className=" object-cover w-full h-full"
          />
        </div>
        {/* Text */}
        <div>
          <h3 className="text-3xl font-bold text-cyan-800 mb-6">
            {t("archiving.title")}
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            {t("archiving.intro")}
          </p>

          {/* Expanded explanatory section */}
          <h4 className="text-2xl font-semibold text-cyan-700 mb-4">
            {t("archiving.detailsTitle")}
          </h4>
          <p className="text-gray-600 mb-6">
            {t("archiving.details")}
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <Archive className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("archiving.points.portico")}</span>
            </li>
            <li className="flex items-start gap-3">
              <UploadCloud className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("archiving.points.selfArchive")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Server className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("archiving.points.redundancy")}</span>
            </li>
            <li className="flex items-start gap-3">
              <HardDriveDownload className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("archiving.points.versioning")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Layers className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("archiving.points.oaiCompliance")}</span>
            </li>
            <li className="flex items-start gap-3">
              <DatabaseZap className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("archiving.points.secureStorage")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock3 className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("archiving.points.longTerm")}</span>
            </li>
            <li className="flex items-start gap-3">
              <FolderSearch className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("archiving.points.metadata")}</span>
            </li>
            <li className="flex items-start gap-3">
              <LifeBuoy className="text-cyan-600 w-6 h-6 shrink-0" />
              <span>{t("archiving.points.recovery")}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
