import { useState } from "react";
import CourseCard from "./CourseCard";
import MiniCard from "../Common/Card/MiniCard/MiniCard";
import LargeCard from "../Common/Card/LargeCard/LargeCard";
import FilterPanel from "./FilterPanel";
import CourseWraper from "./CourseWraper";
const Courses = () => {
  const [isMiniCard, setIsMiniCard] = useState(false);

  const handelCompareClick = () => {
    console.log("clicked compare icon");
  };
  return (
    <div className="  w-full border-2 border-green-70l 0 md:px-32 sm:px-10 px-3 lg:px-52  flex justify-center items-center">
      <div className=" h-full w-full flex lg:gap-9 gap-5  border-2">
        <div className="w-3/12 md:block hidden">
          <FilterPanel />
        </div>

        <div className="md:w-9/12 w-full  border border-gray-900 fl ex-4">
          <CourseWraper />

        </div>
      </div>
    </div>
  );
};

export default Courses;

