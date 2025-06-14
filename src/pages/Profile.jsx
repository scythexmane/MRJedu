// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next"; // Импортируем useTranslation

// import {
//   LayoutDashboard,
//   FlaskConical,
//   FolderKanban,
//   CalendarDays,
//   FileText,
//   Settings,
//   LogOut,
//   Upload,
//   Beaker,
//   Dna,
//   Microscope,
//   Users,
//   ChevronLeft,
//   ChevronRight,
//   Bell,
//   Clock,
//   ClipboardCheck,
//   Thermometer,
//   Menu,
//   X,
//   Sigma,
//   PlusCircle,
//   BarChart,
//   PieChart,
//   Globe, // Иконка для выбора языка
// } from "lucide-react";

// // --- Импортируем новый компонент ---
// import MyProjectsContent from "./MyProjects";
// import ExperimentsContent from "./Experiments";
// import EventsContent from "./Events"; // Добавьте
// import PublicationsContent from "./Publication"; // Добавьте
// import SettingsContent from "./Setting"; // Добавьте
// import { useAuth } from "./AuthContext";
// // --- MOCK ДАННЫЕ (расширены) ---
// const userData = {
//   status: "Исследователь",
//   avatar:
//     "https://images.unsplash.com/photo-1571844090333-4a736592eda4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
// };

// const navItems = [
//   { id: "dashboard", icon: LayoutDashboard, labelKey: "dashboard" }, // labelKey для перевода
//   { id: "my-projects", icon: FolderKanban, labelKey: "my_projects" },
//   { id: "experiments", icon: FlaskConical, labelKey: "experiments" },
//   { id: "events", icon: CalendarDays, labelKey: "events" },
//   { id: "publications", icon: FileText, labelKey: "publications" },
//   { id: "settings", icon: Settings, labelKey: "settings" },
// ];

// const recentExperiments = [
//   {
//     id: 1,
//     type: "sequencing",
//     name: "Секвенирование РНК",
//     resultKey: "Данные обработаны",
//     date: "12 июня 2025",
//     statusKey: "successful",
//   },
//   {
//     id: 2,
//     type: "pcr",
//     name: "ПЦР-тестирование",
//     resultKey: "Обнаружена контаминация",
//     date: "11 июня 2025",
//     statusKey: "requires_review",
//   },
//   {
//     id: 3,
//     type: "microscopy",
//     name: "Конфокальная микроскопия",
//     resultKey: "Изображения сохранены",
//     date: "09 июня 2025",
//     statusKey: "successful",
//   },
//   {
//     id: 4,
//     type: "sequencing",
//     name: "Геномное секвенирование",
//     resultKey: "Начальный анализ",
//     date: "08 июня 2025",
//     statusKey: "in_progress",
//   },
//   {
//     id: 5,
//     type: "pcr",
//     name: "qPCR анализ",
//     resultKey: "Ожидание результатов",
//     date: "07 июня 2025",
//     statusKey: "in_progress",
//   },
// ];

// const nextEventData = {
//   titleKey: "next_event", // Для перевода
//   date: "14 июня 2025, 11:00",
//   description: 'Встреча по проекту "CRISPR-CAS9"',
//   participants: 'Команда "Геномика"',
//   icon: <Users size={14} className="mr-1.5" />,
//   typeKey: "meeting", // Для перевода
// };

// const remindersData = [
//   {
//     icon: <Thermometer className="text-red-500" />,
//     textKey: "run_incubator",
//     time: "09:00",
//   },
//   {
//     icon: <ClipboardCheck className="text-green-500" />,
//     textKey: "check_cultures",
//     time: "15:00",
//   },
//   {
//     icon: <Clock className="text-blue-500" />,
//     textKey: "submit_conference_abstracts",
//     time: "23:59",
//   },
// ];

// const researchProgressData = {
//   titleKey: "project_progress", // Для перевода
//   goal: "Этап 2: Анализ данных секвенирования", // Пока оставим здесь, можно тоже перевести
//   progress: 60,
// };

