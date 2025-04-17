const Info = ({ text, icon }) => {
    return (
        <div className=" flex gap-1 font-normal text-[14px] text-[#7F7E97] ">
            <div>
                 {icon}
            </div>

            <p className="truncate max-w-[80px]
">
                {text}
            </p>
                  
        
                  </div>
    )
}

export default Info;