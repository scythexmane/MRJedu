// src/Profile/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const defaultName = {
  uz: "Foydalanuvchi",
  ru: "Пользователь",
  en: "User",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    const userWithName = {
      ...userData,
      name: userData.name || defaultName,
    };
    setUser(userWithName);
    localStorage.setItem('user', JSON.stringify(userWithName));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
