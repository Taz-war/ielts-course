const Instructors = ({ section }) => {
  if (!section || !section.values?.length) return null;
  const instructor = section.values[0];
  return (
    <div className="bg-white border rounded-lg p-6 max-w-xl">
      <h2 className="text-2xl font-bold mb-4">{section.name || "কোর্স ইন্সট্রাক্টর"}</h2>
      <div className="flex items-center">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-16 h-16 rounded-full object-cover border mr-6"
        />
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span className="font-semibold text-lg">{instructor.name}</span>
            <span className="text-xl text-gray-500">&rsaquo;</span>
          </div>
          <div
            className="text-gray-600 leading-relaxed text-sm"
            dangerouslySetInnerHTML={{ __html: instructor.description }}
          />
        </div>
      </div>
    </div>
  );
};
export default Instructors;

