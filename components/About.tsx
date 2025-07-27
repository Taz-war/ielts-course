import { useState } from "react";

const About = ({ section }) => {
  if (!section?.values?.length) return null;

  // Track open panel index (or you can allow multiple to be open)
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
            <div key={block.id || idx} className="border border-gray-200 rounded-lg shadow-sm bg-white">
              {/* Accordion Header */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Accordion Panel */}
              {isOpen && (
                <div
                  className="px-5 pb-4 pt-1 prose max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: block.description || "" }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
