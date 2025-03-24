"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] font-bold text-gray-200">404</h1>
        <h2 className="text-[4rem] font-semibold text-gray-800">
          {t("notFound.title")}
        </h2>
        <p className="text-gray-600">
          {t("notFound.description")}
        </p>
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          {t("notFound.backHome")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;