import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SectionValue = {
  id?: string | number;
  title?: string;
  description?: string;
};

type AboutSection = {
  name?: string;
  values?: SectionValue[];
};

type AboutProps = {
  section?: AboutSection;
};

const About: React.FC<AboutProps> = ({ section }) => {
  if (!section?.values || section.values.length === 0) return null;

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {section.name || "কোর্স সম্পর্কে বিস্তারিত"}
      </h2>
      <div className="flex flex-col gap-3">
        {section.values.map((block, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={block.id ?? idx}
              className="border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              <button
                className={`w-full text-left flex items-center justify-between p-4 rounded-lg transition-colors ${isOpen ? "bg-green-50" : "bg-white"
                  }`}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span
                  className="text-base font-semibold text-green-700"
                  dangerouslySetInnerHTML={{ __html: block.title || "" }}
                />
                <svg
                  className={`w-5 h-5 text-green-500 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: "auto", opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="px-5 pb-4 pt-1 prose max-w-none text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: block.description || "",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
