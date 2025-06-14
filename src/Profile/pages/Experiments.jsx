import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Для мультиязычности

import {
  FlaskConical,
  Search,
  Filter,
  PlusCircle,
  Dna,
  Sigma,
  Microscope,
  Beaker,
  Atom,
  HeartPulse,
  Puzzle,
  Rocket,
  TestTube,
} from "lucide-react"; // Добавлены новые иконки для разнообразия

// --- MOCK ДАННЫЕ для экспериментов ---
const allExperimentsData = [
  {
    id: "exp_001",
    nameKey: "exp_001_name",
    type: "sequencing",
    statusKey: "successful",
    date: "2025-06-12",
    researcherKey: "elena_novak",
    detailsKey: "exp_001_details",
  },
  {
    id: "exp_002",
    nameKey: "exp_002_name",
    type: "pcr",
    statusKey: "requires_review",
    date: "2025-06-11",
    researcherKey: "ivan_petrov",
    detailsKey: "exp_002_details",
  },
  {
    id: "exp_003",
    nameKey: "exp_003_name",
    type: "microscopy",
    statusKey: "successful",
    date: "2025-06-09",
    researcherKey: "elena_novak",
    detailsKey: "exp_003_details",
  },
  {
    id: "exp_004",
    nameKey: "exp_004_name",
    type: "sequencing",
    statusKey: "in_progress",
    date: "2025-06-08",
    researcherKey: "sergey_koval",
    detailsKey: "exp_004_details",
  },
  {
    id: "exp_005",
    nameKey: "exp_005_name",
    type: "biochemistry",
    statusKey: "successful",
    date: "2025-06-07",
    researcherKey: "elena_novak",
    detailsKey: "exp_005_details",
  },
  {
    id: "exp_006",
    nameKey: "exp_006_name",
    type: "genetics",
    statusKey: "in_progress",
    date: "2025-06-05",
    researcherKey: "elena_novak",
    detailsKey: "exp_006_details",
  },
  {
    id: "exp_007",
    nameKey: "exp_007_name",
    type: "biochemistry",
    statusKey: "successful",
    date: "2025-06-04",
    researcherKey: "marina_sokolova",
    detailsKey: "exp_007_details",
  },
  {
    id: "exp_008",
    កាលបរិច្ឆេទ: "2025-06-03",
    researcherKey: "dmitry_volkov",
    detailsKey: "exp_008_details",
  },
  {
    id: "exp_009",
    nameKey: "exp_009_name",
    type: "cell_biology",
    statusKey: "requires_review",
    date: "2025-06-02",
    researcherKey: "olga_kuznetsova",
    detailsKey: "exp_009_details",
  },
  {
    id: "exp_010",
    nameKey: "exp_010_name",
    type: "materials_science",
    statusKey: "successful",
    date: "2025-06-01",
    researcherKey: "artem_lebedev",
    detailsKey: "exp_010_details",
  },
  {
    id: "exp_011",
    nameKey: "exp_011_name",
    type: "genetics",
    statusKey: "in_progress",
    date: "2025-05-30",
    researcherKey: "elena_novak",
    detailsKey: "exp_011_details",
  },
  {
    id: "exp_012",
    nameKey: "exp_012_name",
    type: "microscopy",
    statusKey: "successful",
    date: "2025-05-29",
    researcherKey: "ivan_petrov",
    detailsKey: "exp_012_details",
  },
  {
    id: "exp_013",
    nameKey: "exp_013_name",
    type: "microbiology",
    statusKey: "requires_review",
    date: "2025-05-28",
    researcherKey: "sergey_koval",
    detailsKey: "exp_013_details",
  },
  {
    id: "exp_014",
    nameKey: "exp_014_name",
    type: "bioinformatics",
    statusKey: "in_progress",
    date: "2025-05-27",
    researcherKey: "artem_lebedev",
    detailsKey: "exp_014_details",
  },
  {
    id: "exp_015",
    nameKey: "exp_015_name",
    type: "diagnostics",
    statusKey: "successful",
    date: "2025-05-26",
    researcherKey: "marina_sokolova",
    detailsKey: "exp_015_details",
  },
  {
    id: "exp_016",
    nameKey: "exp_016_name",
    type: "ecology",
    statusKey: "in_progress",
    date: "2025-05-25",
    researcherKey: "olga_kuznetsova",
    detailsKey: "exp_016_details",
  },
  {
    id: "exp_017",
    nameKey: "exp_017_name",
    type: "agriculture",
    statusKey: "successful",
    date: "2025-05-24",
    researcherKey: "dmitry_volkov",
    detailsKey: "exp_017_details",
  },
  {
    id: "exp_018",
    nameKey: "exp_018_name",
    type: "cell_biology",
    statusKey: "in_progress",
    date: "2025-05-23",
    researcherKey: "elena_novak",
    detailsKey: "exp_018_details",
  },
  {
    id: "exp_019",
    nameKey: "exp_019_name",
    type: "genetics",
    statusKey: "successful",
    date: "2025-05-22",
    researcherKey: "ivan_petrov",
    detailsKey: "exp_019_details",
  },
  {
    id: "exp_020",
    nameKey: "exp_020_name",
    type: "microbiology",
    statusKey: "in_progress",
    date: "2025-05-21",
    researcherKey: "sergey_koval",
    detailsKey: "exp_020_details",
  },
];

