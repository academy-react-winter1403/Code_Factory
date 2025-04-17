import { div } from "framer-motion/client"
import SortBy from "../../Common/SortBy/SortBy"

const CourseWraper = () => {
    return (
        <div>
            <div className="flex justify-between items-center w-full border-2 border-red-700">
                <span>نمایش ۲۵۰ از ۲۵۰</span>
                <SortBy />
            </div>
        </div>
    )
}

export default CourseWraper