const CourseInfoCard = ({section}) =>{
  if (!section || !section.values?.length) return null;
  const courseInfoCard = section.values[0];
  return (
  <aside className="bg-white border rounded-lg p-5 max-w-xs shadow ml-auto">
    <div className="flex items-center justify-between mb-2">
      <span className="text-2xl font-bold text-green-700">৳ 1850</span>
      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">ফ্ল্যাশ সেল</span>
    </div>
    <button className="w-full bg-green-600 text-white font-bold py-2 rounded my-2">এনরোল করুন</button>
    <ul className="text-sm text-gray-700 mb-2">
      <li>লাইফটাইম এক্সেস</li>
      <li>সার্টিফিকেট</li>
      <li>লাইভ সাপোর্ট</li>
    </ul>
    <div className="text-xs text-gray-400 mt-4">শুধুমাত্র অনলাইন</div>
  </aside>
)};
export default CourseInfoCard;
