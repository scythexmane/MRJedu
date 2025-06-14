import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';

const WelcomeHeader = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  if (!user || !user.firstName) return null;

  return (
    <div>
        <h1 className="text-4xl font-bold text-slate-900 leading-tight">
            {t("greeting", { name: user.firstName })}
        </h1>
        <p className="mt-2 text-slate-500">Вот что происходит в вашей лаборатории сегодня.</p>
    </div>
  );
};

export default WelcomeHeader;