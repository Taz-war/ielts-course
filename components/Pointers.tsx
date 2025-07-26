const Pointers = ({ sections }) => {
  const pointersSection = sections?.find(sec => sec.type === "pointers");
  if (!pointersSection) return null;
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-2">{pointersSection.title || "What You Will Learn"}</h2>
      <ul className="list-disc ml-5">
        {(pointersSection.items || []).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Pointers;
