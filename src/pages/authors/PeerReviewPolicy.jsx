import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  FileSignature,
  Users2,
  Timer,
  ShieldAlert,
  LockKeyhole,
  RefreshCcw,
  Info,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const items = [
  {
    icon: Eye,
    titleKey: "peerReview.doubleBlind",
    descKey: "peerReview.doubleBlindDesc",
    accent: "from-sky-400 to-blue-500",
  },
  {
    icon: FileSignature,
    titleKey: "peerReview.reviewPurpose",
    descKey: "peerReview.reviewPurposeDesc",
    accent: "from-green-400 to-emerald-500",
  },
  {
    icon: Users2,
    titleKey: "peerReview.reviewProcess",
    descKey: "peerReview.reviewProcessDesc",
    accent: "from-purple-400 to-violet-500",
  },
  {
    icon: ShieldAlert,
    titleKey: "peerReview.competingInterests",
    descKey: "peerReview.competingDesc",
    accent: "from-pink-400 to-rose-500",
  },
  {
    icon: LockKeyhole,
    titleKey: "peerReview.confidentiality",
    descKey: "peerReview.confidentialityDesc",
    accent: "from-gray-600 to-zinc-800",
  },
  {
    icon: Timer,
    titleKey: "peerReview.timeliness",
    descKey: "peerReview.timelinessDesc",
    accent: "from-orange-400 to-amber-500",
  },
  {
    icon: RefreshCcw,
    titleKey: "peerReview.recommendations",
    descKey: "peerReview.recommendationsDesc",
    accent: "from-cyan-400 to-teal-500",
  },
  {
    icon: Info,
    titleKey: "peerReview.reportFormat",
    descKey: "peerReview.reportFormatDesc",
    accent: "from-indigo-400 to-blue-600",
  },
];

export default function PeerReviewPolicy() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-br bg-[#F8F8FF] py-24 px-4 md:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-sky-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] bg-indigo-100 rounded-full blur-2xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-gray-800 mb-20 text-center"
        >
          {t("peerReview.title")}
        </motion.h2>

        <div className="flex flex-col gap-16">
          {items.map((item, index) => {
            const Icon = item.icon;
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row ${
                  reverse ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
              >
                <div className="md:w-1/2">
                  <div className="relative w-fit h-fit mb-6">
                    <div
                      className={`w-28 h-28 rounded-full bg-gradient-to-br ${item.accent} opacity-70 blur-sm`}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="text-white w-10 h-10 drop-shadow-lg" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </div>
               
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
