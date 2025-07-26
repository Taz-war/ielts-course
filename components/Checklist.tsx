const Checklist = ({ checklist }) => {
  if (!checklist || !checklist.length) return null;

  // Only show those with list_page_visibility: true (to match sidebar on screenshot)
  const visibleItems = checklist.filter(item => item.list_page_visibility);

  return (
    <div className="bg-white rounded-lg shadow p-5 mt-2 mb-4">
      <h2 className="text-lg font-bold mb-4 text-gray-700">এই কোর্সে যা থাকছে</h2>
      <ul className="flex flex-col gap-3">
        {visibleItems.map((item, i) => (
          <li key={item.id || i} className="flex items-center gap-3">
            <span className="inline-flex w-7 h-7 rounded-full bg-gray-100 flex-shrink-0 justify-center items-center border border-gray-200">
              <img src={item.icon} alt="" className="w-5 h-5 object-contain" />
            </span>
            <span className="text-gray-700 text-[15px]">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
