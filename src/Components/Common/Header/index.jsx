// import { useLocation } from "react-router-dom"
import NavbarMd from "./NavbarMd"
import NavbarSm from "./NavbarSm"
const Header = () => {
    // const location = useLocation()
    // const pathname = location.pathname
    // const paths = [{ path: "/", text: "کارت های من" },{ path: "/courses", text: "دوره ها" }]
    
    return (
        <div>
            {/* {pathname}
            {paths.find(el=>el.path===pathname?.text } */}
            <NavbarMd />
            <NavbarSm />
        </div>
    )
}
export default Header