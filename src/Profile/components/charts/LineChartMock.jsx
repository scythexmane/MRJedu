import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LineChartMock = ({ data }) => {
  const { t } = useTranslation();
  const monthLabelsKeys = ["january_short", "february_short", "march_short", "april_short", "may_short", "june_short"];

  const maxVal = Math.max(...data.datasets[0].data);
  const minVal = 0; // Start y-axis from 0
  const range = maxVal - minVal;
  const padding = 20;
  const svgWidth = 400;
  const svgHeight = 250;
  const chartHeight = svgHeight - 2 * padding;
  const chartWidth = svgWidth - 2 * padding;

  const points = data.datasets[0].data
    .map((val, i) => {
      const x = padding + (i / (data.datasets[0].data.length - 1)) * chartWidth;
      const y = padding + chartHeight - ((val - minVal) / range) * chartHeight;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full">
      <motion.polyline fill="none" stroke={data.datasets[0].borderColor} strokeWidth="3" vectorEffect="non-scaling-stroke" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} points={points}/>
      {data.datasets[0].data.map((val, i) => {
        const x = padding + (i / (data.datasets[0].data.length - 1)) * chartWidth;
        const y = padding + chartHeight - ((val - minVal) / range) * chartHeight;
        return (
          <motion.circle key={i} cx={x} cy={y} r="5" fill="#6366f1" stroke="#fff" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: i * 0.1 }}/>
        );
      })}
      {monthLabelsKeys.map((labelKey, i) => {
        const x = padding + (i / (monthLabelsKeys.length - 1)) * chartWidth;
        return (
          <text key={labelKey} x={x} y={svgHeight - padding / 2} textAnchor="middle" fontSize="12" fill="#64748b">{t(labelKey)}</text>
        );
      })}
    </svg>
  );
};

export default LineChartMock;