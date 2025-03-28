import { Route, Routes } from "react-router-dom"
import Layout from "../../App/Layout/Layout"
import LandingPage from "../../Pages/Landing/index"
import CoursesPage from "../../Pages/Courses"
import CourseDetailPage from "../../Pages/CourseDetail"
import AboutUsPage from "../../Pages/AboutUs"
import TeachersPage from "../../Pages/Teachers"
import TeacherDetailPage from "../../Pages/TeacherDetail"
import ContactUsPage from "../../Pages/ContactUs"
import WeblogPage from "../../Pages/Weblog"
import WeblogDetailPage from "../../Pages/WeblogDetail"
import ComparePage from "../../Pages/Compare"
import CartPage from "../../Pages/Cart"
import NotFoundPage from "../../Pages/404"
import SignUpPage from "../../Pages/Auth/SignUp"
import SignInPage from "../../Pages/Auth/SignIn"
import ForgetPasswordPage from "../../Pages/Auth/ForgetPass"


const RouterConfigs = () => { 
    return (
        <Routes> 
            <Route path="/" element={<Layout />} >
                <Route path="/" exact element={<LandingPage />} />
                <Route path='/courses' element={<CoursesPage />} />
                <Route path="/course-detail" element={<CourseDetailPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/teachers" element={<TeachersPage />} />
                <Route path="/teachers/:id" element={<TeacherDetailPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/weblog" element={<WeblogPage />} />
                <Route path="/weblog/:id" element={<WeblogDetailPage />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
        </Routes>
            
          )
    
}

export default RouterConfigs