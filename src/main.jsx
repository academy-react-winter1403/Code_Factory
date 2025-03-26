import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Pages/404'
import AboutUs from './Pages/AboutUs'
import ForgetPass from './Pages/Auth/ForgetPass'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'
import Cart from './Pages/Cart'
import Compare from './Pages/Compare'
import ContactUs from './Pages/ContactUs'
import CourseDetails from './Pages/CourseDetails'
import Courses from './Pages/Courses'
import Landing from './Pages/Landing'
import Teachers from './Pages/Teachers'
import TeachersDetail from './Pages/TeachersDetail'
import Weblog from './Pages/Weblog'
import WeblogDetail from './Pages/WeblogDetail'
import Root from './Pages/Root'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          path: '/',
          element: <App />
      },
        {
          path: '/aboutUs',
          element: <AboutUs />
        },
        {
          path: '/auth',
          children: [
            {
          path: 'forgetPass', 
          element: <ForgetPass />
            }, 
            {
              path: 'signIn',
              element: <SignIn />
            }, 
            {
              path: 'signUp',
              element: <SignUp />
            }
          ]
        }
        ,
        {
          path: '/cart', 
          element: <Cart />
        }
        , {
          path: '/compare', 
          element: <Compare />
        },
        {
          path: '/ContactUs',
          element: <ContactUs />
        }, 
        {
          path: 'courseDetails',
          element: <CourseDetails />
        },
        {
          path: 'Courses',
          element: <Courses />
        },
        {
          path: 'landing', 
          element: <Landing />
        },
        {
          path: 'teachers', 
          element: <Teachers />
        },
        {
          path: 'teachersDetail',
          element: <TeachersDetail />
        }, 
    
        {
          path: 'weblog', 
          element: <Weblog />
        }, 
        {
          path: 'weblogDetail',
          element: <WeblogDetail />
        }
        ,
    
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }, 
    
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
     
  </StrictMode>,
)
