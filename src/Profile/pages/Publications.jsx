// src/PublicationsContent.js
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText, PlusCircle } from 'lucide-react';

const PublicationsContent = () => {
  const { t } = useTranslation();

  const publications = [
    { id: 1, titleKey: 'publication_gene_editing_title', authors: 'Новак Е.А., Петров И.С.', journal: 'Nature Biotechnology', year: 2024, link: '#' },
    { id: 2, titleKey: 'publication_soil_microbes_title', authors: 'Коваль С.Д., Смирнова А.В.', journal: 'Applied Microbiology', year: 2023, link: '#' },
    { id: 3, titleKey: 'publication_nanoparticle_delivery_title', authors: 'Иванова К.П., Захаров О.А.', journal: 'Journal of Nanomedicine', year: 2024, link: '#' },
  ];

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
        <FileText size={32} className="mr-3 text-brand-blue" />
        {t('publications')}
      </h1>
      <p className="text-slate-600 mb-8 text-lg">
        {t('publications_overview_description')}
      </p>

      <motion.button
          className="flex items-center bg-blue-700 text-white py-2.5 px-5 rounded-xl font-medium shadow-md hover:bg-indigo-500 transition-colors duration-200 whitespace-nowrap mb-8"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
      >
          <PlusCircle size={18} className="mr-2" /> {t('add_new_publication')}
      </motion.button>

      {publications.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {publications.map(pub => (
            <motion.div key={pub.id} variants={itemFadeIn}
              className="bg-white p-6 rounded-3xl shadow-soft border border-transparent flex flex-col"
              whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', borderColor: 'rgba(99, 102, 241, 0.4)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h3 className="font-bold text-slate-800 text-xl mb-2">{t(pub.titleKey)}</h3>
              <p className="text-sm text-slate-500 mb-1">
                <span className="font-semibold">{t('authors')}:</span> {pub.authors}
              </p>
              <p className="text-sm text-slate-500 mb-3">
                <span className="font-semibold">{t('journal')}:</span> {pub.journal}, {pub.year}
              </p>
              <a href={pub.link} target="_blank" rel="noopener noreferrer"
                 className="text-brand-blue hover:underline text-sm mt-auto">
                {t('view_publication')}
              </a>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-slate-500 py-10 text-lg"
        >
          {t('no_publications_found')}
        </motion.div>
      )}
    </motion.div>
  );
};

export default PublicationsContent;