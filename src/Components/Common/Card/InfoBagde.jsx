const InfoBadge = ({text, icon}) => {
    return (
        <div className="w-[69px] h-7 items-center justify-center flex  bg-[#EFEFF1] rounded-[50px] font-medium  text-[13px] leading-3.5 text-[#161439] ">
         {icon}{text}
      </div>
    )
}
export default InfoBadge