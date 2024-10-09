"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import { useLanguage } from "../../../app/context/LanguageContext";
import { translations } from "../../../app/context/translations";

const AboutPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            {t.aboutTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
            {t.aboutSubtitle}
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t.ourMission}
              </h2>
              <p className="text-gray-600">{t.missionText1}</p>
              <p className="mt-4 text-gray-600">{t.missionText2}</p>
            </div>
            <div className="relative">
              <Image
                src={logo}
                alt="Premium Elevators"
                className="rounded-lg shadow-lg object-cover"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t.qualityCommitment}
            </h2>
            <p className="text-gray-600">{t.qualityText1}</p>
            <p className="mt-4 text-gray-600">{t.qualityText2}</p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t.tailoredSolutions}
            </h2>
            <p className="text-gray-600">{t.tailoredText}</p>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t.whyChooseUs}
            </h2>
            <p className="text-lg text-gray-600">{t.chooseUsText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
