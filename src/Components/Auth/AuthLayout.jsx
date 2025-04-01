import { div, mark } from "framer-motion/client";
import character from "../../assets/Image/auth/character.svg"
import yellow from "../../assets/Image/auth/yellow.svg"
import { IoHome } from "react-icons/io5";
import { IconContext } from "react-icons";
import DarkMode from "../../Configs/Themes/DarkMode";
import { Outlet } from "react-router-dom";
const AuthLayout = () => { 
    return (
        <div className="bg-[#5751E1] w-full h-screen flex justify-center items-center px-4 py-6 sm:px-8 sm:py-12 md:px-24 md:py-28 ">
            <div className=" bg-white/50 rounded-4xl flex flex-row-reverse  w-full h-full">
               
                
                <div className="h-full w-0 md:w-1/2 lg:w-3/5 ] bg-no-repeat bg-left-bottom px-12 py-12 flex flex-col">
                    <div className="w-full h-[40px] flex gap-4 flex-row-reverse">
                        <IconContext.Provider value={{ className: "text-3xl text-[#5751E1]" }}>
                        <IoHome />
                        </IconContext.Provider>
                        <DarkMode size={30} moonColor = {'white'} sunColor = {'#5751E1'} />
                        </div>
                    <div className="w-full h-full bg-no-repeat bg-left-bottom bg-[url('/src/assets/Image/auth/character.svg')] bg-[auto_300px] " >
                        <div className="font-semibold text-3xl">
                            هرگز از 
                            <div className="relative  inline flex justify-center w-fit px-7">
                                <img src={yellow} alt=""  className="lg:absolute lg:top-0  lg:bottom-0 lg:left-0 lg:right-0 lg:z-0 w-fit hidden lg:inline  "/>
                            <span className="bg-no-repeat z-10 relative text-white baseline- "  > یادگیری </span>
                            </div>
                           
                        </div>    
                        <div className="font-semibold text-3xl">                            دست نکشید زندگی هرگز از آموزش دست نمیکشد  
                        </div>
                        
                    </div>
                </div>
                <div className="h-full rounded-4xl md:shadow-black md:shadow-[10px_10px] p-11  bg-white w-full md:w-1/2 lg:w-2/5 ">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default AuthLayout;
