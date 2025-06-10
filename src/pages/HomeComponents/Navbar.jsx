import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [journalOpen, setJournalOpen] = useState(false);
  const [authorsOpen, setAuthorsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleJournal = () => {
    setJournalOpen(!journalOpen);
    setAuthorsOpen(false);
  };

  const toggleAuthors = () => {
    setAuthorsOpen(!authorsOpen);
    setJournalOpen(false);
  };

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    setLanguageOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler to close Journal dropdown
  const closeJournalDropdown = () => {
    setJournalOpen(false);
  };

  // Handler to close Authors dropdown
  const closeAuthorsDropdown = () => {
    setAuthorsOpen(false);
  };

  return (
    <header
      className={`bg-[#F8F8FF] sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/50 backdrop-blur-lg shadow p-[10px]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Логотип */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <img src="/logo.svg" alt="MRJedu" className="h-12 w-auto" />
          <span className="font-semibold text-xl text-gray-800">
            {t("navbar.titleLine1")} <br /> {t("navbar.titleLine2")}
          </span>
        </Link>

        {/* Кнопка гамбургера для мобилки */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-200 transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Навигация для десктопа */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium relative">
          <Link to="/" className="hover:text-blue-600 transition">
            {t("navbar.home")}
          </Link>
          <Link to="/archive" className="hover:text-blue-600 transition">
            {t("navbar.archive")}
          </Link>

          {/* Journal Info Dropdown */}
          <div className="relative">
            <button
              onClick={toggleJournal}
              className="flex items-center gap-1 hover:text-blue-600 transition"
              aria-expanded={journalOpen}
              aria-haspopup="true"
            >
              {t("navbar.journalInfo")}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  journalOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <Transition show={journalOpen} {...transitionProps}>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 space-y-2 z-50">
                <Link to="/journal/about" className="block hover:text-blue-600" onClick={closeJournalDropdown}>
                  {t("navbar.about")}
                </Link>
                <Link
                  to="/journal/aims-and-scope"
                  className="block hover:text-blue-600"
                  onClick={closeJournalDropdown}
                >
                  {t("navbar.aims")}
                </Link>
                <Link
                  to="/journal/editorial-board"
                  className="block hover:text-blue-600"
                  onClick={closeJournalDropdown}
                >
                  {t("navbar.editorialBoard")}
                </Link>
                <Link
                  to="/journal/indexing"
                  className="block hover:text-blue-600"
                  onClick={closeJournalDropdown}
                >
                  {t("navbar.indexing")}
                </Link>
                <Link
                  to="/journal/open-access-policy"
                  className="block hover:text-blue-600"
                  onClick={closeJournalDropdown}
                >
                  {t("navbar.openAccess")}
                </Link>
                <Link
                  to="/journal/copyright-and-licensing"
                  className="block hover:text-blue-600"
                  onClick={closeJournalDropdown}
                >
                  {t("navbar.copyright")}
                </Link>
                <Link
                  to="/journal/archiving-policy"
                  className="block hover:text-blue-600"
                  onClick={closeJournalDropdown}
                >
                  {t("navbar.archiving")}
                </Link>
                <Link
                  to="/journal/advertisement-and-marketing"
                  className="block hover:text-blue-600"
                  onClick={closeJournalDropdown}
                >
                  {t("navbar.advertising")}
                </Link>
                <Link
                  to="/journal/journal-history"
                  className="block hover:text-blue-600"
                  onClick={closeJournalDropdown}
                >
                  {t("navbar.history")}
                </Link>
                <Link
                  to="/journal/institutional-cooperations"
                  className="block hover:text-blue-600"
                  onClick={closeJournalDropdown}
                >
                  {t("navbar.cooperations")}
                </Link>
              </div>
            </Transition>
          </div>

          {/* For Authors Dropdown */}
          <div className="relative">
            <button
              onClick={toggleAuthors}
              className="flex items-center gap-1 hover:text-blue-600 transition"
              aria-expanded={authorsOpen}
              aria-haspopup="true"
            >
              {t("navbar.forAuthors")}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  authorsOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <Transition show={authorsOpen} {...transitionProps}>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 space-y-2 z-50">
                <Link
                  to="/authors/ethical-statement"
                  className="block hover:text-blue-600"
                  onClick={closeAuthorsDropdown}
                >
                  {t("navbar.ethical")}
                </Link>
                <Link
                  to="/authors/author-guidelines"
                  className="block hover:text-blue-600"
                  onClick={closeAuthorsDropdown}
                >
                  {t("navbar.guidelines")}
                </Link>
                <Link
                  to="/authors/editorial-policy"
                  className="block hover:text-blue-600"
                  onClick={closeAuthorsDropdown}
                >
                  {t("navbar.policy")}
                </Link>
                <Link
                  to="/authors/peer-review-policy"
                  className="block hover:text-blue-600"
                  onClick={closeAuthorsDropdown}
                >
                  {t("navbar.review")}
                </Link>
                <Link
                  to="/authors/publication-fee"
                  className="block hover:text-blue-600"
                  onClick={closeAuthorsDropdown}
                >
                  {t("navbar.fee")}
                </Link>
              </div>
            </Transition>
          </div>

          <Link to="/contact" className="hover:text-blue-600 transition">
            {t("navbar.contact")}
          </Link>
        </nav>

        {/* Инструменты справа для десктопа */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("navbar.search")}
              className="transition w-40 px-3 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="px-3 py-1.5 border rounded-full bg-white hover:bg-gray-100 transition flex items-center gap-1 text-sm"
            >
              {i18n.language.toUpperCase()}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  languageOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <Transition show={languageOpen} {...transitionProps}>
              <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded-lg py-2 text-sm z-50">
                {["EN", "RU", "UZ"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLangChange(lang)}
                    className={`block w-full px-4 py-2 text-left hover:bg-blue-100 ${
                      i18n.language.toUpperCase() === lang
                        ? "font-semibold text-blue-600"
                        : ""
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </Transition>
          </div>

          <Link to="/login">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition">
              {t("navbar.submit")}
            </button>
          </Link>
        </div>
      </div>

      {/* Мобильное меню */}
      <Transition
        show={mobileMenuOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <nav className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("navbar.home")}
          </Link>

          <Link
            to="/archive"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("navbar.archive")}
          </Link>

          {/* Journal Info Collapsible */}
          <div>
            <button
              onClick={toggleJournal}
              className="w-full flex justify-between items-center text-gray-700 hover:text-blue-600 font-medium"
              aria-expanded={journalOpen}
              aria-controls="mobile-journal-menu"
            >
              {t("navbar.journalInfo")}
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  journalOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <Transition
              show={journalOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 max-h-0"
              enterTo="opacity-100 max-h-screen"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 max-h-screen"
              leaveTo="opacity-0 max-h-0"
            >
              <div
                id="mobile-journal-menu"
                className="pl-4 mt-2 flex flex-col space-y-2 border-l border-gray-300"
              >
                <Link
                  to="/journal/about"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeJournalDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.about")}
                </Link>
                <Link
                  to="/journal/aims-and-scope"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeJournalDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.aims")}
                </Link>
                <Link
                  to="/journal/editorial-board"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeJournalDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.editorialBoard")}
                </Link>
                <Link
                  to="/journal/indexing"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeJournalDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.indexing")}
                </Link>
                <Link
                  to="/journal/open-access-policy"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeJournalDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.openAccess")}
                </Link>
                <Link
                  to="/journal/copyright-and-licensing"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeJournalDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.copyright")}
                </Link>
                <Link
                  to="/journal/archiving-policy"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeJournalDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.archiving")}
                </Link>
                <Link
                  to="/journal/advertisement-and-marketing"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeJournalDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.advertising")}
                </Link>
                <Link
                  to="/journal/journal-history"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeJournalDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.history")}
                </Link>
                <Link
                  to="/journal/institutional-cooperations"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeJournalDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.cooperations")}
                </Link>
              </div>
            </Transition>
          </div>

          {/* For Authors Collapsible */}
          <div>
            <button
              onClick={toggleAuthors}
              className="w-full flex justify-between items-center text-gray-700 hover:text-blue-600 font-medium"
              aria-expanded={authorsOpen}
              aria-controls="mobile-authors-menu"
            >
              {t("navbar.forAuthors")}
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  authorsOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <Transition
              show={authorsOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 max-h-0"
              enterTo="opacity-100 max-h-screen"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 max-h-screen"
              leaveTo="opacity-0 max-h-0"
            >
              <div
                id="mobile-authors-menu"
                className="pl-4 mt-2 flex flex-col space-y-2 border-l border-gray-300"
              >
                <Link
                  to="/authors/ethical-statement"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeAuthorsDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.ethical")}
                </Link>
                <Link
                  to="/authors/author-guidelines"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeAuthorsDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.guidelines")}
                </Link>
                <Link
                  to="/authors/editorial-policy"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeAuthorsDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.policy")}
                </Link>
                <Link
                  to="/authors/peer-review-policy"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeAuthorsDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.review")}
                </Link>
                <Link
                  to="/authors/publication-fee"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    closeAuthorsDropdown();
                  }}
                  className="hover:text-blue-600"
                >
                  {t("navbar.fee")}
                </Link>
              </div>
            </Transition>
          </div>

          <Link
            to="/contact"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("navbar.contact")}
          </Link>

          {/* Мобильный поиск */}
          <div className="relative mt-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("navbar.search")}
              className="w-full px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
          </div>

          {/* Мобильный выбор языка */}
          <div className="relative mt-4">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="w-full px-4 py-2 border rounded-full bg-white hover:bg-gray-100 transition flex justify-between items-center text-sm font-medium"
              aria-expanded={languageOpen}
            >
              {i18n.language.toUpperCase()}
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  languageOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <Transition
              show={languageOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 max-h-0"
              enterTo="opacity-100 max-h-screen"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 max-h-screen"
              leaveTo="opacity-0 max-h-0"
            >
              <div className="mt-2 bg-white shadow-lg rounded-lg py-2 text-sm z-50">
                {["EN", "RU", "UZ"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLangChange(lang)}
                    className={`block w-full px-4 py-2 text-left hover:bg-blue-100 ${
                      i18n.language.toUpperCase() === lang
                        ? "font-semibold text-blue-600"
                        : ""
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </Transition>
          </div>

          {/* Мобильная кнопка Submit */}
          <Link to="/authors/submit-manuscript" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition">
              {t("navbar.submit")}
            </button>
          </Link>
        </nav>
      </Transition>
    </header>
  );
}

const transitionProps = {
  enter: "transition ease-out duration-200",
  enterFrom: "opacity-0 translate-y-2",
  enterTo: "opacity-100 translate-y-0",
  leave: "transition ease-in duration-150",
  leaveFrom: "opacity-100 translate-y-0",
  leaveTo: "opacity-0 translate-y-2",
};