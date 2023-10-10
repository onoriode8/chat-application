import React from "react";

import classes from "./navigation.module.css";
import { NavEnd } from "../nav-end/nav_end";
import { Logo } from "../logo/logo";

const navigation = () => (
    <nav>
        <ul className={classes.ul_lists}>
            <Logo />
            <li>mission & vision</li>
            <li>shop</li>
            <li>Build Routine</li>
            <li>Get Recommended</li>
            <li>Case Studies</li>
            <li>Educational Resources</li>
            <li>Blog</li>
            <li>Raving Reviews</li>
            <NavEnd />
        </ul>
    </nav>
);

export default navigation;