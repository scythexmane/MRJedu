// ExperimentsContent.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Для мультиязычности

import {
  FlaskConical, Search, Filter, PlusCircle, Dna, Sigma, Microscope, Beaker, Atom, HeartPulse, Puzzle, Rocket, TestTube
} from 'lucide-react'; // Добавлены новые иконки для разнообразия

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
    type: 'biochemistry', // Изменен тип
    statusKey: 'successful',
    date: '2025-06-07',
    researcher: 'Елена Новак',
    details: 'Определена оптимальная температура и pH для максимальной активности.'
  },
  {
    id: 'exp_006',
    name: 'Клонирование гена интереса',
    type: 'genetics', // Изменен тип
    statusKey: 'in_progress',
    date: '2025-06-05',
    researcher: 'Елена Новак',
    details: 'Этап лигирования и трансформации, проверка колоний.'
  },
  // --- Дополнительные 10+ карточек ---
  {
    id: 'exp_007',
    name: 'Анализ экспрессии белков методом Вестерн-блоттинга',
    type: 'biochemistry',
    statusKey: 'successful',
    date: '2025-06-04',
    researcher: 'Марина Соколова',
    details: 'Подтверждена экспрессия целевого белка, данные готовы для публикации.'
  },
  {
    id: 'exp_008',
    name: 'Разработка новой вакцины против гриппа',
    type: 'virology',
    statusKey: 'in_progress',
    date: '2025-06-03',
    researcher: 'Дмитрий Волков',
    details: 'Тестирование прототипов вакцины на животных моделях.'
  },
  {
    id: 'exp_009',
    name: 'Исследование цитотоксичности новых лекарств',
    type: 'cell_biology',
    statusKey: 'requires_review',
    date: '2025-06-02',
    researcher: 'Ольга Кузнецова',
    details: 'Обнаружены неожиданные побочные эффекты, требуется повторная оценка дозировок.'
  },
  {
    id: 'exp_010',
    name: 'Синтез наноматериалов для биомедицины',
    type: 'materials_science',
    statusKey: 'successful',
    date: '2025-06-01',
    researcher: 'Артем Лебедев',
    details: 'Получены наночастицы с заданными свойствами, начата характеризация.'
  },
  {
    id: 'exp_011',
    name: 'Оптимизация протокола экстракции ДНК из растений',
    type: 'genetics',
    statusKey: 'in_progress',
    date: '2025-05-30',
    researcher: 'Елена Новак',
    details: 'Проводятся эксперименты с различными буферами и температурами.'
  },
  {
    id: 'exp_012',
    name: 'Иммунофлуоресцентное окрашивание нейронов',
    type: 'microscopy',
    statusKey: 'successful',
    date: '2025-05-29',
    researcher: 'Иван Петров',
    details: 'Получены высококонтрастные изображения нейронных сетей.'
  },
  {
    id: 'exp_013',
    name: 'Скрининг антибиотиков на новые штаммы бактерий',
    type: 'microbiology',
    statusKey: 'requires_review',
    date: '2025-05-28',
    researcher: 'Сергей Коваль',
    details: 'Выявлена устойчивость к нескольким препаратам, необходим дальнейший анализ.'
  },
  {
    id: 'exp_014',
    name: 'Моделирование молекулярных взаимодействий',
    type: 'bioinformatics',
    statusKey: 'in_progress',
    date: '2025-05-27',
    researcher: 'Артем Лебедев',
    details: 'Идет расчет связывания лиганда с рецептором, ожидается 48 часов.'
  },
  {
    id: 'exp_015',
    name: 'Разработка экспресс-теста на аллергены',
    type: 'diagnostics',
    statusKey: 'successful',
    date: '2025-05-26',
    researcher: 'Марина Соколова',
    details: 'Прототип теста показывает высокую чувствительность и специфичность.'
  },
  {
    id: 'exp_016',
    name: 'Изучение влияния микропластика на водные организмы',
    type: 'ecology',
    statusKey: 'in_progress',
    date: '2025-05-25',
    researcher: 'Ольга Кузнецова',
    details: 'Начаты долгосрочные наблюдения за поведением и здоровьем рыб.'
  },
  {
    id: 'exp_017',
    name: 'Оценка эффективности нового биопестицида',
    type: 'agriculture',
    statusKey: 'successful',
    date: '2025-05-24',
    researcher: 'Дмитрий Волков',
    details: 'Показал высокую эффективность против вредителей без вреда для полезных насекомых.'
  },
];

