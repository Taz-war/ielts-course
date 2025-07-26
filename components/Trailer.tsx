import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Trailer = ({ media }) => {
  const trailer = media?.find((m) => m.type === "youtube");
  if (!trailer) return null;
  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <ReactPlayer url={trailer.url} width="100%" controls />
    </div>
  );
};

export default Trailer;
