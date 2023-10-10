import logo from "../../../assests/cosmetic_logo.webp"

import classes from "./logo.module.css";


export const Logo = () => 
    <div>
        <img className={classes.logo} src={logo} alt="" />
    </div>