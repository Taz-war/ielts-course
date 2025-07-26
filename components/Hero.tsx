const Hero = ({ data }) => (
  <section className="bg-gradient-to-r from-[#313862] to-[#1f2a4b] py-8 rounded-xl mt-6">
    <div className="flex flex-col md:flex-row items-center px-4">
      <div className="flex-1 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{data.title}</h1>
        <div
          className="prose prose-invert mb-3"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
      <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
        <img
          src={data.media?.[0]?.thumbnail_url || data.media?.[0]?.resource_value}
          alt={data.title}
          className="w-64 h-36 object-cover rounded-2xl border-4 border-white"
        />
      </div>
    </div>
  </section>
);

export default Hero;