// const monthlyActivityData = {
//   // labels будут переводиться в компоненте LineChartMock
//   datasets: [
//     {
//       labelKey: "Количество экспериментов", // Этот label можно не переводить, если график не нуждается в легенде с переводом
//       data: [10, 15, 8, 20, 12, 25], // Фиктивные данные
//       borderColor: "#6366f1",
//       backgroundColor: "rgba(99, 102, 241, 0.2)",
//       tension: 0.4,
//       pointBackgroundColor: "#6366f1",
//       pointBorderColor: "#fff",
//       pointHoverBackgroundColor: "#fff",
//       pointHoverBorderColor: "#6366f1",
//     },
//   ],
// };

// const experimentTypeDistribution = {
//   // labels будут переводиться в компоненте PieChartMock
//   datasets: [
//     {
//       data: [35, 30, 20, 15], // Фиктивные данные в процентах
//       backgroundColor: ["#6366f1", "#f97316", "#3b82f6", "#a855f7"],
//       hoverOffset: 10,
//     },
//   ],
// };

// // --- КОМПОНЕНТЫ ИНТЕРФЕЙСА (модифицированы/добавлены) ---

// // NavItem теперь принимает labelKey
// const NavItem = ({ icon: Icon, labelKey, id, activeContent, onClick }) => {
//   const { t } = useTranslation(); // Используем хук перевода
//   return (
//     <motion.a
//       href="#"
//       className={`flex items-center px-4 py-2.5 rounded-lg transition-colors duration-200 ${
//         activeContent === id
//           ? "bg-brand-blue text-black shadow-sm"
//           : "text-slate-600 hover:bg-slate-200/80 hover:text-black"
//       }`}
//       whileHover={{ x: 5 }}
//       transition={{ type: "spring", stiffness: 300 }}
//       onClick={() => onClick(id)}
//     >
//       <Icon size={50} className="mr-3" />
//       <span className="font-medium">{t(labelKey)}</span>{" "}
//       {/* Используем t() для перевода */}
//     </motion.a>
//   );
// };

// // Sidebar теперь принимает useTranslation
// const Sidebar = ({ isOpen, activeContent, setActiveContent }) => {
//   const { t } = useTranslation();
//   const { user, logout } = useAuth();
//   return (
//     <motion.aside
//       initial={{ x: "-100%" }}
//       animate={{ x: isOpen ? 0 : "-100%" }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className="fixed top-0 left-0 z-40 md:relative md:translate-x-0 flex flex-col w-72 bg-white/80 backdrop-blur-lg border-r border-slate-200/80 h-screen"
//     >
//       <div className="flex flex-col items-center p-4 border-b border-slate-200/80 z-9109876">
//         <div className="relative group cursor-pointer">
//           <motion.img
//             src={'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3485.jpg?w=360'}
//             alt="User Avatar"
//             className="w-24 h-24 rounded-full object-cover"
//             whileHover={{ scale: 1.05, filter: "brightness(75%)" }}
//             transition={{ duration: 0.3 }}
//           />
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             initial={{ opacity: 0 }}
//             whileHover={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Upload className="text-white" size={28} />
//           </motion.div>
//         </div>
       
//         <p className="mt-1 text-sm text-slate-500 bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
//           {userData.status}
//         </p>
//       </div>

//       <nav className="flex-1 p-4 space-y-2">
//         {navItems.map((item) => (
//           <NavItem
//             key={item.id}
//             {...item}
//             activeContent={activeContent}
//             onClick={setActiveContent}
//           />
//         ))}
//       </nav>

//       <div className="p-4 border-t border-slate-200/80">
//         <motion.button
//           className="flex items-center w-full px-4 py-2.5 rounded-lg text-slate-600 hover:bg-red-500/10 hover:text-red-600 transition-colors duration-200"
//           whileHover={{ x: 5 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <LogOut size={20} className="mr-3" />
//           <span className="font-medium">{t("logout")}</span> {/* Перевод */}
//         </motion.button>
//       </div>
//     </motion.aside>
//   );
// };

