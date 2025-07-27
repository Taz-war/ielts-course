import { useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

const getYoutubeUrl = id => `https://www.youtube.com/watch?v=${id}`;

// Utility: Get thumbnail for any media
const getThumb = m => m.thumbnail_url || (
  m.resource_type === "video"
    ? `https://img.youtube.com/vi/${m.resource_value}/hqdefault.jpg`
    : m.resource_value
);

const Trailer = ({ media }) => {
  if (!media?.length) return null;
  // Pick first video as default
  const defaultMedia =
    media.find(m => m.resource_type === "video") ||
    media[0];

  const [selected, setSelected] = useState(defaultMedia);

  return (
    <div className="bg-white border rounded-lg shadow overflow-hidden mb-4">
      {/* Main Display Area */}
      <div className="relative w-full h-48 bg-black flex items-center justify-center">
        {selected.resource_type === "video" ? (
          <ReactPlayer
            url={getYoutubeUrl(selected.resource_value)}
            controls
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        ) : (
          <img
            src={getThumb(selected)}
            alt="Course preview"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {/* Thumbnails Row */}
      <div className="flex gap-2 px-4 py-3 bg-white border-t overflow-x-auto">
        {media.slice(0, 6).map((item, i) => (
          <button
            key={i}
            onClick={() => setSelected(item)}
            className={`outline-none border-2 rounded transition-all duration-150
              ${item === selected ? "border-green-500" : "border-transparent"}
            `}
            style={{ padding: 0 }}
            tabIndex={0}
            aria-label={item.resource_type === "video" ? "Play video" : "Show image"}
          >
            <div className="relative w-14 h-10">
              <img
                src={getThumb(item)}
                alt=""
                className="w-full h-full object-cover rounded"
              />
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

export default Trailer
