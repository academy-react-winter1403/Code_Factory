import Info from "../../Info";
import { LuCalendar } from "react-icons/lu";
const BottomCrad = () => {
  return (
    <div className="flex justify-between w-full b">
      <div>
        <Info text=" 1403/4/21" icon={<LuCalendar size={20} />} />
      </div>
      <div className="font-medium text-[#5F5F66] text-xl">
        <span className="font-bold text-[#5751E1] text-xl"> 190 هزار </span>{" "}
        تومان
      </div>
    </div>
  );
};

export default BottomCrad;
