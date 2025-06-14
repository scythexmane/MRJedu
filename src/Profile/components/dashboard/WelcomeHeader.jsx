import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';

const WelcomeHeader = () => {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();

  if (!user) return null;



  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-900 leading-tight">
        {t("greeting")}, {t("user")}
      </h1>
    </div>
  );
};

export default WelcomeHeader;
