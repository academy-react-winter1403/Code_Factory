import { Route, Routes } from "react-router-dom"
import Layout from "../../App/Layout/Layout"
import Landing from "../../Pages/Landing"
import Courses from "../../Pages/Courses"
import CourseDetail from "../../Pages/CourseDetail"
import AboutUs from "../../Pages/AboutUs"
import Teachers from "../../Pages/Teachers"
import TeacherDetail from "../../Pages/TeacherDetail"
import ContactUs from "../../Pages/ContactUs"
import Weblog from "../../Pages/Weblog"
import WeblogDetail from "../../Pages/WeblogDetail"
import Compare from "../../Pages/Compare"
import Cart from "../../Pages/Cart"
import NotFound from "../../Pages/404"
import SignUp from "../../Pages/Auth/SignUp"
import SignIn from "../../Pages/Auth/SignIn"
import ForgetPassword from "../../Pages/Auth/ForgetPass"


const RouterConfigs = () => { 
    return (
        <Routes> 
            <Route path="/" element={<Layout />} >
                <Route path="/" exact element={<Landing />} />
                <Route path='/courses' element={<Courses />} />
                <Route path="/course-detail" element={<CourseDetail />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/teachers/:id" element={<TeacherDetail />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/weblog" element={<Weblog />} />
                <Route path="/weblog/:id" element={<WeblogDetail />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
            
          )
    
}

export default RouterConfigs