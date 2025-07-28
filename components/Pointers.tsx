import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionValue {
  id?: string | number;
  text: string;
}

interface Section {
  name?: string;
  values?: SectionValue[];
}

interface PointersProps {
  section?: Section;
}

export default function Pointers({ section }: PointersProps) {
  if (!section?.values || section.values.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        {section.name || "কোর্সটি করে যা শিখবেন"}
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {section.values.map((item, idx) => {
          const ref = useRef<HTMLDivElement | null>(null);
          const isInView = useInView(ref, { once: true, amount: 0.3 });

          return (
            <motion.div
              ref={ref}
              key={item.id ?? idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: idx * 0.13 }}
              className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 shadow-sm transform transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <span className="flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700 leading-snug">{item.text}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
