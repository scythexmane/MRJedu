// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout.jsx";
import Home from "./pages/Home.jsx";
import Archive from "./pages/Archive.jsx";
import Login from "./pages/login.jsx";
import About from "./pages/journal/About.jsx";
import AimsAndScope from "./pages/journal/AimsAndScope.jsx";
import EditorialBoard from "./pages/journal/EditorialBoard.jsx";
import Indexing from "./pages/journal/Indexing.jsx";
import OpenAccessPolicy from "./pages/journal/OpenAccessPolicy.jsx";
import ArchivingPolicy from "./pages/journal/ArchivingPolicy.jsx";
import AdvertisementAndMarketing from "./pages/journal/AdvertisementAndMarketing.jsx";
import JournalHistory from "./pages/journal/JournalHistory.jsx";
import InstitutionalCooperations from "./pages/journal/InstitutionalCooperations.jsx";
import EthicalStatement from "./pages/authors/EthicalStatement.jsx";
import AuthorGuidelines from "./pages/authors/AuthorGuidelines.jsx";
import EditorialPolicy from "./pages/authors/EditorialPolicy.jsx";
import PeerReviewPolicy from "./pages/authors/PeerReviewPolicy.jsx";
import PublicationFee from "./pages/authors/PublicationFee.jsx";
import CookiePolicySection from "./pages/Cookieee.jsx"; // Исправлен импорт
import Contact from "./pages/Contact.jsx";
import Terms from "./pages/Terms.jsx";
import PrivacyPolicySection from "./pages/PrivacyPolicy.jsx";
import ProfileRoutes from "./Profile/routers/ProfileRoutes";
import MainLayout from "./Profile/components/layout/MainLayout"; // добавь это
import NotFound from "./pages/NotFound.jsx"; // Предполагаемый компонент для 404

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="archive" element={<Archive />} />
          <Route path="journal/about" element={<About />} />
          <Route path="journal/aims-and-scope" element={<AimsAndScope />} />
          <Route path="journal/editorial-board" element={<EditorialBoard />} />
          <Route path="journal/indexing" element={<Indexing />} />
          <Route
            path="journal/open-access-policy-and-licensing"
            element={<OpenAccessPolicy />}
          />
          <Route
            path="journal/archiving-policy"
            element={<ArchivingPolicy />}
          />
          <Route
            path="journal/advertisement-and-marketing"
            element={<AdvertisementAndMarketing />}
          />
          <Route path="journal/journal-history" element={<JournalHistory />} />
          <Route
            path="journal/institutional-cooperations"
            element={<InstitutionalCooperations />}
          />
          <Route
            path="authors/ethical-statement"
            element={<EthicalStatement />}
          />
          <Route
            path="authors/author-guidelines"
            element={<AuthorGuidelines />}
          />
          <Route
            path="authors/editorial-policy"
            element={<EditorialPolicy />}
          />
          <Route
            path="authors/peer-review-policy"
            element={<PeerReviewPolicy />}
          />
          <Route path="authors/publication-fee" element={<PublicationFee />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<PrivacyPolicySection />} />
          <Route path="cookies" element={<CookiePolicySection />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile/*" element={<MainLayout />}>
            {ProfileRoutes}
          </Route>
          {/* Вложенные маршруты профиля */}
          <Route path="*" element={<NotFound />} /> {/* Обработка 404 */}
        </Route>
      </Routes>
    </Router>
  );
}
