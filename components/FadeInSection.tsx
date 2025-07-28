import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

type FadeInSectionProps = {
  children: ReactNode;
  delay?: number;
};

export default function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
