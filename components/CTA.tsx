const CTA = ({ cta, lang }) => {
  return (
    <div className="my-4 text-center">
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
        {cta[lang]}
      </button>
    </div>
  );
};
export default CTA;
