import logo from "../../../assests/cosmetic_logo.webp"

import classes from "./logo.module.css";


export const Logo = ({sideDrawerlogoStyle}) => 
    <div>
        <img className={sideDrawerlogoStyle ? 
            classes.sideDrawerLogoStyle : classes.logo} 
           src={logo} alt="" 
        />
    </div>