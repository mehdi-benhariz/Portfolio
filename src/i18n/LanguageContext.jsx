import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, itemTranslations } from "./translations";

const LanguageContext = createContext(null);

export const LANGUAGES = ["en", "fr", "ar"];

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang");
    return LANGUAGES.includes(saved) ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = translations[lang] || translations.en;

  /** Translate a role/desc for an experience item, falling back to the original. */
  const tItem = (company, field, fallback) => {
    const map = itemTranslations[lang];
    return (map && map[field === "role" ? "roles" : "descs"][company]) || fallback;
  };

  /** Translate an education entry, falling back to the original values. */
  const tEdu = (degreeKey, fallback) => {
    const map = itemTranslations[lang];
    return (map && map.edu[degreeKey]) || fallback;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tItem, tEdu }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
