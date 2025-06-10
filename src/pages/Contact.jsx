import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Map, Info } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative px-4 py-16 md:px-8 lg:py-24 bg-[#F8F8FF]">
      <div
        data-aos="fade-up"
        className="max-w-4xl mx-auto rounded-3xl bg-white shadow-xl border border-cyan-100 p-8 lg:p-12 transition hover:shadow-cyan-300"
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-cyan-600 text-center mb-10">
          {t("contact.title")}
        </h2>

        <div className="space-y-6 text-gray-800 text-base leading-relaxed">
          {/* Address */}
          <div className="flex items-start gap-4 group transition">
            <MapPin className="text-cyan-500 mt-1" />
            <div>
              <p className="font-semibold text-lg group-hover:text-cyan-700 transition">
                {t("contact.office")}
              </p>
              <p>{t("contact.address")}</p>
              <a
                href="https://goo.gl/maps/gMiVCevXwzzj6Pv16"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm text-cyan-600 hover:text-cyan-800 underline transition"
              >
                <Map className="w-4 h-4" />
                {t("contact.viewMap")}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 group">
            <Mail className="text-cyan-500" />
            <div>
              <span className="font-semibold">{t("contact.email")}: </span>
              <a
                href={`mailto:${t("contact.emails.publications")}`}
                className="text-cyan-600 underline hover:text-cyan-800 transition group-hover:underline"
              >
                {t("contact.emails.publications")}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 group">
            <Phone className="text-cyan-500" />
            <div>
              <span className="font-semibold">{t("contact.phone")}: </span>
              <a
                href="tel:+381616600107"
                className="text-cyan-600 underline hover:text-cyan-800 transition group-hover:underline"
              >
                +381 61 6600107
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="flex items-start gap-4 group">
            <Info className="text-cyan-500 mt-1" />
            <p>
              {t("contact.supportNote")}:{" "}
              <a
                href={`mailto:${t("contact.emails.support")}`}
                className="text-cyan-600 underline hover:text-cyan-800 transition"
              >
                {t("contact.emails.support")}
              </a>
            </p>
          </div>

          {/* Other inquiries */}
          <div className="flex items-start gap-4 group">
            <Info className="text-cyan-500 mt-1" />
            <p>
              {t("contact.otherInquiries")}:{" "}
              <a
                href={`mailto:${t("contact.emails.ijese")}`}
                className="text-cyan-600 underline hover:text-cyan-800 transition"
              >
                {t("contact.emails.ijese")}
              </a>
            </p>
          </div>
        </div>

        {/* Inline Google Map */}
        <div className="mt-10 rounded-xl overflow-hidden border-2 border-cyan-100 shadow-md hover:shadow-cyan-200 transition">
          <iframe
            title="Modestum Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.7770162620776!2d20.419204115536055!3d44.8156328790984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a705d683fe4c7%3A0x431e94f53c252228!2sBulevar%20Zorana%20%C4%90in%C4%91i%C4%87a%20125D%2C%20Beograd%2011070%2C%20Serbia!5e0!3m2!1sen!2srs!4v1718028742982!5m2!1sen!2srs"
            width="100%"
            height="300"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* QR Code in top-right corner */}
        <div className="absolute top-4 right-4 z-10">
          <div className="w-20 h-20 p-1 bg-white rounded-lg shadow-md border border-cyan-100 hover:shadow-lg hover:scale-105 transition transform duration-300">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://goo.gl/maps/gMiVCevXwzzj6Pv16"
              alt="QR Code"
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
