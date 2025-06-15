// MyProjectsContent.js
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

import { FolderKanban, CheckCircle, Clock, XCircle, BarChart2, CalendarDays, TrendingUp } from 'lucide-react';

// --- MOCK ДАННЫЕ для проектов (добавлены ключи для перевода) ---
const projectsData = [
  {
    id: 1,
    name: 'Проект "CRISPR-CAS9: Новое поколение"',
    statusKey: 'active',
    progress: 75,
    dueDate: '30 сентября 2025',
    typeKey: 'genomics',
    descriptionKey: 'project_description_crispr'
  },
  {
    id: 2,
    name: 'Анализ микробиома почвы Амазонии',
    statusKey: 'on_pause',
    progress: 40,
    dueDate: '15 августа 2025',
    typeKey: 'microbiology',
    descriptionKey: 'project_description_microbiome'
  },
  {
    id: 3,
    name: 'Разработка наночастиц для доставки лекарств',
    statusKey: 'completed',
    progress: 100,
    dueDate: '20 мая 2025',
    typeKey: 'bioengineering',
    descriptionKey: 'project_description_nanoparticles'
  },
  {
    id: 4,
    name: 'Изучение экспрессии генов при стрессе',
    statusKey: 'active',
    progress: 60,
    dueDate: '10 октября 2025',
    typeKey: 'molecular_biology',
    descriptionKey: 'project_description_gene_expression'
  },
];

const ProjectCard = ({ project }) => {
  const { t } = useTranslation(); // Используем хук перевода

  const statusColors = {
    'active': 'text-green-600 bg-green-100',
    'on_pause': 'text-orange-600 bg-orange-100',
    'completed': 'text-blue-600 bg-blue-100',
  };

  const statusIcons = {
    'active': <CheckCircle size={16} className="mr-1" />,
    'on_pause': <Clock size={16} className="mr-1" />,
    'completed': <XCircle size={16} className="mr-1" />,
  };

  return (
    
    <motion.div
    
      className="bg-white p-6 rounded-3xl shadow-soft border border-transparent cursor-pointer flex flex-col h-full pt-10"
      whileHover={{ 
        scale: 1.02, 
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', 
        borderColor: 'rgba(99, 102, 241, 0.4)' 
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex justify-between items-start mb-4  ">
        <div className="flex items-center">
          <FolderKanban size={24} className="text-brand-blue mr-3" />
          <h3 className="font-bold text-slate-800 text-xl leading-snug"> {project.name}</h3> {/* Название пока не переводим */}
        </div>
        <span className={`flex items-center text-xs font-semibold px-3 py-1.5 rounded-full ${statusColors[project.statusKey]}`}>
          {statusIcons[project.statusKey]}
          {t(project.statusKey)} {/* Перевод статуса */}
        </span>
      </div>
      
      <p className="text-sm text-slate-500 mb-4 flex-grow">{t(project.descriptionKey)}</p> {/* Перевод описания */}

      <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
        <div className="flex items-center">
          <TrendingUp size={16} className="mr-2 text-brand-blue" />
          <span>{t('progress')}: {project.progress}%</span> {/* Перевод "Прогресс" */}
        </div>
        <div className="flex items-center">
          <CalendarDays size={16} className="mr-2 text-slate-500" />
          <span>{t('due_date')}: {project.dueDate}</span> {/* Перевод "Срок" */}
        </div>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <motion.div 
          className="bg-brand-blue h-2 rounded-full" 
          initial={{ width: 0 }} 
          animate={{ width: `${project.progress}%` }} 
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </motion.div>
  );
};

const MyProjectsContent = () => {
  const { t } = useTranslation(); // Используем хук перевода

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
      <h1 className="text-3xl font-bold text-slate-900 mb-6">{t('my_projects')}</h1> {/* Перевод заголовка */}
      <p className="text-slate-600 mb-8 text-lg">
        {t('projects_overview')} {/* Перевод описания */}
      </p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {projectsData.map(project => (
          <motion.div key={project.id} variants={itemFadeIn}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MyProjectsContent;