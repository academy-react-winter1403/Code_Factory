import { useState } from "react";
import useDarkMode from "./useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { tr } from "framer-motion/client";
const DarkMode = (props) => { 
    const [toggletheme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(
        toggletheme ==="light" ? true : false
    );
    const toggleDarkMode = (checked) => { setTheme(toggletheme) , setDarkMode(checked); }
    return (
        <DarkModeSwitch 
            checked={darkMode}
            onChange={toggleDarkMode}
            size={props.size}
            moonColor={props.moonColor}
            sunColor={props.sunColor}
            />
    )
    
}
export default DarkMode;