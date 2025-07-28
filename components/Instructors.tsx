import { useRouter } from "next/router";

const Instructors = ({ section }: { section: any }) => {
  if (!section || !section.values?.length) return null;
  const instructor = section.values[0];
  const router = useRouter();

  const handleInstructorClick = () => {
    if (instructor.has_instructor_page && instructor.slug) {
      router.push(`/instructor/${instructor.slug}`);
    }
  };

  return (
    <div
      className="bg-gradient-to-br from-white via-[#f8f8ff] mb-10 to-[#e3fcec] border rounded-2xl shadow-xl p-6 max-w-2xl hover:shadow-2xl cursor-pointer transition-shadow group"
      onClick={handleInstructorClick}
      title="See Instructor Details"
      tabIndex={0}
      role="button"
      onKeyPress={e => {
        if (e.key === "Enter") handleInstructorClick();
      }}
    >
      <h2 className="text-2xl font-extrabold mb-4 text-gray-800 flex items-center gap-2">
        <span className="inline-block">{section.name || "কোর্স ইন্সট্রাক্টর"}</span>
        <svg className="w-6 h-6 text-green-400 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </h2>
      <div className="flex items-center gap-5">
        <div className="relative group-hover:scale-105 transition-transform duration-200">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-green-100 shadow-lg transition"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-xl text-gray-900">{instructor.name}</span>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded font-semibold">
              {instructor.short_description}
            </span>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </div>
          <div
            className="text-gray-700 leading-relaxed text-[15px]"
            dangerouslySetInnerHTML={{ __html: instructor.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default Instructors;
