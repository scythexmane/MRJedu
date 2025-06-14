import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const PieChartMock = ({ data }) => {
  const { t } = useTranslation();
  const cx = 125;
  const cy = 125;
  const radius = 100;
  let startAngle = -90; // Start from top

  const typeLabelsKeys = ["sequencing", "pcr", "microscopy", "other"];

  return (
    <svg viewBox="0 0 250 250" className="w-full h-full">
      {data.datasets[0].data.map((percentage, i) => {
        const angle = (percentage / 100) * 360;
        const endAngle = startAngle + angle;

        const x1 = cx + radius * Math.cos((Math.PI * startAngle) / 180);
        const y1 = cy + radius * Math.sin((Math.PI * startAngle) / 180);
        const x2 = cx + radius * Math.cos((Math.PI * endAngle) / 180);
        const y2 = cy + radius * Math.sin((Math.PI * endAngle) / 180);

        const largeArcFlag = angle > 180 ? 1 : 0;
        const pathData = `M ${cx},${cy} L ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`;
        const color = data.datasets[0].backgroundColor[i];
        
        const currentStartAngle = startAngle;
        startAngle = endAngle;

        return (
          <g key={i}>
            <motion.path d={pathData} fill={color} initial={{ scale: 0, opacity: 0, originX: '125px', originY: '125px' }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }} whileHover={{ opacity: 0.8 }}/>
            <text x={cx + radius * 0.7 * Math.cos((Math.PI * (currentStartAngle + angle / 2)) / 180)} y={cy + radius * 0.7 * Math.sin((Math.PI * (currentStartAngle + angle / 2)) / 180)} textAnchor="middle" alignmentBaseline="middle" fill="white" fontSize="12" fontWeight="bold">
              {t(typeLabelsKeys[i])}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default PieChartMock;