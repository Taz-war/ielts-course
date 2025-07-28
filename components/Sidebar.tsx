import React from "react";
import Trailer from "./Trailer";
import CourseInfoCard from "./CourseInfoCard";
import Checklist from "./Checklist";
import { Data } from "../types";

interface SidebarProps {
  data: Data;
}

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  return (
    <div>
      {data.media && <Trailer media={data.media} />}
      {data && <CourseInfoCard section={data} />}
      {data.checklist && <Checklist checklist={data.checklist} />}
    </div>
  );
};

export default Sidebar;
