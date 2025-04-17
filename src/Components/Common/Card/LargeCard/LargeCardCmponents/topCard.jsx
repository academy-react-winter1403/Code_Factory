import { GoHeartFill } from "react-icons/go";
const TopCard = ({ handelClickHeart, handelCompareClick, heartColor }) => {

    return (
        <div className="w-1/3 justifuy-center  ">
        <img src="/course_thumb03.jpg.png" alt="" />
        <div className="flex justify-center gap-11 items-center">
          <div
            className=" top-2.5 left-2.5 rounded-[6px]  bg-white size-9  flex justify-center items-center p-1.5 hover:cursor-pointer"
            onClick={handelClickHeart}
          >
            <GoHeartFill className="size-full" fill={heartColor} />
          </div>
          <div
            className=" top-2.5 right-2.5 rounded-[6px]  bg-white size-9  flex justify-center items-center p-1.5 hover:cursor-pointer"
            onClick={handelCompareClick}
          >
            <img src="Vector.svg" alt="" />
          </div>
        </div>
      </div>
    )
}
export default TopCard