import { Route, Routes } from "react-router-dom"
import { lazy } from "react"
const Layout = lazy(() => import ("../../App/Layout/Layout"));
const LandingPage =lazy(() => import ("../../Pages/Landing/index"))
const CoursesPage = lazy(() => import ("../../Pages/Courses")) 
const CourseDetailPage = lazy(() => import("../../Pages/CourseDetail")) 
const AboutUsPage = lazy(() => import( "../../Pages/AboutUs"))
const TeachersPage = lazy(() => import( "../../Pages/Teachers"))
const TeacherDetailPage =lazy(() => import("../../Pages/TeacherDetail")) 
const ContactUsPage = lazy(() => import("../../Pages/ContactUs")) 
const WeblogPage = lazy(() => import("../../Pages/Weblog")) 
const WeblogDetailPage = lazy(() => import("../../Pages/WeblogDetail")) 
const ComparePage = lazy(() => import("../../Pages/Compare")) 
const CartPage = lazy(() => import("../../Pages/Cart")) 
const NotFoundPage = lazy(() => import( "../../Pages/404"))
const SignUpPage = lazy(() => import("../../Pages/Auth/SignUp")) 
const SignInPage = lazy(() => import("../../Pages/Auth/SignIn")) 
const ForgetPasswordPage = lazy(() => import( "../../Pages/Auth/ForgetPass"))
const AuthLayout = lazy(() => import("../../Components/Auth/AuthLayout")) 
import { IoMic } from "react-icons/io5";


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
            <Route path="/auth" element={<AuthLayout />} >
                <Route path="/auth/sign-in/step-one" element={<SignUpPage />} />
                
            </Route>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
        </Routes>
            
          )
    
}

export default RouterConfigs