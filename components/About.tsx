const About = ({ sections }) => {
  const aboutSection = sections?.find(sec => sec.type === "about");
  if (!aboutSection) return null;
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-2">{aboutSection.title || "About the Course"}</h2>
      <div className="prose" dangerouslySetInnerHTML={{ __html: aboutSection.description }} />
    </div>
  );
};
export default About;
