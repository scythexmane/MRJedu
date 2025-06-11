// components/AuthorGuidelines.jsx
import React from "react";
import { FileText, UploadCloud, Edit, BookOpenCheck, Link as LinkIcon } from "lucide-react";

export default function AuthorGuidelines() {
  return (
    <section className="bg-gradient-to-b bg-[#F8F8FF] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-800 mb-10 text-center">
          Author Guidelines
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Manuscript Submission */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <UploadCloud className="text-blue-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-700">Manuscript Submission</h3>
            </div>
            <p className="text-gray-600">
              All manuscripts must be submitted in English via the{" "}
              <a
                href="https://www.editorialpark.com/ijese"
                className="text-blue-600 underline hover:text-blue-800"
              >
                submission portal
              </a>
              . Submissions should be original, unpublished, and aligned with the journal’s scope and ethics.
              Authors must enter co-author information and ensure consistency in language style.
            </p>
          </div>

          {/* Manuscript Preparation */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-green-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-700">Manuscript Preparation</h3>
            </div>
            <p className="text-gray-600">
              Format your manuscript using A4 size, 1.5 line spacing, 11-12 pt fonts, justified text. Submit two files:
              a title page (with author info, contributions, funding) and a blinded manuscript (no author details).
              Structure: Title, Abstract (≤150 words), Keywords, Introduction, Methods, Results, Discussion, Conclusions, References.
            </p>
          </div>

          {/* References & Citations */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <BookOpenCheck className="text-purple-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-700">References & Citations</h3>
            </div>
            <p className="text-gray-600">
              Follow APA 7th edition. Include all cited works in the reference list. Use "et al." for 3+ authors in text.
              Direct quotes should include page numbers. Avoid op. cit. and ibid.
            </p>
          </div>

          {/* Figures & Tables */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Edit className="text-orange-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-700">Figures & Tables</h3>
            </div>
            <p className="text-gray-600">
              Tables must be self-explanatory with concise captions. Figures should be high-resolution (JPEG, 300 dpi),
              labeled (a, b, c...), and uploaded separately. Indicate placement with [Table 1], [Figure 1] in text.
            </p>
          </div>

          {/* Final Check & Contact */}
          <div className="md:col-span-2 bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <LinkIcon className="text-pink-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-700">Final Checks & Contact</h3>
            </div>
            <p className="text-gray-600 mb-2">
              Ensure clarity, originality, proper citations, valid methodology, and that all authors are added to the portal.
              Contact us for technical support at{" "}
              <a
                href="mailto:support@editorialpark.com"
                className="text-pink-600 underline hover:text-pink-800"
              >
                support@editorialpark.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
