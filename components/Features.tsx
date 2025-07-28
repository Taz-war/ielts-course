import React from "react";

type FeatureItem = {
  title: string;
  subtitle?: string;
};

type FeaturesSection = {
  name?: string;
  values?: FeatureItem[];
};

type FeaturesProps = {
  section?: FeaturesSection;
};

const Features: React.FC<FeaturesProps> = ({ section }) => {
  if (!section?.values || section.values.length === 0) return null;

  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-2">
        {section.name || "Features"}
      </h2>
      <ul className="list-disc ml-5">
        {section.values.map((item, i) => (
          <li key={i}>
            {item.title}
            {item.subtitle && ` — ${item.subtitle}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
