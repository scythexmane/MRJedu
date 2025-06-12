import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ once: false, duration: 800, offset: 100 });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8F8FF] via-teal-50 to-white min-h-screen text-slate-700">
      {/* Blurred blobs */}
      <div className="absolute top-32 -right-32 w-[450px] h-[450px] rounded-full bg-teal-300 opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full bg-indigo-200 opacity-30 blur-3xl"></div>

      {/* Hero */}
      <div className="container mx-auto px-4 pt-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1" data-aos="fade-right">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            <Trans i18nKey="contact.title">
              Свяжитесь с <span className="text-teal-600">нами</span>
            </Trans>
          </h1>
          <p className="text-lg lg:text-xl mb-8 max-w-prose">
            {t("contact.description")}
          </p>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ContactCard Icon={Phone} title={t("contact.phone")} subtitle="+998 71 123‑45‑67" />
            <ContactCard Icon={Mail} title={t("contact.email")} subtitle="info@medportal.uz" />
            <ContactCard Icon={MapPin} title={t("contact.address")} subtitle="Ташкент, ул. Здоровья, 10" />
            <ContactCard Icon={Clock} title={t("contact.workingHours")} subtitle="Пн‑Сб 09:00‑18:00" />
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-8">
            <SocialIcon href="https://facebook.com" label="Facebook">
              <Facebook size={22} />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" label="Instagram">
              <Instagram size={22} />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" label="LinkedIn">
              <Linkedin size={22} />
            </SocialIcon>
            <SocialIcon href="https://youtube.com" label="YouTube">
              <Youtube size={22} />
            </SocialIcon>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex-1" data-aos="fade-left">
          <img
            src="https://cdn.culture.ru/images/6a6a4e59-37a8-5ddd-943e-3549a60d1b74"
            alt="Doctor Illustration"
            className="w-full opacity-90"
          />
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="container mx-auto px-4 py-24" data-aos="fade-up">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-10 lg:p-14">
            <h2 className="text-3xl font-bold mb-6">{t("contact.writeUs")}</h2>

            <form className="space-y-6">
              <FloatingInput type="text" id="name" placeholder={t("contact.name")} />
              <FloatingInput type="email" id="email" placeholder="Email" />
              <FloatingInput type="tel" id="phone" placeholder={t("contact.formPhone")} />
              <FloatingTextarea id="message" placeholder={t("contact.message")} rows={4} />
              <button
                type="submit"
                className="relative inline-flex items-center justify-center rounded-xl px-8 py-3 font-semibold bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/30 transition-transform transform hover:-translate-y-0.5"
              >
                {t("contact.send")}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-[450px] w-full">
            <iframe
              title="Clinic location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1174.6801333598284!2d69.27973604125811!3d41.31108109491843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4abcfb695db%3A0x4d5e6ee618eb5d2e!2z0KLQsNC90YTQuNGB!5e0!3m2!1sen!2s!4v1686234567891!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------- Reusable UI ----------------------------- */
const ContactCard = ({ Icon, title, subtitle }) => (
  <div className="flex items-start gap-3 group">
    <div className="p-3 rounded-xl bg-teal-600/10 text-teal-600 group-hover:scale-110 transition-transform">
      <Icon strokeWidth={2.2} />
    </div>
    <div>
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="text-lg font-semibold">{subtitle}</p>
    </div>
  </div>
);

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-teal-50 hover:bg-teal-100 shadow-md shadow-teal-200/40 transition transform hover:-translate-y-0.5"
  >
    {children}
  </a>
);

const FloatingInput = ({ id, type, placeholder }) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      placeholder=" "
      required
      className="peer block w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 focus:border-teal-600 focus:outline-none focus:ring-0"
    />
    <label
      htmlFor={id}
      className="absolute top-0 left-4 -translate-y-1/2 bg-white px-1 text-slate-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-teal-600"
    >
      {placeholder}
    </label>
  </div>
);

const FloatingTextarea = ({ id, placeholder, rows }) => (
  <div className="relative">
    <textarea
      id={id}
      rows={rows}
      placeholder=" "
      required
      className="peer block w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 focus:border-teal-600 focus:outline-none focus:ring-0 resize-none"
    ></textarea>
    <label
      htmlFor={id}
      className="absolute top-0 left-4 -translate-y-1/2 bg-white px-1 text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-0 peer-focus:left-4 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-teal-600"
    >
      {placeholder}
    </label>
  </div>
);

export default ContactPage;
