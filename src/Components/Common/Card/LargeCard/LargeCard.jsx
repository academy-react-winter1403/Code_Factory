
import TopCard from "./LargeCardCmponents/topCard";
import CardBody from "./LargeCardCmponents/CardBody";
import BottomCrad from "./LargeCardCmponents/BottomCrad";
import { useHeartColor } from "../../../../Core/Hooks";

const LargeCard = ({ handelCompareClick }) => {
  const [heartColor, setHeartColor] = useHeartColor();
  return (
    <div>
      <div className="w-[1080px]">
        <div className="flex   border-1 border-[#B5B5C380]/50 rounded-xl relative p-7 w-full justify-center items-center ">
          <TopCard
            handelClickHeart={() => setHeartColor}
            handelCompareClick={() => handelCompareClick()}
            heartColor={heartColor}
          />
          <div className="w-2/3 h-full flex flex-col  justify-center items-center">
            <CardBody />
            <div className="w-11/12 h-[1px] bg-[#E3E3F0] mt-5 mb-3.5"></div>
            <BottomCrad />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
