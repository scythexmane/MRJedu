import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';

const WelcomeHeader = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  if (!user) return null;

  // Registered users have their typed name as a string.
  // Logged-in demo users get a translations object, so we show the translated default.
  const displayName = typeof user.name === "string" ? user.name : t("user");

  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-900 leading-tight">
        {t("greeting")}, {displayName}
      </h1>
    </div>
  );
};

export default WelcomeHeader;
