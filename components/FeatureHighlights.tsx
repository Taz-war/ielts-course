const FeatureHighlights = ({ section }) => {
  if (!section || !section.values?.length) return null;
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {section.values.map((item, i) => (
        <div
          key={item.id || i}
          className="bg-[#181F2B] rounded-lg p-4 flex items-start gap-3 w-full max-w-sm"
        >
          <span className="flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
            <img src={item.icon} className="w-4 h-4" alt="" />
          </span>
          <div>
            <div className="font-bold text-white text-base">{item.title}</div>
            <div className="text-gray-200 text-sm mt-1">{item.subtitle}</div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default FeatureHighlights;
