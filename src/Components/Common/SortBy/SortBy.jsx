import { div } from "framer-motion/client"
import { MdFormatListBulleted } from "react-icons/md";
import { LuLayoutGrid } from "react-icons/lu";

const SortBy = () => {
    return (
        <div className="flex items-center gap-2">
            <span className="font-normal text-[16px] text-[#7F7E97]">مرتب سازی بر اساس : </span>
            <div>"محبوبیت"
            </div>
            <div>"نزولی"</div>
            <LuLayoutGrid />

            <MdFormatListBulleted />

        </div>
    )
}

export default SortBy