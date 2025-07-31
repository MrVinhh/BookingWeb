// context/LanguageContext.js
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isVietnamese, setIsVietnamese] = useState(true);

  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    setIsVietnamese(lang.startsWith("vi"));
  }, []);

  return (
    <LanguageContext.Provider value={{ isVietnamese }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
