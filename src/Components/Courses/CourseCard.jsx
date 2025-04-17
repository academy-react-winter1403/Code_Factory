import { useState } from "react";
import { cn } from "../../lib/utils";

const CourseCard = () => {
  const [isMiniCard, setIsMiniCard] = useState(false);

  return (
    <div className="border border-black w-fit">
      <div
        className={cn(
          "flex border-1 border-black rounded-xl",
          isMiniCard
            ? "flex-col w-[348px] h-[470px]"
            : "flex-row w-[1080px] h-[311px]"
              )}
      >
        <div
          className={cn(
            "border-red-800 border-2 bg-red-800",
            isMiniCard ? "w-full h-1/3" : "h-full w-[290px]"
          )}
        ></div>
        <div
          className={cn(
            "border-2 border-blue-700",
            isMiniCard ? "h-2/3 w-full" : "h-full w-full"
          )}
        >
          <h3>کللاس </h3>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <div className="bg-gray-700 px-2"> hjjhh</div>
              <div className="bg-gray-700 px-2">khkh</div>
            </div>
            <div>5*s</div>
          </div>
        </div>
      </div>
      <div>المان های پایین</div>
    </div>
  );
};

export default CourseCard;

