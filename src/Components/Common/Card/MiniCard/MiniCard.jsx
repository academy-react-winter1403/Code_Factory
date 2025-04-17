import { GoHeartFill } from "react-icons/go";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import InfoBadge from "../InfoBagde";
import Info from "../Info";
import { SlLayers } from "react-icons/sl";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { LuCalendar } from "react-icons/lu";
import { useHeartColor } from "../../../../Core/Hooks";

const MiniCard = ({ handelCompareClick }) => {
  const [heartColor, setHeartColor] = useHeartColor();
  return (
    <div className="w-[350px]">
      <div className="flex flex-col  border-1 border-[#B5B5C380]/50 rounded-xl relative p-7 w-full justify-center items-center ">
        <div className="flex flex-col gap-4 w-full">
          <div className="relative ">
            <img src="/course_thumb03.jpg.png" alt="" />
            <div
              className="absolute top-2.5 left-2.5 rounded-[6px]  bg-white size-9  flex justify-center items-center p-1.5 hover:cursor-pointer"
              onClick={setHeartColor}
            >
              <GoHeartFill className="size-full" fill={heartColor} />
            </div>
            <div
              className="absolute top-2.5 right-2.5 rounded-[6px]  bg-white size-9  flex justify-center items-center p-1.5 hover:cursor-pointer"
              onClick={handelCompareClick}
            >
              <img src="Vector.svg" alt="" />
            </div>
          </div>
          <h3 className="font-semibold text-[18px] text-[#161439] leading-6  ">
            طراحی کامل گرافیک برای مبتدی ها
          </h3>
          <div className="   flex justify-between items-center">
            <div className="flex gap-1">
              <InfoBadge text="مبتدی" icon="" />
              <InfoBadge text="بک اند" icon="" />
            </div>
            <Info text="5" icon={<FaStar fill="#F8BC24" size={16} />} />
          </div>
          <div className=" flex justify-between items-center">
            <Info text="12" icon={<HiOutlineUsers size={20} />} />
            <Info text="متوسط" icon={<SlLayers size={20} />} />
          </div>
          <div className=" flex justify-between items-center gap-16 w-full shrink">
            <Info
              text=" محسنمحسنمحسنمحسنمحسنمحسنمحسن"
              icon={<HiOutlineAcademicCap size={20} />}
            />
            <div className="flex gap-2 items-center">
              <InfoBadge text="71" icon={<AiOutlineDislike size={20} />} />
              <InfoBadge text="169" icon={<AiOutlineLike size={20} />} />
            </div>
          </div>
        </div>

        <div className="w-10/12 h-[1px] bg-[#E3E3F0] mt-4 mb-2.5"></div>
        <div className="flex justify-between items-center w-full">
          <div>
            <Info text=" 1403/4/21" icon={<LuCalendar size={20} />} />
          </div>
          <div className="font-medium text-[#5F5F66] text-xl">
            <span className="font-bold text-[#5751E1] text-xl"> 190 هزار </span>{" "}
            تومان
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
