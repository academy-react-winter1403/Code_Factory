import {Field} from "formik"
const CustomField = ({name , type , placeholder }) => {
    
    return (
        <Field name={name} type={type} placeholder={placeholder}  className="w-full bg-[#FBFBFB] inset-shadow-sm inset-shadow-gray-200 rounded-full py-3 px-7 focus:outline-1 focus:outline-gray-300
        my-3 "  />
    )
}

export default CustomField