// const LabStatusIndicator = ({ status = "online" }) => {
//   const colorMap = {
//     online: "bg-green-500",
//     busy: "bg-yellow-500",
//     offline: "bg-red-500",
//   };
//   return (
//     <div className="relative flex items-center justify-center w-8 h-8">
//       <motion.div
//         className={`absolute w-full h-full rounded-full ${colorMap[status]} opacity-30`}
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//       ></motion.div>
//       <div className={`w-3 h-3 rounded-full ${colorMap[status]}`}></div>
//     </div>
//   );
// };

// // WelcomeHeader использует t() для перевода
// // src/App.js (внутри App или как отдельный компонент)
// const WelcomeHeader = () => {
//   const { t } = useTranslation();
//   const { user } = useAuth();

//   // Если user или user.firstName не существуют, не отображаем
//   if (!user || !user.firstName) return null; // <--- Важно проверять user.firstName

//   return (
//     // ...
//     <h1 className="text-4xl font-bold text-slate-900 leading-tight">
//       {t("greeting", { name: user.firstName })}{" "}
//       {/* <--- Убедитесь, что здесь user.firstName */}
//     </h1>
//     // ...
//   );
// };

// // ExperimentCard использует t() для перевода статуса
// const ExperimentCard = ({ experiment }) => {
//   const { t } = useTranslation();
//   const iconMap = {
//     sequencing: <Dna className="text-purple-600" />,
//     pcr: <Sigma className="text-orange-600" />,
//     microscopy: <Microscope className="text-blue-600" />,
//   };
//   const statusColors = {
//     successful: "bg-green-100 text-green-700 border-green-200",
//     requires_review: "bg-yellow-100 text-yellow-700 border-yellow-200",
//     in_progress: "bg-blue-100 text-blue-700 border-blue-200",
//   };

//   return (
//     <motion.div
//       whileHover={{
//         scale: 1.03,
//         boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
//         borderColor: "rgba(99, 102, 241, 0.5)",
//       }}
//       transition={{ type: "spring", stiffness: 300, damping: 15 }}
//       className="bg-white p-6 rounded-3xl shadow-soft border border-transparent cursor-pointer flex flex-col h-full"
//     >
//       <div className="flex items-start justify-between">
//         <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-100 text-2xl">
//           {iconMap[experiment.type] || <Beaker className="text-slate-500" />}
//         </div>
//         <span
//           className={`text-sm font-semibold px-3 py-1.5 rounded-full border ${
//             statusColors[experiment.statusKey]
//           }`}
//         >
//           {t(experiment.statusKey)} {/* Перевод статуса */}
//         </span>
//       </div>
//       <div className="mt-4 flex-grow">
//         <h3 className="font-bold text-slate-800 text-xl leading-snug">
//           {experiment.name}
//         </h3>{" "}
//         {/* Название пока не переводим */}
//         <p className="text-sm text-slate-500 mt-2">
//           {experiment.resultKey}
//         </p>{" "}
//         {/* Результат пока не переводим */}
//       </div>
//       <p className="text-xs text-slate-400 mt-4 self-end">{experiment.date}</p>
//     </motion.div>
//   );
// };

// // EventCard использует t() для перевода
// const EventCard = () => {
//   const { t } = useTranslation();
//   return (
//     <motion.div
//       className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-3xl text-white shadow-xl relative overflow-hidden"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
//       whileHover={{
//         translateY: -5,
//         boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
//       }}
//     >
//       <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
//       <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>