const ExperimentDetailCard = ({ experiment }) => {
  const { t } = useTranslation();
  const iconMap = {
    sequencing: <Dna className="text-purple-600" />,
    pcr: <Sigma className="text-orange-600" />,
    microscopy: <Microscope className="text-blue-600" />,
    biochemistry: <Beaker className="text-red-600" />, // Новый цвет
    genetics: <Atom className="text-green-600" />, // Новая иконка и цвет
    virology: <HeartPulse className="text-pink-600" />, // Новая иконка и цвет
    cell_biology: <Puzzle className="text-teal-600" />, // Новая иконка и цвет
    materials_science: <Rocket className="text-gray-600" />, // Новая иконка и цвет
    microbiology: <TestTube className="text-yellow-600" />, // Новая иконка и цвет
    bioinformatics: <Sigma className="text-indigo-600" />, // Переиспользование иконки
    diagnostics: <Search className="text-cyan-600" />, // Переиспользование иконки
    ecology: <FlaskConical className="text-lime-600" />, // Переиспользование иконки
    agriculture: <TestTube className="text-amber-600" />, // Переиспользование иконки
    other: <Beaker className="text-gray-600" />,
  };
  const statusColors = {
    'successful': 'bg-green-100 text-green-700 border-green-200',
    'requires_review': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'in_progress': 'bg-blue-100 text-blue-700 border-blue-200',
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-3xl shadow-lg border border-transparent cursor-pointer flex flex-col h-full overflow-hidden" // Увеличил shadow, добавил h-full overflow-hidden
      whileHover={{
        scale: 1.03, // Немного увеличенный масштаб
        boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)', // Более выраженная тень
        borderColor: 'rgba(59, 130, 246, 0.6)' // Ярче синий бордер при наведении
      }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }} // Более пружинистая анимация
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <motion.div
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 text-2xl mr-3"
            whileHover={{ rotate: 10, scale: 1.1 }} // Анимация иконки при наведении на карточку
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            {iconMap[experiment.type] || <Beaker className="text-gray-600" />} {/* Fallback icon */}
          </motion.div>
          <h3 className="font-bold text-slate-800 text-lg leading-snug">{experiment.name}</h3>
        </div>
        <motion.span
          className={`flex items-center text-xs font-semibold px-3 py-1.5 rounded-full ${statusColors[experiment.statusKey]} whitespace-nowrap`}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {t(experiment.statusKey)}
        </motion.span>
      </div>
      <p className="text-sm text-slate-500 mb-4 flex-grow line-clamp-3">{experiment.details}</p> {/* Ограничение по строкам */}
      <div className="flex justify-between items-center text-xs text-slate-400 mt-auto pt-2 border-t border-slate-100"> {/* Добавил border-top */}
        <span className="flex items-center">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {t('researcher')}:
          </motion.span>
          <strong className="ml-1 text-slate-600">{experiment.researcher}</strong>
        </span>
        <span className="flex items-center">
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {t('date')}:
          </motion.span>
          <strong className="ml-1 text-slate-600">{experiment.date}</strong>
        </span>
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
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }, // Немного ускорил
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 30 }, // Увеличил смещение
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 15 } }, // Изменил параметры пружины
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const inputButtonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.3 } }
  };


  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.1 } } }} // Для общей анимации элементов на странице
    >
      <motion.h1
        className="text-4xl font-extrabold text-slate-900 mb-4 flex items-center" // Сделал больше и жирнее
        variants={headerVariants}
      >
        <FlaskConical size={38} className="mr-3 text-blue-600" /> {/* Цвет иконки как у кнопок */}
        {t('experiments')}
      </motion.h1>
      <motion.p
        className="text-slate-600 mb-8 text-lg max-w-2xl"
        variants={headerVariants}
      >
        {t('experiments_overview_description')}
      </motion.p>

      {/* Поиск и фильтры */}
      <div className="flex flex-wrap gap-4 mb-10 items-center"> {/* Увеличил mb, выровнял по центру */}
        <motion.div
          className="relative flex-grow"
          variants={inputButtonVariants}
        >
          <input
            type="text"
            placeholder={t('search_experiments_placeholder')}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-3 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 shadow-sm text-base" // Увеличил padding, ring-3, shadow
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        </motion.div>

        <motion.div
          className="relative"
          variants={inputButtonVariants}
        >
          <select
            className="appearance-none pr-10 pl-4 py-2.5 rounded-xl border border-slate-200 focus:ring-3 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 shadow-sm bg-white text-base" // Увеличил padding, ring-3, shadow
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">{t('all_statuses')}</option>
            <option value="successful">{t('successful')}</option>
            <option value="in_progress">{t('in_progress')}</option>
            <option value="requires_review">{t('requires_review')}</option>
          </select>
          <Filter size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </motion.div>

        <motion.button
          className="flex items-center bg-blue-600 text-white py-2.5 px-6 rounded-xl font-medium shadow-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap text-base" // Изменен цвет на blue-600, увеличен padding, shadow
          whileHover={{ scale: 1.03, boxShadow: '0 5px 15px rgba(59, 130, 246, 0.4)' }} // Добавил тень при наведении
          whileTap={{ scale: 0.97 }}
          variants={inputButtonVariants}
        >
          <PlusCircle size={18} className="mr-2" /> {t('add_new_experiment')}
        </motion.button>
      </div>


      {filteredExperiments.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" // Добавил xl-колонки для больших экранов
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-slate-500 py-10 text-xl font-medium" // Увеличил размер текста
        >
          {t('no_experiments_found')}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExperimentsContent;