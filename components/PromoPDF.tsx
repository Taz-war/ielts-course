const PromoPDF = ({section}) =>{
  if (!section || !section.values?.length) return null;
  const promoPDF = section.values[0];
  return (
  <section className="max-w-xl mx-auto my-6 bg-white p-5 rounded-lg shadow flex items-center">
    <img src="https://i.ibb.co/xs5Lb7X/pdf.png" alt="PDF" className="w-20 h-20 rounded mr-4" />
    <div>
      <h3 className="font-bold text-lg text-green-700 mb-1">Free PDF</h3>
      <p className="text-sm mb-2">IELTS Confirm 7+ Score Guide</p>
      <button className="bg-green-600 px-4 py-1 rounded text-white font-bold text-sm">Download Now</button>
    </div>
  </section>
)};
export default PromoPDF;