//       <div className="flex justify-between items-center z-10 relative">
//         <p className="font-medium text-lg">{t(nextEventData.titleKey)}</p>{" "}
//         {/* Перевод заголовка */}
//         <div className="flex items-center bg-white/20 px-3 py-1.5 rounded-full text-xs font-semibold">
//           {nextEventData.icon}
//           <span>{t(nextEventData.typeKey)}</span> {/* Перевод типа */}
//         </div>
//       </div>
//       <h3 className="text-3xl font-bold mt-3 leading-tight">
//         {nextEventData.date}
//       </h3>
//       <div className="mt-4 z-10 relative">
//         <p className="font-semibold text-lg">{nextEventData.description}</p>
//         <p className="text-sm opacity-90 mt-1">{nextEventData.participants}</p>
//       </div>
//       <motion.button
//         className="w-full mt-6 bg-white text-indigo-700 font-semibold py-3 rounded-xl hover:bg-slate-100 transition-colors duration-200 shadow-md"
//         whileHover={{ scale: 1.02, backgroundColor: "#e2e8f0" }}
//         whileTap={{ scale: 0.98 }}
//       >
//         {t("connect_to_meeting")} {/* Перевод кнопки */}
//       </motion.button>
//     </motion.div>
//   );
// };

// // CalendarWidget использует t() для перевода названий месяцев и дней недели
// const CalendarWidget = () => {
//   const { t } = useTranslation();
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const activeDays = [14, 19, 28];

//   const getDaysInMonth = (month, year) =>
//     new Date(year, month + 1, 0).getDate();
//   const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

//   const daysInMonth = Array.from(
//     { length: getDaysInMonth(currentMonth, currentYear) },
//     (_, i) => i + 1
//   );
//   const firstDayIndex = (getFirstDayOfMonth(currentMonth, currentYear) + 6) % 7;
//   const weekdaysKeys = [
//     "monday_short",
//     "tuesday_short",
//     "wednesday_short",
//     "thursday_short",
//     "friday_short",
//     "saturday_short",
//     "sunday_short",
//   ];

//   const monthNamesKeys = [
//     "january",
//     "february",
//     "march",
//     "april",
//     "may",
//     "june",
//     "july",
//     "august",
//     "september",
//     "october",
//     "november",
//     "december",
//   ];

//   const handlePrevMonth = () => {
//     setCurrentMonth((prev) => {
//       if (prev === 0) {
//         setCurrentYear((prevYear) => prevYear - 1);
//         return 11;
//       }
//       return prev - 1;
//     });
//   };

//   const handleNextMonth = () => {
//     setCurrentMonth((prev) => {
//       if (prev === 11) {
//         setCurrentYear((prevYear) => prevYear + 1);
//         return 0;
//       }
//       return prev + 1;
//     });
//   };

//   return (
//     <motion.div
//       className="bg-white p-5 rounded-3xl shadow-soft"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.4, duration: 0.6 }}
//     >
//       <div className="flex items-center justify-between mb-4">
//         <motion.button
//           className="p-2 rounded-full hover:bg-slate-100 text-black transition-colors duration-200"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={handlePrevMonth}
//         >
//           <ChevronLeft size={20} className="text-slate-600" />
//         </motion.button>
//         <h3 className="font-semibold text-slate-800 text-lg">
//           {t(monthNamesKeys[currentMonth])} {currentYear} {/* Перевод месяца */}
//         </h3>
//         <motion.button
//           className="p-2 rounded-full hover:bg-slate-100 transition-colors duration-200 text-black"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={handleNextMonth}
//         >
//           <ChevronRight size={20} className="text-slate-600" />
//         </motion.button>
//       </div>
//       <div className="grid grid-cols-7 gap-y-2 text-center border-b pb-2 mb-2 border-slate-200">
//         {weekdaysKeys.map((key) => (
//           <span key={key} className="text-xs font-bold text-slate-400 text-black">
//             {t(key)}
//           </span>
//         ))}{" "}
//         {/* Перевод дней недели */}
//       </div>
//       <div className="grid grid-cols-7 gap-y-2 text-center">
//         {Array.from({ length: firstDayIndex }).map((_, i) => (
//           <div key={`empty-${i}`} />
//         ))}
//         {daysInMonth.map((day) => (
//           <motion.div
//             key={day}
//             className="flex justify-center items-center"
//             whileHover={{
//               scale: 1.1,
//               backgroundColor: activeDays.includes(day) ? "#4f46e5" : "#f0f4f8",
//             }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ type: "spring", stiffness: 400 }}
//           >
//             <button
//               className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium 
//                 ${
//                   activeDays.includes(day)
//                     ? "bg-brand-blue text-black shadow-md"
//                     : "text-black"
//                 }`}
//             >
//               {day}
//             </button>
//           </motion.div>
//         ))}
//       </div>
//       <motion.button
//         className="w-full mt-4 flex items-center justify-center bg-blue-800 text-white py-2.5 rounded-xl font-medium shadow-md hover:bg-indigo-500 transition-colors duration-200"
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//       >
//         <PlusCircle size={18} className="mr-2" /> {t("add_event")}{" "}
//         {/* Перевод кнопки */}
//       </motion.button>
//     </motion.div>
//   );
// };

