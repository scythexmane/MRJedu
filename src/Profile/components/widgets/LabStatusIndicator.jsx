import React from 'react';
import { motion } from 'framer-motion';

const LabStatusIndicator = ({ status = "online" }) => {
  const colorMap = {
    online: "bg-green-500",
    busy: "bg-yellow-500",
    offline: "bg-red-500",
  };
  return (
    <div className="relative flex items-center justify-center w-8 h-8">
      <motion.div className={`absolute w-full h-full rounded-full ${colorMap[status]} opacity-30`} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}></motion.div>
      <div className={`w-3 h-3 rounded-full ${colorMap[status]}`}></div>
    </div>
  );
};

export default LabStatusIndicator;