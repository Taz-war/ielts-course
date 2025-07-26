const CourseLayout = ({ sections }) => {
  const layoutSection = sections?.find(sec => sec.type === "features");
  if (!layoutSection) return null;
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-2">{layoutSection.title || "How the Course is Laid Out"}</h2>
      <ul className="list-disc ml-5">
        {(layoutSection.items || []).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default CourseLayout;