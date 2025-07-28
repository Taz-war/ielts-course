import React from "react";

type Section = {
  type: string;
  title?: string;
  items?: string[];
};

type CourseLayoutProps = {
  sections?: Section[];
};

const CourseLayout: React.FC<CourseLayoutProps> = ({ sections }) => {
  if (!Array.isArray(sections)) return null;

  const layoutSection = sections.find((sec) => sec.type === "features");
  if (!layoutSection || !Array.isArray(layoutSection.items)) return null;

  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-2">
        {layoutSection.title || "How the Course is Laid Out"}
      </h2>
      <ul className="list-disc ml-5">
        {layoutSection.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseLayout;
