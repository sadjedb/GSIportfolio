"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/context/translations";

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#282C58] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t.usefulLinks || "Useful Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  {t.home || "Home"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  {t.aboutUs || "About Us"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  {t.products || "Products"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  {t.services || "Services"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  {t.contactUs || "Contact"}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">GSI Ascenseurs</h3>
            <p className="mb-4">
              {t.companyDescription ||
                "Our elevator import and installation company offers Turkish-manufactured elevators: THISA ELEVATOR, controlled during manufacturing by ENACT at very competitive prices, with assured after-sales service."}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t.contactUs || "Contact Us"}
            </h3>
            <p className="mb-2">
              {t.address || "29 Coopérative Zaghloul, Point Du jour, Oran"}
            </p>
            <p className="mb-2">
              {(t.phone && `Tel/WhatsApp: ${t.phone}`) ||
                "Tel/WhatsApp: (213) 540 088 854"}
            </p>
            <p className="mb-4">Email: generalstandimport@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center">
        <p>
          &copy; 2024 GSI Ascenseurs.{" "}
          {t.allRightsReserved || "All rights reserved."}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
