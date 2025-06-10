import React, { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

const boardData = [
  {
    role: "editors",
    members: [
      {
        name: "Andreas Ch. Hadjichambis",
        affiliation:
          "Cyprus Centre for Environmental Research and Education - CYCERE, Cyprus",
        email: "a.hadjichambis@cytanet.com.cy",
        orcid: "0000-0001-6833-7046",
        scopus: "16645430700",
      },
      {
        name: "Gregor Torkar",
        affiliation: "University of Ljubljana, Slovenia",
        email: "gregor.torkar@pef.uni-lj.si",
        orcid: "0000-0003-4125-8529",
        scopus: "35504029300",
      },
    ],
  },
  {
    role: "board",
    members: [
      {
        name: "Adiv Gal",
        affiliation: "Kibbutzim College of Education, Israel",
        email: "adiv@tene-eco.co.il, adiv.gal@smkb.ac.il",
        orcid: "0000-0001-5657-3068",
        scopus: "56313712000",
      },
      {
        name: "Amauri Bartoszeck",
        affiliation: "University of Parana, Brazil",
        email: "abbartoszeck@gmail.com",
        scopus: "6507945794",
      },
      {
        name: "Astrid Steele",
        affiliation: "Nipissing University, Canada",
        email: "astrids@nipissingu.ca",
        scopus: "37051493200",
      },
      {
        name: "Azra Moeed",
        affiliation: "Victoria University of Wellington, New Zealand",
        email: "azra.moeed@vuw.ac.nz",
        orcid: "0000-0002-6706-0695",
        scopus: "37023288600",
      },
      {
        name: "Cassie Quigley",
        affiliation: "University of Pittsburgh, USA",
        email: "cquigley@pitt.edu",
        orcid: "0000-0002-9502-3736",
        scopus: "35300630400",
      },
      {
        name: "Chua Kah Heng",
        affiliation: "University of Malaya, Malaysia",
        email: "chuakh@um.edu.my",
        orcid: "0000-0002-8429-9059",
        scopus: "56810770600",
      },
      {
        name: "Efrat Eilam",
        affiliation: "Victoria University, Australia",
        email: "efrat.eilam@vu.edu.au",
        orcid: "0000-0001-6076-6487",
        scopus: "36472908600",
      },
      {
        name: "Erin Redman",
        affiliation: "University of Wisconsin - Stevens Point, USA",
        email: "eredman@uwsp.edu",
        scopus: "55646713400",
      },
      {
        name: "Evrim Ural",
        affiliation: "Kahramanmaras Sutcu Imam University, Türkiye",
        email: "evrimural@gmail.com",
        orcid: "0000-0002-5427-2023",
        scopus: "10739904400",
      },
      {
        name: "George Papageorgiou",
        affiliation: "Democritus University of Thrace, Greece",
        email: "gpapageo@eled.duth.gr",
        orcid: "0000-0002-3725-4499",
      },
      {
        name: "Hanno Michel",
        affiliation:
          "Leibniz Institute for Science and Mathematics Education, Germany",
        email: "michel@leibniz-ipn.de",
        scopus: "57192890745",
      },
      {
        name: "Jason R. Wiles",
        affiliation: "Syracuse University, USA",
        email: "jwiles01@syr.edu",
        orcid: "0000-0003-1011-3546",
        scopus: "16311253800",
      },
      {
        name: "Jean-Philippe Ayotte-Beaudet",
        affiliation: "Université de Sherbrooke, Canada",
        email: "jean-philippe.ayotte-beaudet@usherbrooke.ca",
        orcid: "0000-0002-9553-5969",
        scopus: "55963261600",
      },
      {
        name: "Joanne Nazir",
        affiliation: "The University of the West Indies, Trinidad and Tobago",
        email: "joanne.nazir@sta.uwi.edu",
        orcid: "0000-0001-8832-3223",
        scopus: "39361963000",
      },
      {
        name: "Julio César Tovar-Gálvez",
        affiliation: "Martin-Luther-Universität Halle-Wittenberg, Germany",
        email: "joule_tg@yahoo.com",
        orcid: "0000-0001-7008-5140",
        scopus: "55257629800",
      },
      {
        name: "King-Dow Su",
        affiliation: "Hungkuo Delin University of Technology, Taiwan",
        email: "su-87168@mail.hdut.edu.tw",
        orcid: "0000-0001-5248-5589",
      },
      {
        name: "Krista Lynn Adams",
        affiliation: "University of Nebraska-Lincoln, USA",
        email: "krista.adams@eku.edu",
        orcid: "0000-0002-0568-9113",
        scopus: "54410154000",
      },
      {
        name: "Mageswary Karpudewan",
        affiliation: "Universiti Sains Malaysia, Malaysia",
        email: "kmageswary@usm.my",
        orcid: "0000-0001-8669-504X",
        scopus: "34267586900",
      },
      {
        name: "Mahsa Kazempour",
        affiliation: "Penn State University Berks Campus, USA",
        email: "muk30@psu.edu",
        orcid: "0000-0002-1047-8513",
        scopus: "12807767800",
      },
      {
        name: "Mehmet Bahar",
        affiliation: "Abant Izzet Baysal University, Türkiye",
        email: "mehmet.bahar@gmail.com",
        scopus: "22933673200",
      },
      {
        name: "Moheeta Khan",
        affiliation: "Aligarh Muslim University, India",
        email: "moheetakhan@gmail.com",
        scopus: "57789921000",
      },
      {
        name: "Pavol Prokop",
        affiliation: "Trnava University, Slovakia",
        email: "pavol.prokop@uniba.sk",
        orcid: "0000-0003-2016-7468",
        scopus: "8864179500",
      },
      {
        name: "Paul Iwuanyanwu",
        affiliation: "North-West University, South Africa",
        email: "paul.Iwuanyanwu@nwu.ac.za",
        orcid: "0000-0001-7641-6238",
        scopus: "57216706186",
      },
      {
        name: "Paulo Correia",
        affiliation: "Universidade de São Paulo, Brazil",
        email: "prmc@usp.br",
        orcid: "0000-0003-2419-7103",
        scopus: "7006210661",
      },
      {
        name: "Ritesh Khunyakari",
        affiliation: "Tata Institute of Social Sciences, India",
        email: "ritesh.k@tiss.edu",
        orcid: "0000-0003-1666-5296",
        scopus: "16039703800",
      },
      {
        name: "Sally Birdsall",
        affiliation: "The University of Auckland, New Zealand",
        email: "s.birdsall@auckland.ac.nz",
        orcid: "0000-0002-8348-7605",
        scopus: "36968010700",
      },
      {
        name: "Serife Gunduz",
        affiliation: "Near East University, Cyprus",
        email: "serife.gunduz@neu.edu.tr",
        orcid: "0000-0003-0871-7244",
        scopus: "57102995500",
      },
      {
        name: "Sue Dale Tunnicliffe",
        affiliation: "University College London, UK",
        email: "drladysue@gmail.com",
        orcid: "0000-0002-2740-6866",
        scopus: "6701639580",
      },
      {
        name: "Suzanne Gatt",
        affiliation: "University of Malta, Malta",
        email: "suzanne.gatt@um.edu.mt",
        orcid: "0000-0002-8490-0115",
        scopus: "17345474000",
      },
      {
        name: "Tom Puk",
        affiliation: "Lakehead University, Canada",
        email: "tpuk@lakeheadu.ca",
        scopus: "7801656310",
      },
      {
        name: "Yannis Hadzigeorgiou",
        affiliation: "University of the Aegean, Greece",
        email: "hadzigeo@aegean.gr",
        scopus: "12239538600",
      },
      {
        name: "Yu-Long Chao",
        affiliation: "National Formosa University, Taiwan",
        email: "chaoyulong@gmail.com",
        scopus: "56424899800",
      },
    ],
  },
  {
    role: "assistant",
    members: [
      {
        name: "Aleksandra Piljak, MSc",
        affiliation: "Modestum DOO, Serbia",
        email: "aleksandra.piljak@modestum.org",
      },
    ],
  },
];

export default function EditorialBoard() {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [openRoles, setOpenRoles] = useState({
    editors: true,
    board: false,
    assistant: false,
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // search filter
  const filteredData = useMemo(() => {
    if (!search.trim()) return boardData;
    const term = search.toLowerCase();
    return boardData
      .map((section) => ({
        ...section,
        members: section.members.filter((m) =>
          [m.name, m.affiliation, m.email, m.orcid, m.scopus]
            .filter(Boolean)
            .some((v) => v.toLowerCase().includes(term))
        ),
      }))
      .filter((s) => s.members.length);
  }, [search]);

  const toggleRole = (role) =>
    setOpenRoles((prev) => ({ ...prev, [role]: !prev[role] }));

  return (
    <section className="relative px-4 py-16 md:px-8 lg:py-24 bg-gradient-to-b bg-[#F8F8FF] overflow-hidden">
      {/* subtle background dots */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#c1e5ff_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center text-4xl lg:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600"
        >
          {t("board.title" /* Editorial Board */)}
        </motion.h1>

        {/* search */}
        <div className="mb-10 flex justify-center" data-aos="fade-up">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("board.search" /* Search by name… */)}
              className="w-full rounded-full border border-cyan-200 bg-white/70 backdrop-blur px-10 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
        </div>

        {/* sections */}
        <div className="space-y-8">
          {filteredData.map((section) => (
            <div key={section.role} data-aos="fade-up" data-aos-delay="100">
              {/* accordion header */}
              <button
                onClick={() => toggleRole(section.role)}
                className="w-full flex items-center justify-between bg-white/80 backdrop-blur rounded-lg px-6 py-3 border border-cyan-100 shadow hover:shadow-md transition"
              >
                <span className="text-lg font-semibold text-cyan-700">
                  {t(`board.roles.${section.role}`)} ({section.members.length})
                </span>
                {openRoles[section.role] ? (
                  <ChevronUp className="text-cyan-600" />
                ) : (
                  <ChevronDown className="text-cyan-600" />
                )}
              </button>

              {/* animated list */}
              <AnimatePresence>
                {openRoles[section.role] && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, type: "tween" }}
                    className="overflow-hidden divide-y divide-cyan-50 border border-t-0 border-cyan-100 rounded-b-lg"
                  >
                    {section.members.map((m, idx) => (
                      <li
                        key={idx}
                        className="group px-6 py-4 bg-white/60 backdrop-blur-sm hover:bg-white transition-colors"
                      >
                        <p className="font-medium text-gray-900 group-hover:text-cyan-700 transition-colors">
                          {m.name}
                        </p>
                        <p className="text-sm text-gray-700">{m.affiliation}</p>
                        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                          {m.email && (
                            <a
                              href={`mailto:${m.email}`}
                              className="text-cyan-600 underline"
                            >
                              {m.email}
                            </a>
                          )}
                          {m.orcid && (
                            <a
                              href={`https://orcid.org/${m.orcid}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-600 underline"
                            >
                              ORCID: {m.orcid}
                            </a>
                          )}
                          {m.scopus && (
                            <span className="text-gray-600">
                              Scopus: {m.scopus}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * 🌐 Add to your translation JSON files:
 *
 * en.json / ru.json / uz.json
 *
 * "board": {
 *   "title": "Editorial Board",
 *   "search": "Search by name, institution, ORCID…",
 *   "roles": {
 *     "editors": "Editors",
 *     "board": "Editorial Board",
 *     "assistant": "Editorial Assistant"
 *   }
 * }
 */