const ExperimentDetailCard = ({ experiment }) => {
  const { t } = useTranslation();
  const iconMap = {
    sequencing: <Dna className="text-purple-600" />,
    pcr: <Sigma className="text-orange-600" />,
    microscopy: <Microscope className="text-blue-600" />,
    biochemistry: <Beaker className="text-red-600" />,
    genetics: <Atom className="text-green-600" />,
    virology: <HeartPulse className="text-pink-600" />,
    cell_biology: <Puzzle className="text-teal-600" />,
    materials_science: <Rocket className="text-gray-600" />,
    microbiology: <TestTube className="text-yellow-600" />,
    bioinformatics: <Sigma className="text-indigo-600" />,
    diagnostics: <Search className="text-cyan-600" />,
    ecology: <FlaskConical className="text-lime-600" />,
    agriculture: <TestTube className="text-amber-600" />,
    other: <Beaker className="text-gray-600" />,
  };
  const statusColors = {
    successful: "bg-green-100 text-green-700 border-green-200",
    requires_review: "bg-yellow-100 text-yellow-700 border-yellow-200",
    in_progress: "bg-blue-100 text-blue-700 border-blue-200",
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-3xl shadow-lg border border-transparent cursor-pointer flex flex-col h-full overflow-hidden mt-[74px]"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 12px 25px rgba(0, 0, 0, 0.15)",
        borderColor: "rgba(59, 130, 246, 0.6)",
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <motion.div
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 text-2xl mr-3 flex-shrink-0"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {iconMap[experiment.type] || <Beaker className="text-gray-600" />}
          </motion.div>
          <h3 className="font-bold text-slate-800 text-lg leading-snug flex-grow">
            {t(experiment.nameKey)}
          </h3>
        </div>
        <motion.span
          className={`flex items-center text-xs font-semibold px-3 py-1AudiobufferSourceNode.5 rounded-full ${statusColors[experiment.statusKey]} whitespace-nowrap ml-4`}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {t(experiment.statusKey)}
        </motion.span>
      </div>
      <p className="text-sm text-slate-500 mb-4 flex-grow line-clamp-3 overflow-hidden">
        {t(experiment.detailsKey)}
      </p>
      <div className="flex justify-between items-center text-xs text-slate-400 mt-auto pt-2 border-t border-slate-100">
        <span className="flex items-center">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {t("researcher")}:
          </motion.span>
          <strong className="ml-1 text-slate-600">
            {t(experiment.researcherKey)}
          </strong>
        </span>
        <span className="flex items-center">
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {t("date")}:
          </motion.span>
          <strong className="ml-1 text-slate-600">{experiment.date}</strong>
        </span>
      </div>
    </motion.div>
  );
};

const ExperimentsContent = ({ onAddNewExperiment }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // 'all', 'successful', 'in_progress', 'requires_review'
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8; // 8 карточек на страницу

  const filteredExperiments = allExperimentsData.filter((exp) => {
    const matchesSearch =
      t(exp.nameKey).toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(exp.detailsKey).toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(exp.researcherKey).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || exp.statusKey === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredExperiments.length / ITEMS_PER_PAGE);

  // Get current experiments for the page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentExperiments = filteredExperiments.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Reset page to 1 if filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterStatus]);

  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const inputButtonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.3 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-slate-900 mb-4 flex items-center"
        variants={headerVariants}
      >
        <FlaskConical size={38} className="mr-3 text-blue-600" />
        {t("experiments")}
      </motion.h1>
      <motion.p
        className="text-slate-600 mb-8 text-lg max-w-2xl"
        variants={headerVariants}
      >
        {t("experiments_overview_description")}
      </motion.p>

      {/* Поиск и фильтры */}
      <div className="flex flex-wrap gap-4 mb-10 items-center">
        <motion.div
          className="relative flex-grow"
          variants={inputButtonVariants}
        >
          <input
            type="text"
            placeholder={t("search_experiments_placeholder")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-3 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 shadow-sm text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
        </motion.div>
        <motion.div className="relative" variants={inputButtonVariants}>
          <select
            className="appearance-none pr-10 pl-4 py-2.5 rounded-xl border border-slate-200 focus:ring-3 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 shadow-sm bg-white text-base"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">{t("all_statuses")}</option>
            <option value="successful">{t("successful")}</option>
            <option value="in_progress">{t("in_progress")}</option>
            <option value="requires_review">{t("requires_review")}</option>
          </select>
          <Filter
            size={20}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </motion.div>
        <motion.button
          className="flex items-center bg-blue-600 text-white py-2.5 px-6 rounded-xl font-medium shadow-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap text-base"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
          }}
          whileTap={{ scale: 0.97 }}
          variants={inputButtonVariants}
          onClick={onAddNewExperiment}
        >
          <PlusCircle size={18} className="mr-2" /> {t("add_new_experiment")}
        </motion.button>
      </div>

      {currentExperiments.length > 0 ? (
        <>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {currentExperiments.map((exp) => (
              <motion.div key={exp.id} variants={itemFadeIn}>
                <ExperimentDetailCard experiment={exp} />
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              <motion.button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ←
              </motion.button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <motion.button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      currentPage === page
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {page}
                  </motion.button>
                )
              )}
              <motion.button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                →
              </motion.button>
            </div>
          )}
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-slate-500 py-10 text-xl font-medium"
        >
          {t("no_experiments_found")}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExperimentsContent;