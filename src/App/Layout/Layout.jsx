import Header from "../../Components/Common/Header"
import { Outlet } from "react-router-dom"
import Footer from "../../Pages/Common/Footer"
const Layout = () => {
    return (
        <div>
                <Header />
                <Outlet />
                <Footer />
            
        </div>
    )
}
export default Layout