// // Reminders использует t() для перевода
// const Reminders = () => {
//   const { t } = useTranslation();
//   return (
//     <motion.div
//       className="bg-white p-5 rounded-3xl shadow-soft"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.5, duration: 0.6 }}
//     >
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="font-semibold text-slate-800 text-lg">
//           {t("tasks_for_today")}
//         </h3>{" "}
//         {/* Перевод заголовка */}
//         <Bell size={22} className="text-slate-400" />
//       </div>
//       <ul className="space-y-3">
//         {remindersData.map((reminder, index) => (
//           <motion.li
//             key={index}
//             className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
//             whileHover={{ x: 5 }}
//           >
//             <div className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-xl mr-3 text-xl flex-shrink-0">
//               {reminder.icon}
//             </div>
//             <div className="flex-1">
//               <p className="text-sm font-medium text-slate-700">
//                 {t(reminder.textKey)}
//               </p>{" "}
//               {/* Перевод текста */}
//             </div>
//             <p className="text-sm text-slate-500 font-mono">{reminder.time}</p>
//           </motion.li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// };

// // ResearchProgress использует t() для перевода
// const ResearchProgress = () => {
//   const { t } = useTranslation();
//   return (
//     <motion.div
//       className="bg-white p-5 rounded-3xl shadow-soft"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.6, duration: 0.6 }}
//     >
//       <h3 className="font-semibold text-slate-800 text-lg">
//         {t(researchProgressData.titleKey)}
//       </h3>{" "}
//       {/* Перевод заголовка */}
//       <p className="text-sm text-slate-500 mt-1">
//         {researchProgressData.goal}
//       </p>{" "}
//       {/* Пока не переводим goal */}
//       <div className="mt-4">
//         <div className="flex justify-between items-center text-sm font-medium text-slate-600 mb-2">
//           <span>{t("progress")}</span>
//           <span>{researchProgressData.progress}%</span>{" "}
//           {/* Перевод "Прогресс" */}
//         </div>
//         <div className="w-full bg-slate-200 rounded-full h-3">
//           <motion.div
//             className="bg-brand-blue h-3 rounded-full"
//             initial={{ width: 0 }}
//             animate={{ width: `${researchProgressData.progress}%` }}
//             transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // ChartCard использует t() для перевода заголовка
// const ChartCard = ({ titleKey, icon: Icon, children }) => {
//   const { t } = useTranslation();
//   return (
//     <motion.div
//       className="bg-white p-5 rounded-3xl shadow-soft flex flex-col items-center justify-center"
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
//       whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)" }}
//     >
//       <div className="flex items-center mb-4">
//         <Icon size={24} className="text-brand-blue mr-3" />
//         <h3 className="font-semibold text-slate-800 text-lg">
//           {t(titleKey)}
//         </h3>{" "}
//         {/* Перевод заголовка */}
//       </div>
//       <div className="w-full h-64 flex items-center justify-center">
//         {children}
//       </div>
//     </motion.div>
//   );
// };

// // LineChartMock теперь использует t() для меток X
// const LineChartMock = ({ data }) => {
//   const { t } = useTranslation();
//   const monthLabelsKeys = [
//     "january_short",
//     "february_short",
//     "march_short",
//     "april_short",
//     "may_short",
//     "june_short",
//   ]; // Короткие ключи для месяца

