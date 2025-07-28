import { Data } from "../types";

const Hero = ({ data }: { data: Data }) => (
  <section
    className="relative w-full rounded-2xl mt-6 overflow-hidden"
    style={{
      background: "linear-gradient(115deg, #232b47 0%, #091129 60%, #030714 100%)",
      minHeight: "370px", 
    }}
  >
    <div className="flex flex-col md:flex-row items-center px-6 md:px-12 py-12 md:py-16 gap-8">
      <div className="flex-1 text-white z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight">
          {data.title}
        </h1>
        <div
          className="prose prose-invert prose-lg max-w-2xl mb-4"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
     
    </div>
    <div className="absolute right-0 bottom-0 w-72 h-72 rounded-full bg-gradient-to-tr from-green-300/10 via-blue-500/10 to-purple-500/20 blur-2xl z-0 pointer-events-none" />
  </section>
);

export default Hero;
