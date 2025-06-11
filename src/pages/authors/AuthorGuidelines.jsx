// components/AuthorGuidelines.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { FileText, UploadCloud, Edit, BookOpenCheck, Link as LinkIcon } from "lucide-react";

export default function AuthorGuidelines() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b bg-[#F8F8FF] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-800 mb-10 text-center">
          {t("authorGuidelines.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Manuscript Submission */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <UploadCloud className="text-blue-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-700">{t("authorGuidelines.submission.title")}</h3>
            </div>
            <p className="text-gray-600">
              {t("authorGuidelines.submission.text1")}{" "}
              <a
                href="https://www.editorialpark.com/ijese"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {t("authorGuidelines.submission.portal")}
              </a>
              . {t("authorGuidelines.submission.text2")}
            </p>
          </div>

          {/* Manuscript Preparation */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-green-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-700">{t("authorGuidelines.preparation.title")}</h3>
            </div>
            <p className="text-gray-600">{t("authorGuidelines.preparation.text")}</p>
          </div>

          {/* References & Citations */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <BookOpenCheck className="text-purple-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-700">{t("authorGuidelines.references.title")}</h3>
            </div>
            <p className="text-gray-600">{t("authorGuidelines.references.text")}</p>
          </div>

          {/* Figures & Tables */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Edit className="text-orange-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-700">{t("authorGuidelines.figures.title")}</h3>
            </div>
            <p className="text-gray-600">{t("authorGuidelines.figures.text")}</p>
          </div>

          {/* Final Check & Contact */}
          <div className="md:col-span-2 bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <LinkIcon className="text-pink-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-700">{t("authorGuidelines.final.title")}</h3>
            </div>
            <p className="text-gray-600 mb-2">
              {t("authorGuidelines.final.text1")}{" "}
              <a
                href="mailto:support@editorialpark.com"
                className="text-pink-600 underline hover:text-pink-800"
              >
                support@editorialpark.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
