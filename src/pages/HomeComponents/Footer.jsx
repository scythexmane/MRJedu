import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const NAV = [
    {
      title: t('footer.publisher'),
      links: [
        { label: t('footer.links.home'), to: '/' },
        { label: t('footer.links.journals'), to: '/journals' },
        { label: t('footer.links.contact'), to: '/contact' },
      ],
    },
    {
      title: t('footer.journal'),
      links: [
        { label: t('footer.links.home'), to: '/' },
        { label: t('footer.links.archive'), to: '/archive' },
        { label: t('footer.links.about'), to: '/journal/about' },
        { label: t('footer.links.authorGuidelines'), to: '/authors/author-guidelines' },
      ],
    },
    {
      title: t('footer.terms'),
      links: [
        { label: t('footer.links.termsOfUse'), to: '/terms' },
        { label: t('footer.links.privacyPolicy'), to: '/privacy' },
        { label: t('footer.links.cookiePolicy'), to: '/cookies' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-700 border-t">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <NavLink to="/" className="flex items-center space-x-3">
              <img src="/logo.svg" alt="Modestum logo" className="h-18 w-auto" />
              <span className="sr-only">Medical Research Journal</span>
            </NavLink>

            <p className="mt-6 max-w-xs text-sm text-white">
              {t('footer.description')}
            </p>

            <div className="mt-6 flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-blue-600">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-blue-600">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {NAV.map((col) => (
            <nav key={col.title}>
              <h3 className="text-lg font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        [
                          'relative inline-block transition-colors',
                          'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full',
                          'after:origin-left after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300',
                          'hover:after:scale-x-100 hover:text-blue-600',
                          isActive ? 'text-blue-600' : 'text-white',
                        ].join(' ')
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="bg-slate-700">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-xs text-gray-100">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
