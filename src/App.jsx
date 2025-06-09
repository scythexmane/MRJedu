// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout.jsx";
// Страницы
import Home from "./pages/Home.jsx";
import Archive from "./pages/Archive.jsx";
// import About from "./pages/journal/About.jsx";
// import AimsAndScope from "./pages/journal/AimsAndScope.jsx";
// import EditorialBoard from "./pages/journal/EditorialBoard.jsx";
// import Indexing from "./pages/journal/Indexing.jsx";
// import OpenAccessPolicy from "./pages/journal/OpenAccessPolicy.jsx";
// import CopyrightAndLicensing from "./pages/journal/CopyrightAndLicensing.jsx";
// import ArchivingPolicy from "./pages/journal/ArchivingPolicy.jsx";
// import AdvertisementAndMarketing from "./pages/journal/AdvertisementAndMarketing.jsx";
// import JournalHistory from "./pages/journal/JournalHistory.jsx";
// import InstitutionalCooperations from "./pages/journal/InstitutionalCooperations.jsx";

// import EthicalStatement from "./pages/authors/EthicalStatement.jsx";
// import AuthorGuidelines from "./pages/authors/AuthorGuidelines.jsx";
// import EditorialPolicy from "./pages/authors/EditorialPolicy.jsx";
// import PeerReviewPolicy from "./pages/authors/PeerReviewPolicy.jsx";
// import PublicationFee from "./pages/authors/PublicationFee.jsx";
// import SubmitManuscript from "./pages/authors/SubmitManuscript.jsx";

// import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout /> } >
          {/* Home */}
          <Route index element={<Home />} />

          {/* Journal */}
          <Route path="archive" element={<Archive />} />
          {/* <Route path="journal/about" element={<About />} />
          <Route path="journal/aims-and-scope" element={<AimsAndScope />} />
          <Route path="journal/editorial-board" element={<EditorialBoard />} />
          <Route path="journal/indexing" element={<Indexing />} />
          <Route path="journal/open-access-policy" element={<OpenAccessPolicy />} />
          <Route path="journal/copyright-and-licensing" element={<CopyrightAndLicensing />} />
          <Route path="journal/archiving-policy" element={<ArchivingPolicy />} />
          <Route path="journal/advertisement-and-marketing" element={<AdvertisementAndMarketing />} />
          <Route path="journal/journal-history" element={<JournalHistory />} />
          <Route path="journal/institutional-cooperations" element={<InstitutionalCooperations />} /> */}

          {/* Authors */}
          {/* <Route path="authors/ethical-statement" element={<EthicalStatement />} />
          <Route path="authors/author-guidelines" element={<AuthorGuidelines />} />
          <Route path="authors/editorial-policy" element={<EditorialPolicy />} />
          <Route path="authors/peer-review-policy" element={<PeerReviewPolicy />} />
          <Route path="authors/publication-fee" element={<PublicationFee />} />
          <Route path="authors/submit-manuscript" element={<SubmitManuscript />} /> */}

          {/* Contact */}
          {/* <Route path="contact" element={<Contact />} />
          <Route path="submit" element={<SubmitManuscript />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
