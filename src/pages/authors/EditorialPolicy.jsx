import React from "react";
import {
  Languages,
  ClipboardCheck,
  Ban,
  Users,
  ShieldCheck,
  FileSearch,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function EditorialPolicy() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F8F8FF] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left: Text content */}
        <div className="flex-1">
          <h2 className="text-4xl font-semibold text-gray-800 mb-10 text-center lg:text-left">
            {t("editorialPolicy.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Languages className="text-indigo-500 w-6 h-6" />
                <h3 className="text-lg font-semibold text-gray-700">
                  {t("editorialPolicy.languageRequirements")}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {t("editorialPolicy.languageDescription")}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <ClipboardCheck className="text-teal-500 w-6 h-6" />
                <h3 className="text-lg font-semibold text-gray-700">
                  {t("editorialPolicy.editingSupport")}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {t("editorialPolicy.editingDescription")}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="text-rose-500 w-6 h-6" />
                <h3 className="text-lg font-semibold text-gray-700">
                  {t("editorialPolicy.ethicsOriginality")}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {t("editorialPolicy.ethicsDescription")}
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Ban className="text-red-500 w-6 h-6" />
                <h3 className="text-lg font-semibold text-gray-700">
                  {t("editorialPolicy.noDualSubmission")}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {t("editorialPolicy.dualSubmissionDescription")}
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-blue-500 w-6 h-6" />
                <h3 className="text-lg font-semibold text-gray-700">
                  {t("editorialPolicy.peerReview")}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {t("editorialPolicy.peerReviewDescription")}
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <FileSearch className="text-yellow-500 w-6 h-6" />
                <h3 className="text-lg font-semibold text-gray-700">
                  {t("editorialPolicy.submissionID")}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {t("editorialPolicy.submissionIDDescription")}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <img
            src="https://truthfulreporting.org/wp-content/uploads/2023/03/fbe347cd-8c19-4386-8ff8-3b0482540ef7.jpeg"
            alt="Editorial Policy Illustration"
            className="rounded-xl shadow-lg max-w-full lg:max-w-[360px] object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
