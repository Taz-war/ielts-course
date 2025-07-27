const CourseInfoCard = ({ section }) => {
  // Data fields from API
  const price = section.price || 3850;
  const oldPrice = section.old_price || 5000;
  const discount = oldPrice - price;

  return (
    <aside className="bg-white border rounded-lg p-5 mt-4 shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl font-bold text-gray-900">৳{price}</span>
        {oldPrice && (
          <span className="text-gray-400 line-through ml-2 text-lg">৳{oldPrice}</span>
        )}
        {discount > 0 && (
          <span className="ml-2 bg-red-100 text-red-700 text-xs px-2 py-1 rounded">{discount} ৳ ছাড়</span>
        )}
      </div>
      <button className="w-full bg-green-600 text-white font-bold py-2 rounded mt-4 mb-2 hover:bg-green-700 transition">
        কোর্সটি কিনুন
      </button>
    </aside>
  );
};
export default CourseInfoCard;
