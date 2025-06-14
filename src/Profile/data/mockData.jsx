import React from 'react';
import { Users, Thermometer, ClipboardCheck, Clock } from 'lucide-react';

export const userData = {
  status: "Исследователь",
};

export const recentExperiments = [
    { id: 1, type: "sequencing", name: "Секвенирование РНК", resultKey: "Данные обработаны", date: "12 июня 2025", statusKey: "successful" },
    { id: 2, type: "pcr", name: "ПЦР-тестирование", resultKey: "Обнаружена контаминация", date: "11 июня 2025", statusKey: "requires_review" },
    { id: 3, type: "microscopy", name: "Конфокальная микроскопия", resultKey: "Изображения сохранены", date: "09 июня 2025", statusKey: "successful" },
    { id: 4, type: "sequencing", name: "Геномное секвенирование", resultKey: "Начальный анализ", date: "08 июня 2025", statusKey: "in_progress" },
    { id: 5, type: "pcr", name: "qPCR анализ", resultKey: "Ожидание результатов", date: "07 июня 2025", statusKey: "in_progress" },
];

export const nextEventData = {
    titleKey: "next_event",
    date: "14 июня 2025, 11:00",
    description: 'Встреча по проекту "CRISPR-CAS9"',
    participants: 'Команда "Геномика"',
    icon: <Users size={14} className="mr-1.5" />,
    typeKey: "meeting",
};

export const remindersData = [
    { icon: <Thermometer className="text-red-500" />, textKey: "run_incubator", time: "09:00" },
    { icon: <ClipboardCheck className="text-green-500" />, textKey: "check_cultures", time: "15:00" },
    { icon: <Clock className="text-blue-500" />, textKey: "submit_conference_abstracts", time: "23:59" },
];

export const researchProgressData = {
    titleKey: "project_progress",
    goal: "Этап 2: Анализ данных секвенирования",
    progress: 60,
};

export const monthlyActivityData = {
    datasets: [{
        labelKey: "Количество экспериментов",
        data: [10, 15, 8, 20, 12, 25],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
    }],
};

export const experimentTypeDistribution = {
    datasets: [{
        data: [35, 30, 20, 15],
        backgroundColor: ["#6366f1", "#f97316", "#3b82f6", "#a855f7"],
        hoverOffset: 10,
    }],
};