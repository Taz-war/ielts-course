import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type FeatureItem = {
  id?: string | number;
  icon: string;
  title: string;
  subtitle?: string;
};

type FeatureHighlightsProps = {
  section?: {
    values?: FeatureItem[];
  };
};

const FeatureHighlights: React.FC<FeatureHighlightsProps> = ({ section }) => {
  if (!section?.values || section.values.length === 0) return null;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {section.values.map((item, i) => {
        const ref = useRef<HTMLDivElement | null>(null);
        const isInView = useInView(ref, { once: true, amount: 0.3 });

        return (
          <motion.div
            ref={ref}
            key={item.id ?? i}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: i * 0.13 }}
            className="bg-[#181F2B] rounded-lg p-6 mb-10 flex items-start gap-3 w-full max-w-md shadow"
            style={{ minHeight: "100px" }}
          >
            <span className="flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
              <img src={item.icon} className="w-4 h-4" alt={item.title} />
            </span>
            <div>
              <div className="font-bold text-white text-base">{item.title}</div>
              <div className="text-gray-200 text-sm mt-1">{item.subtitle}</div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default FeatureHighlights;
