const Features = ({ section }) => {
  if (!section || !section.values?.length) return null;
  // If you want the section's name/title as the header:
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-2">{section.name || "Features"}</h2>
      <ul className="list-disc ml-5">
        {section.values.map((item, i) => (
          <li key={i}>{item.title} — {item.subtitle}</li>
        ))}
      </ul>
    </div>
  );
};
export default Features;
