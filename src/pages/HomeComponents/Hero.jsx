import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#F8F8FF] overflow-hidden z-0">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-around relative z-10 md:gap-x-16 lg:gap-x-24">
        
        {/* Image Left */}
        <div
          className="w-full max-w-sm md:w-5/12 mb-10 md:mb-0"
          data-aos="fade-right"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://www.ijese.com/images/154/ijese-cover.jpg"
              alt="Environmental"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Text Right */}
        <div
          className="w-full md:w-6/12 text-center md:text-left"
          data-aos="fade-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
