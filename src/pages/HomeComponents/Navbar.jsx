import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search, Menu, X, User } from "lucide-react";
import { Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../Profile/context/AuthContext";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const auth = useAuth() || { user: null, logout: () => {} };
  const { user, logout } = auth;
  const [journalOpen, setJournalOpen] = useState(false);
  const [authorsOpen, setAuthorsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleJournal = () => {
    setJournalOpen(!journalOpen);
    setAuthorsOpen(false);
    setLanguageOpen(false);
  };

  const toggleAuthors = () => {
    setAuthorsOpen(!authorsOpen);
    setJournalOpen(false);
    setLanguageOpen(false);
  };

  const toggleLanguage = () => {
    setLanguageOpen(!languageOpen);
    setJournalOpen(false);
    setAuthorsOpen(false);
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

  const closeJournalDropdown = () => {
    setJournalOpen(false);
  };

  const closeAuthorsDropdown = () => {
    setAuthorsOpen(false);
  };

  const closeAllDropdowns = () => {
    setJournalOpen(false);
    setAuthorsOpen(false);
    setLanguageOpen(false);
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    closeAllDropdowns();
  };

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    closeAllDropdowns();
  };
  return (
    <header
      className={`bg-[#F8F8FF] sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-lg shadow p-[10px]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <img src="/logo.svg" alt="MRJedu" className="h-12 w-auto" />
          <span className="font-semibold text-xl text-gray-800">
            Medical <br /> Research Journal
          </span>
        </Link>

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

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium relative z-50">
          <Link to="/" className="hover:text-blue-600 transition">
            {t("navbar.home")}
          </Link>
          <Link to="/archive" className="hover:text-blue-600 transition">
            {t("navbar.archive")}
          </Link>
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
                <Link
                  to="/journal/about"
                  className="block hover:text-blue-600"
                  onClick={closeJournalDropdown}
                >
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
                  to="/journal/open-access-policy-and-licensing"
                  className="block hover:text-blue-600"
                  onClick={closeJournalDropdown}
                >
                  {t("navbar.openAccess")}
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

        <div className="hidden md:flex items-center gap-4">
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
          <div className="relative">
            <button
              onClick={toggleLanguage}
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
          {user ? (
            <div className="relative">
              <Link
                to="/profile"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                title={t("user")}
              >
                <User size={24} />
                <span className="font-medium">{t("user")}</span>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition">
                {t("navbar.submit")}
              </button>
            </Link>
          )}
        </div>
      </div>

      <Transition
        show={mobileMenuOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <nav className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 py-4 space-y-4 z-30">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={handleMobileLinkClick}
          >
            {t("navbar.home")}
          </Link>
          <Link
            to="/archive"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={handleMobileLinkClick}
          >
            {t("navbar.archive")}
          </Link>
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
                  onClick={handleMobileLinkClick}
                  className="hover:text-blue-600"
                >
                  {t("navbar.about")}
                </Link>
                <Link
                  to="/journal/aims-and-scope"
                  onClick={handleMobileLinkClick}
                  className="hover:text-blue-600"
                >
                  {t("navbar.aims")}
                </Link>
                <Link
                  to="/journal/editorial-board"
                  onClick={handleMobileLinkClick}
                  className="hover:text-blue-600"
                >
                  {t("navbar.editorialBoard")}
                </Link>
                <Link
                  to="/journal/indexing"
                  onClick={handleMobileLinkClick}
                  className="hover:text-blue-600"
                >
                  {t("navbar.indexing")}
                </Link>
                <Link
                  to="/journal/open-access-policy-and-licensing"
                  onClick={handleMobileLinkClick}
                  className="hover:text-blue-600"
                >
                  {t("navbar.openAccess")}
                </Link>
                <Link
                  to="/journal/archiving-policy"
                  onClick={handleMobileLinkClick}
                  className="hover:text-blue-600"
                >
                  {t("navbar.archiving")}
                </Link>
                <Link
                  to="/journal/advertisement-and-marketing"
                  onClick={handleMobileLinkClick}
                  className="hover:text-blue-600"
                >
                  {t("navbar.advertising")}
                </Link>
                <Link
                  to="/journal/journal-history"
                  onClick={handleMobileLinkClick}
                  className="hover:text-blue-600"
                >
                  {t("navbar.history")}
                </Link>
                <Link
                  to="/journal/institutional-cooperations"
                  onClick={handleMobileLinkClick}
                  className="hover:text-blue-600"
                >
                  {t("navbar.cooperations")}
                </Link>
              </div>
            </Transition>
          </div>
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
                  onClick={handleMobileLinkClick}
                  className="hover:text-blue-600"
                >
                  {t("navbar.ethical")}
                </Link>
                <Link
                  to="/authors/author-guidelines"
                  onClick={handleMobileLinkClick}
                  className="hover:text-blue-600"
                >
                  {t("navbar.guidelines")}
                </Link>
                <Link
                  to="/authors/editorial-policy"
                  onClick={handleMobileLinkClick}
                  className="hover:text-blue-600"
                >
                  {t("navbar.policy")}
                </Link>
                <Link
                  to="/authors/peer-review-policy"
                  onClick={handleMobileLinkClick}
                  className="hover:text-blue-600"
                >
                  {t("navbar.review")}
                </Link>
                <Link
                  to="/authors/publication-fee"
                  onClick={handleMobileLinkClick}
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
            onClick={handleMobileLinkClick}
          >
            {t("navbar.contact")}
          </Link>
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
          <div className="relative mt-4">
            <button
              onClick={toggleLanguage}
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
          {user ? (
            <>
              <Link
                to="/profile"
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={handleMobileLinkClick}
              >
                <div className="flex items-center gap-2">
                  <User size={20} />
                  <h2>
                    {t("user")}
                  </h2>
                </div>
              </Link>
              <button
                onClick={handleLogout}
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                {t("logout")}
              </button>
            </>
          ) : (
            <Link to="/login" onClick={handleMobileLinkClick}>
              <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition">
                {t("navbar.submit")}
              </button>
            </Link>
          )}
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
