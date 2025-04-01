import { useLocation, useNavigate } from "react-router-dom";
import NavbarMd from "./NavbarMd";
import NavbarSm from "./NavbarSm";
import { div } from "framer-motion/client";

const Header = () => {
  return (
    <div>
      <NavbarMd />
      <NavbarSm />
    </div>
  );
};

export default Header;
