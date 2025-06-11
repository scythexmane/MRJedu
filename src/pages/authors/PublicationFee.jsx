import React from "react";
import { useTranslation } from "react-i18next";

export default function ArticleProcessingFee() {
  const { t } = useTranslation();

  const journals = [
    { issn: "1305-8223", name: "Eurasia Journal of Mathematics, Science and Technology Education", fee: "€1390" },
    { issn: "2516-3507", name: "Electronic Journal of General Medicine", fee: "€1200 " + t("articleFee.type1") + ", €600 " + t("articleFee.type2") },
    { issn: "2542-4742", name: "European Journal of Sustainable Development Research", fee: "€450 " + t("articleFee.discount", { date: "June 30, 2025", newFee: "€250" }) },
    { issn: "1306-3030", name: "International Electronic Journal of Mathematics Education", fee: "€650 " + t("articleFee.discount", { date: "June 30, 2025", newFee: "€450" }) },
    { issn: "2468-4929", name: "Pedagogical Research", fee: "€250" },
    { issn: "2752-6054", name: "Journal of Mathematics and Science Teacher", fee: t("articleFee.waived", { date: "December 31, 2025", original: "€250" }) },
    { issn: "2754-544X", name: "Electronic Journal of Medical and Educational Technologies", fee: t("articleFee.waived", { date: "December 31, 2025", original: "€250" }) },
    { issn: "2753-2658", name: "Electronic Journal of Medical and Dental Studies", fee: t("articleFee.waived", { date: "December 31, 2025", original: "€250" }) },
    { issn: "2754-091X", name: "Computers and Children", fee: t("articleFee.waived", { date: "December 31, 2025", original: "€250" }) },
    { issn: "2752-647X", name: "Agricultural and Environmental Education", fee: t("articleFee.waived", { date: "December 31, 2025", original: "€250" }) },
    { issn: "2542-4874", name: "Aquademia", fee: t("articleFee.waived", { date: "December 31, 2025", original: "€250" }) },
    { issn: "2633-6537", name: "Interdisciplinary Journal of Environmental and Science Education", fee: "€250" },
    { issn: "1309-6621", name: "Journal of Clinical and Experimental Investigations", fee: "€250 " + t("articleFee.type12") + " " + t("articleFee.waivedUntil", { date: "June 30, 2025" }) },
    { issn: "2634-8543", name: "Journal of Contemporary Studies in Epidemiology and Public Health", fee: t("articleFee.waived", { date: "December 31, 2025", original: "€250" }) },
    { issn: "2542-4904", name: "European Journal of Environment and Public Health", fee: t("articleFee.free") },
    { issn: "2165-8722", name: "European Journal of Health and Biology Education", fee: t("articleFee.free") }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-20 bg-[#F8F8FF] text-gray-900 overflow-hidden">
      <div className="absolute top-20 -left-10 w-[300px] h-[300px] bg-blue-300 opacity-50 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-blue-200 opacity-30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          {t("articleFee.title")}
        </h2>
        <p className="text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          {t("articleFee.description")}
        </p>

        <div className="overflow-x-auto rounded-xl shadow-lg border">
          <table className="w-full min-w-[600px] text-left text-sm font-light">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 whitespace-nowrap">{t("articleFee.issn")}</th>
                <th className="px-4 py-3 whitespace-nowrap">{t("articleFee.journal")}</th>
                <th className="px-4 py-3 whitespace-nowrap">{t("articleFee.fee")}</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {journals.map((journal, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{journal.issn}</td>
                  <td className="px-4 py-3">{journal.name}</td>
                  <td className="px-4 py-3 text-blue-800 font-semibold">{journal.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-sm text-gray-600 text-center">
          <p>* {t("articleFee.note1")}</p>
          <p>** {t("articleFee.note2")}</p>
        </div>
      </div>
    </section>
  );
}
