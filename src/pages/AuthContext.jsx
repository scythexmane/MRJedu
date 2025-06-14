// src/contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("currentUser"); // Ищем 'currentUser'
      return storedUser ? JSON.parse(storedUser) : null; // Парсим весь объект
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user)); // Сохраняем весь объект
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [user]);

  // Функция login теперь принимает объект user с firstName (и другими полями, если нужно)
  const login = (userData) => {
  const defaultName = {
    en: "User",
    ru: "Пользователь",
    uz: "Foydalanuvchi",
  };

  const normalizedUser = {
    ...userData,
    name:
      typeof userData.name === "object"
        ? userData.name
        : defaultName, // если name — не объект, подставляем переводы
  };

  setUser(normalizedUser);

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
