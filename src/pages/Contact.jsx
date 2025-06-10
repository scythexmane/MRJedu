import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Map } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

/**
 * ContactSection — fully i18n‑ready (en, ru, uz)
 * Strings are referenced via `t('contact.*')`.
 * See translation JSON samples at the bottom of this file.
 */
export default function ContactSection() {
  const { t } = useTranslation();
  const [mapOpen, setMapOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative px-4 py-16 md:px-8 lg:py-24 bg-[#F8F8FF]">
      <div
        data-aos="fade-up"
        className="max-w-4xl mx-auto rounded-2xl bg-white shadow-xl border border-cyan-100 p-8 lg:p-12 transition hover:shadow-cyan-300"
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-cyan-600 text-center">
          {t("contact.title")}
        </h2>

        <div className="space-y-6 text-gray-800 text-base leading-relaxed mt-8">
          {/* Address */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-3">
            <MapPin className="text-cyan-500 shrink-0 mt-1" />
            <div className="flex-1">
              <p className="font-semibold">{t("contact.office")}</p>
              <p>{t("contact.address")}</p>
              <button
                onClick={() => setMapOpen(true)}
                className="mt-2 text-sm inline-flex items-center gap-1 text-cyan-600 hover:text-cyan-800 underline transition"
              >
                <Map className="w-4 h-4" />
                {t("contact.viewMap")}
              </button>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 break-words">
            <Mail className="text-cyan-500 shrink-0" />
            <p>
              <span className="font-semibold">{t("contact.email")}: </span>
              <a
                href={`mailto:${t("contact.emails.publications")}`}
                className="text-cyan-600 underline hover:text-cyan-800 break-all"
              >
                {t("contact.emails.publications")}
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Phone className="text-cyan-500 shrink-0" />
            <p>
              <span className="font-semibold">{t("contact.phone")}: </span>
              <a href="tel:+381616600107" className="text-cyan-600 underline hover:text-cyan-800">
                +381 61 6600107
              </a>
            </p>
          </div>

          {/* Support note */}
          <p>
            {t("contact.supportNote")}:{" "}
            <a
              href={`mailto:${t("contact.emails.support")}`}
              className="text-cyan-600 underline hover:text-cyan-800 break-all"
            >
              {t("contact.emails.support")}
            </a>
          </p>

          {/* Other inquiries */}
          <p>
            {t("contact.otherInquiries")}:{" "}
            <a
              href={`mailto:${t("contact.emails.ijese")}`}
              className="text-cyan-600 underline hover:text-cyan-800 break-all"
            >
              {t("contact.emails.ijese")}
            </a>
          </p>
        </div>
      </div>

      {/* Google Map Modal */}
      {mapOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden shadow-lg">
            <button
              onClick={() => setMapOpen(false)}
              className="absolute top-2 right-2 text-cyan-600 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>
            <iframe
              title="Modestum Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.7770162620776!2d20.419204115536055!3d44.8156328790984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a705d683fe4c7%3A0x431e94f53c252228!2sBulevar%20Zorana%20%C4%90in%C4%91i%C4%87a%20125D%2C%20Beograd%2011070%2C%20Serbia!5e0!3m2!1sen!2srs!4v1718028742982!5m2!1sen!2srs"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </section>
  );
}

