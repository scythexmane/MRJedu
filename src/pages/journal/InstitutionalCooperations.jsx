import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import {
  Building2,
  Users2
} from "lucide-react";

export default function OpenAccessSection() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-14 py-16 sm:py-20 lg:py-28 bg-[#F8F8FF] overflow-hidden space-y-24">
      {/* === Other blocks here (Open Access, Archiving, etc.) === */}

      {/* =============== INSTITUTIONAL COOPERATION =============== */}
      <div
        className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3 items-start"
        data-aos="fade-up"
      >
        {/* TEXTUAL CONTENT */}
        <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-8">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-cyan-800 mb-4 sm:mb-6 break-words">
              {t("cooperation.title")}
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed break-words">
              {t("cooperation.description")}
            </p>
          </div>

          {/* Partner cards */}
          <div className="space-y-8">
            {/* CYCERE */}
            <div className="flex gap-4">
              <div className="shrink-0">
                <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" />
              </div>
              <div className="break-words">
                <h4 className="font-semibold text-lg sm:text-xl text-cyan-700 mb-1">
                  {t("cooperation.cycere.title")}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-snug">
                  {t("cooperation.cycere.text")}
                </p>
              </div>
            </div>

            {/* CBS */}
            <div className="flex gap-4">
              <div className="shrink-0">
                <Users2 className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" />
              </div>
              <div className="break-words">
                <h4 className="font-semibold text-lg sm:text-xl text-cyan-700 mb-1">
                  {t("cooperation.cbs.title")}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-snug">
                  {t("cooperation.cbs.text")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE + IMPACT CARD WRAPPER */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Responsive Image container with 16:9 ratio */}
          <div
            className="w-full aspect-video bg-cyan-100 rounded-2xl overflow-hidden shadow-md"
            data-aos="zoom-in"
          >
            <img
              src="https://avatars.mds.yandex.net/i?id=c41e2b96402304fcc7f7b16fc580fcaa_l-5869113-images-thumbs&ref=rim&n=13&w=3000&h=2000"
              alt="Environmental education collaboration research biology"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Impact card */}
          <div
            className="bg-cyan-50/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-inner w-full overflow-hidden"
            data-aos="fade-left"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-cyan-800 mb-4 break-words">
              {t("cooperation.impactTitle")}
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base break-words">
              <li>{t("cooperation.impact.education")}</li>
              <li>{t("cooperation.impact.research")}</li>
              <li>{t("cooperation.impact.network")}</li>
              <li>{t("cooperation.impact.sustainability")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}