import React from "react";

export type ChecklistItem = {
  id?: string | number;
  icon: string;
  text: string;
  list_page_visibility?: boolean;
};

type RawChecklistItem = {
  [key: string]: any;
};

type ChecklistProps = {
  checklist: RawChecklistItem[] | undefined;
};

const Checklist: React.FC<ChecklistProps> = ({ checklist }) => {
  if (!Array.isArray(checklist) || checklist.length === 0) return null;

  // Normalize the data to ensure all fields exist
  const normalizedChecklist: ChecklistItem[] = checklist.map((item, i) => ({
    id: item.id ?? i,
    text: item.text ?? "",
    icon: item.icon ?? "/default-icon.svg",
    list_page_visibility:
      typeof item.list_page_visibility === "boolean"
        ? item.list_page_visibility
        : true,
  }));

  const visibleItems = normalizedChecklist.filter(
    (item) => item.list_page_visibility !== false
  );

  if (visibleItems.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow p-5 mt-2 mb-4">
      <h2 className="text-lg font-bold mb-4 text-gray-700">এই কোর্সে যা থাকছে</h2>
      <ul className="flex flex-col gap-3">
        {visibleItems.map((item, i) => (
          <li key={item.id ?? i} className="flex items-center gap-3">
            <span className="inline-flex w-7 h-7 rounded-full bg-gray-100 flex-shrink-0 justify-center items-center border border-gray-200">
              <img
                src={item.icon}
                alt=""
                className="w-5 h-5 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/default-icon.svg";
                }}
              />
            </span>
            <span className="text-gray-700 text-[15px]">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
