
import Info from "../../Info";
import { FaStar } from "react-icons/fa";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";
import { SlLayers } from "react-icons/sl";
import InfoBadge from "../../InfoBagde";

const CardBody = () => {
  return (
    <div className=" h-7/10 flex flex-col gap-5 w-full">
      <h3 className="font-semibold text-[18px] text-[#161439] leading-6  ">
        طراحی کامل گرافیک برای مبتدی ها
      </h3>
      <div className="   flex justify-between items-center">
        <div className="flex gap-2">
          <InfoBadge text="مبتدی" icon="" />
          <InfoBadge text="بک اند" icon="" />
        </div>
        <Info text="5" icon={<FaStar fill="#F8BC24" size={16} />} />
      </div>
      <p className="max-w-[570px] truncate">
        این دوره برای افراد مبتدی و تازه کار است که در آن مباحث پایه ای طراحی
        گرافیک این دوره برای افراد مبتدی و تازه کار است که در آن مباحث پایه ای
        طراحی گرافیک و
      </p>
      <div className=" flex justify-between items-center">
        <div className="flex w-6/10 justify-between">
          <Info text="12" icon={<HiOutlineUsers size={20} />} />
          <Info text="متوسط" icon={<SlLayers size={20} />} />
          <Info
            text=" محسنمحسنمحسنمحسنمحسنمحسنمحسن"
            icon={<HiOutlineAcademicCap size={20} />}
          />
        </div>
        <div className="flex gap-2 items-center">
          <InfoBadge text="71" icon={<AiOutlineDislike size={20} />} />
          <InfoBadge text="169" icon={<AiOutlineLike size={20} />} />
        </div>
      </div>
    </div>
  );
};
export default CardBody;
