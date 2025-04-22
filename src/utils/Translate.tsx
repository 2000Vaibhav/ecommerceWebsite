import React from "react";
import { useTranslation } from "react-i18next";

interface TranslateTextProps {
  textKey: string; // Key used for translation
  namespace?: string; // Optional namespace for translations
  values?: Record<string, string | number>; // Optional values for interpolation
  className?: string; // Optional CSS class
}

const TranslateText: React.FC<TranslateTextProps> = ({ textKey, namespace, values = {}, className }) => {
  const { t }: { t: any } = useTranslation(namespace);

  return <span className={`${className || ""} mr-1`}>{t(textKey, values)}</span>;
};

export { TranslateText };
