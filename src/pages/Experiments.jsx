// ExperimentsContent.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Для мультиязычности

import {
  FlaskConical, Search, Filter, PlusCircle, Dna, Sigma, Microscope, Beaker
} from 'lucide-react';

// --- MOCK ДАННЫЕ для экспериментов ---
const allExperimentsData = [
  {
    id: 'exp_001',
    name: 'Секвенирование РНК дрожжей',
    type: 'sequencing',
    statusKey: 'successful',
    date: '2025-06-12',
    researcher: 'Елена Новак',
    details: 'Получены высококачественные данные секвенирования, анализ гомологии завершен.'
  },
  {
    id: 'exp_002',
    name: 'ПЦР-диагностика вирусов растений',
    type: 'pcr',
    statusKey: 'requires_review',
    date: '2025-06-11',
    researcher: 'Иван Петров',
    details: 'Обнаружена сильная контаминация образцов, требуется повторная подготовка.'
  },
  {
    id: 'exp_003',
    name: 'Конфокальная микроскопия клеточных культур',
    type: 'microscopy',
    statusKey: 'successful',
    date: '2025-06-09',
    researcher: 'Елена Новак',
    details: 'Получены четкие изображения клеточных структур, подготовка к 3D-реконструкции.'
  },
  {
    id: 'exp_004',
    name: 'Геномное секвенирование бактерий почвы',
    type: 'sequencing',
    statusKey: 'in_progress',
    date: '2025-06-08',
    researcher: 'Сергей Коваль',
    details: 'Идет сбор данных, ожидается завершение через 3 дня.'
  },
  {
    id: 'exp_005',
    name: 'Изучение активности ферментов',
    type: 'other', // Новый тип для примера
    statusKey: 'successful',
    date: '2025-06-07',
    researcher: 'Елена Новак',
    details: 'Определена оптимальная температура и pH для максимальной активности.'
  },
  {
    id: 'exp_006',
    name: 'Клонирование гена интереса',
    type: 'other',
    statusKey: 'in_progress',
    date: '2025-06-05',
    researcher: 'Елена Новак',
    details: 'Этап лигирования и трансформации, проверка колоний.'
  },
];

const ExperimentDetailCard = ({ experiment }) => {
  const { t } = useTranslation();
  const iconMap = {
    sequencing: <Dna className="text-purple-600" />,
    pcr: <Sigma className="text-orange-600" />,
    microscopy: <Microscope className="text-blue-600" />,
    other: <Beaker className="text-gray-600" />,
  };
  const statusColors = {
    'successful': 'bg-green-100 text-green-700 border-green-200',
    'requires_review': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'in_progress': 'bg-blue-100 text-blue-700 border-blue-200',
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-3xl shadow-soft border border-transparent cursor-pointer flex flex-col"
      whileHover={{ 
        scale: 1.02, 
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', 
        borderColor: 'rgba(99, 102, 241, 0.4)' 
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 text-xl mr-3">
            {iconMap[experiment.type]}
          </div>
          <h3 className="font-bold text-slate-800 text-lg">{experiment.name}</h3>
        </div>
        <span className={`flex items-center text-xs font-semibold px-3 py-1.5 rounded-full ${statusColors[experiment.statusKey]}`}>
          {t(experiment.statusKey)}
        </span>
      </div>
      <p className="text-sm text-slate-500 mb-3 flex-grow">{experiment.details}</p>
      <div className="flex justify-between items-center text-xs text-slate-400 mt-auto">
        <span>{t('researcher')}: {experiment.researcher}</span>
        <span>{t('date')}: {experiment.date}</span>
      </div>
    </motion.div>
  );
};


const ExperimentsContent = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'successful', 'in_progress', 'requires_review'

  const filteredExperiments = allExperimentsData.filter(exp => {
    const matchesSearch = exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          exp.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          exp.researcher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || exp.statusKey === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
        <FlaskConical size={32} className="mr-3 text-brand-blue" />
        {t('experiments')}
      </h1>
      <p className="text-slate-600 mb-8 text-lg">
        {t('experiments_overview_description')}
      </p>

      {/* Поиск и фильтры */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder={t('search_experiments_placeholder')}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>

        <div className="relative">
          <select
            className="appearance-none pr-10 pl-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200 shadow-sm bg-white"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">{t('all_statuses')}</option>
            <option value="successful">{t('successful')}</option>
            <option value="in_progress">{t('in_progress')}</option>
            <option value="requires_review">{t('requires_review')}</option>
          </select>
          <Filter size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>

        <motion.button
            className="flex items-center bg-brand-blue text-white py-2.5 px-5 rounded-xl font-medium shadow-md hover:bg-indigo-700 transition-colors duration-200 whitespace-nowrap"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <PlusCircle size={18} className="mr-2" /> {t('add_new_experiment')}
        </motion.button>
      </div>


      {filteredExperiments.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {filteredExperiments.map(exp => (
            <motion.div key={exp.id} variants={itemFadeIn}>
              <ExperimentDetailCard experiment={exp} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-slate-500 py-10 text-lg"
        >
          {t('no_experiments_found')}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExperimentsContent;