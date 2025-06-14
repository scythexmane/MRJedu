import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4,
};

const Settings = () => {
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
      <div className="bg-white p-8 rounded-2xl shadow-soft">
        <h1 className="text-4xl font-bold text-slate-900">Настройки</h1>
        <p className="mt-4 text-slate-600">Здесь будет содержимое страницы 'Настройки'.</p>
      </div>
    </motion.div>
  );
};

export default Settings;