//   const maxVal = Math.max(...data.datasets[0].data);
//   const minVal = Math.min(...data.datasets[0].data);
//   const range = maxVal - minVal;
//   const padding = 20;
//   const svgWidth = 400;
//   const svgHeight = 250;
//   const chartHeight = svgHeight - 2 * padding;
//   const chartWidth = svgWidth - 2 * padding;

//   const points = data.datasets[0].data
//     .map((val, i) => {
//       const x = padding + (i / (data.datasets[0].data.length - 1)) * chartWidth;
//       const y = padding + chartHeight - ((val - minVal) / range) * chartHeight;
//       return `${x},${y}`;
//     })
//     .join(" ");

//   return (
//     <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full">
//       <polyline
//         fill="none"
//         stroke={data.datasets[0].borderColor}
//         strokeWidth="3"
//         points={points}
//         vectorEffect="non-scaling-stroke"
//       />
//       {data.datasets[0].data.map((val, i) => {
//         const x =
//           padding + (i / (data.datasets[0].data.length - 1)) * chartWidth;
//         const y =
//           padding + chartHeight - ((val - minVal) / range) * chartHeight;
//         return (
//           <circle
//             key={i}
//             cx={x}
//             cy={y}
//             r="5"
//             fill={data.datasets[0].pointBackgroundColor}
//             stroke={data.datasets[0].pointBorderColor}
//             strokeWidth="2"
//           />
//         );
//       })}
//       {monthLabelsKeys.map((labelKey, i) => {
//         // Используем ключи для перевода
//         const x = padding + (i / (monthLabelsKeys.length - 1)) * chartWidth;
//         return (
//           <text
//             key={labelKey}
//             x={x}
//             y={svgHeight - padding / 2}
//             textAnchor="middle"
//             fontSize="12"
//             fill="#64748b"
//           >
//             {t(labelKey)} {/* Перевод метки */}
//           </text>
//         );
//       })}
//     </svg>
//   );
// };

// // PieChartMock теперь использует t() для меток
// const PieChartMock = ({ data }) => {
//   const { t } = useTranslation();
//   const cx = 125;
//   const cy = 125;
//   const radius = 100;
//   let startAngle = 0;

//   const typeLabelsKeys = ["sequencing", "pcr", "microscopy", "other"]; // Ключи для перевода типов

//   return (
//     <svg viewBox="0 0 250 250" className="w-full h-full">
//       {data.datasets[0].data.map((percentage, i) => {
//         const angle = (percentage / 100) * 360;
//         const endAngle = startAngle + angle;

//         const x1 = cx + radius * Math.cos((Math.PI * startAngle) / 180);
//         const y1 = cy + radius * Math.sin((Math.PI * startAngle) / 180);
//         const x2 = cx + radius * Math.cos((Math.PI * endAngle) / 180);
//         const y2 = cy + radius * Math.sin((Math.PI * endAngle) / 180);

//         const largeArcFlag = angle > 180 ? 1 : 0;

//         const pathData = [
//           `M ${cx},${cy}`,
//           `L ${x1},${y1}`,
//           `A ${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2}`,
//           `Z`,
//         ].join(" ");

//         const color = data.datasets[0].backgroundColor[i];
//         startAngle = endAngle;

//         return (
//           <g key={i}>
//             <path d={pathData} fill={color} />
//             <text
//               x={
//                 cx +
//                 radius *
//                   0.7 *
//                   Math.cos((Math.PI * (startAngle - angle / 2)) / 180)
//               }
//               y={
//                 cy +
//                 radius *
//                   0.7 *
//                   Math.sin((Math.PI * (startAngle - angle / 2)) / 180)
//               }
//               textAnchor="middle"
//               alignmentBaseline="middle"
//               fill="white"
//               fontSize="12"
//               fontWeight="bold"
//             >
//               {t(typeLabelsKeys[i])} {/* Перевод метки */}
//             </text>
//           </g>
//         );
//       })}
//     </svg>
//   );
// };

