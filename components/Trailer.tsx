import { useState } from "react";
import dynamic from "next/dynamic";
import type { FC } from "react";
import type { Medium } from "../types"; // assuming this is your actual media type

const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

interface TrailerProps {
  media?: Medium[];
}

const getYoutubeUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;

const getThumb = (m: Medium): string =>
  m.thumbnail_url ||
  (m.resource_type === "video"
    ? `https://img.youtube.com/vi/${m.resource_value}/hqdefault.jpg`
    : m.resource_value);

const Trailer: FC<TrailerProps> = ({ media }) => {
  if (!Array.isArray(media) || media.length === 0) return null;

  const initialIdx = Math.max(0, media.findIndex(m => m.resource_type === "video"));
  const [selectedIdx, setSelectedIdx] = useState<number>(initialIdx);
  const selected = media[selectedIdx];

  const goPrev = () => setSelectedIdx(idx => (idx - 1 + media.length) % media.length);
  const goNext = () => setSelectedIdx(idx => (idx + 1) % media.length);

  return (
    <div className="bg-white border rounded-lg shadow overflow-hidden mb-2 p-2" tabIndex={0}>
      <div className="relative w-full h-48 bg-black flex items-center justify-center">
        {/* Prev */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-green-100 rounded-full p-1 shadow border border-gray-300"
          onClick={goPrev}
          aria-label="Previous media"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Media Display */}
        <div className="w-full h-full flex items-center justify-center">
          {selected.resource_type === "video" ? (
            <ReactPlayer
              url={getYoutubeUrl(selected.resource_value)}
              controls
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          ) : (
            <img src={getThumb(selected)} alt="Course preview" className="w-full h-full object-cover" />
          )}
        </div>

        {/* Next */}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-green-100 rounded-full p-1 shadow border border-gray-300"
          onClick={goNext}
          aria-label="Next media"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 px-4 py-3 bg-white border-t overflow-x-auto">
        {media.slice(0, 6).map((item, i) => (
          <button
            key={item.id ?? i}
            onClick={() => setSelectedIdx(i)}
            className={`outline-none border-2 rounded transition-all duration-150 ${i === selectedIdx ? "border-green-500" : "border-transparent"
              }`}
            aria-label={item.resource_type === "video" ? "Play video" : "Show image"}
          >
            <div className="relative w-14 h-10">
              <img src={getThumb(item)} alt="" className="w-full h-full object-cover rounded" />
              {item.resource_type === "video" && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white drop-shadow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l7-5-7-5z" />
                  </svg>
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Trailer;
