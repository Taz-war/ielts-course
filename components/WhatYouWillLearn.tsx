import { Section } from "../types";

import React from "react";

interface LearningItem {
    id?: string | number;
    text: string;
}

interface LocalSection {
    name?: string;
    values?: LearningItem[];
}

interface WhatYouWillLearnProps {
    section?: LocalSection;
}

const WhatYouWillLearn: React.FC<WhatYouWillLearnProps> = ({ section }) => {
    if (!section?.values || section.values.length === 0) return null;

    return (
        <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
                {section.name || "কোর্সটি করে যা শিখবেন"}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
                {section.values.map((item, idx) => (
                    <div
                        key={item.id ?? idx}
                        className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 shadow-sm"
                    >
                        <span className="flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </span>
                        <span className="text-gray-700 leading-snug">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatYouWillLearn;
