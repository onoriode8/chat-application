import React from "react";
import { AiOutlineMenu } from "react-icons/ai"

import classes from "./navigation.module.css";
import { NavEnd } from "../nav-end/nav_end";
import { Logo } from "../logo/logo";

const navigation = ({sideDrawer, sideDrawerlogoStyle, clicked}) => (
    <nav>
        <div className={classes.cont}>
            <div className={classes.menu_icon} onClick={clicked}><AiOutlineMenu /></div>
            <Logo sideDrawerlogoStyle={sideDrawerlogoStyle}/>
        </div>
        <ul className={sideDrawer ? classes.nav_sideDrawer_container : classes.ul_lists}>
            <Logo sideDrawerlogoStyle={sideDrawerlogoStyle}/>
            <li>mission & vision</li>
            <li>shop</li>
            <li>Build Routine</li>
            <li>Get Recommended</li>
            <li>Case Studies</li>
            <li>Educational Resources</li>
            <li>Blog</li>
            <li>Raving Reviews</li>
            {sideDrawer ? <li>logout</li> : <NavEnd />}
        </ul>
    </nav>
);

export default navigation;