// // --- ОСНОВНОЙ КОМПОНЕНТ APP ---
// function App() {
//   const { t, i18n } = useTranslation();
//   const { user, logout } = useAuth(); // <--- Обновите эту строку, если не было 'user'

//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [activeContent, setActiveContent] = useState("dashboard");

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.1 } },
//   };

//   const itemFadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100, damping: 10 },
//     },
//   };

//   // Функция для смены языка
//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   const renderContent = () => {
//     switch (activeContent) {
//       case "dashboard":
//         return (
//           <>
//             <div className="flex flex-wrap justify-between items-start gap-4">
//               <WelcomeHeader />
//               <motion.div
//                 className="flex items-center space-x-3 p-3 bg-white rounded-2xl shadow-soft"
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2, duration: 0.5 }}
//               >
//                 <p className="text-base font-medium text-slate-700">
//                   {t("lab_status")}
//                 </p>{" "}
//                 {/* Перевод */}
//                 <LabStatusIndicator status="online" />
//               </motion.div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-slate-800 mb-5">
//                 {t("latest_experiments")}
//               </h2>{" "}
//               {/* Перевод */}
//               <motion.div
//                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//                 variants={staggerContainer}
//                 initial="hidden"
//                 animate="show"
//               >
//                 {recentExperiments.map((exp) => (
//                   <motion.div key={exp.id} variants={itemFadeIn}>
//                     <ExperimentCard experiment={exp} />
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-slate-800 mb-5">
//                 {t(nextEventData.titleKey)}
//               </h2>{" "}
//               {/* Перевод */}
//               <EventCard />
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <ChartCard titleKey="lab_activity_6_months" icon={BarChart}>
//                 {" "}
//                 {/* Перевод titleKey */}
//                 <LineChartMock data={monthlyActivityData} />
//               </ChartCard>
//               <ChartCard
//                 titleKey="experiment_type_distribution"
//                 icon={PieChart}
//               >
//                 {" "}
//                 {/* Перевод titleKey */}
//                 <PieChartMock data={experimentTypeDistribution} />
//               </ChartCard>
//             </div>
//           </>
//         );
//       case "my-projects":
//         return <MyProjectsContent />;
//       case "experiments": // ВОТ ЭТОТ КЕЙС БЫЛ ПРОПУЩЕН, ТЕПЕРЬ ОН ДОБАВЛЕН
//         return <ExperimentsContent />;
//       case "events": // Новый кейс
//         return <EventsContent />;
//       case "publications": // Новый кейс
//         return <PublicationsContent />;
//       case "settings": // Новый кейс
//         return <SettingsContent />;
//       // Добавьте другие кейсы по мере появления новых компонентов сайдбара
//       default:
//         return (
//           <div className="text-slate-600 p-8">{t("select_menu_item")}</div>
//         ); // Перевод
//     }
//   };

//   return (
//     <div className="font-sans min-h-screen bg-[#f0f2f5] flex text-slate-800">
//       <button
//         onClick={() => setSidebarOpen(!isSidebarOpen)}
//         className="md:hidden fixed top-5 left-5 z-50 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft"
//       >
//         {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>



//       <AnimatePresence>
//         {isSidebarOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black/30 z-30 md:hidden"
//             onClick={() => setSidebarOpen(false)}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           ></motion.div>
//         )}
//       </AnimatePresence>
//       <div className="hidden md:flex">
//         <Sidebar
//           isOpen={true}
//           activeContent={activeContent}
//           setActiveContent={setActiveContent}
//         />
//       </div>
//       <div className="md:hidden">
//         <Sidebar
//           isOpen={isSidebarOpen}
//           activeContent={activeContent}
//           setActiveContent={setActiveContent}
//         />
//       </div>

//       <main className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar">
//         <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-8">
//           <div className="flex flex-col gap-8">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeContent}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 className="w-full"
//               >
//                 {renderContent()}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <motion.div
//             className="w-full xl:w-96 flex-shrink-0 space-y-6"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
//           >
//             <CalendarWidget />
//             <Reminders />
//             <ResearchProgress />
//           </motion.div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
