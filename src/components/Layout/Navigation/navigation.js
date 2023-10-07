import React from "react";

import classes from "./navigation.module.css";

const navigation = () => (
    <nav>
        <ul className={classes.ul_lists}>
            <li>mission & vision</li>
            <li>shop</li>
            <li>Build Routine</li>
            <li>Get Recommended</li>
            <li>Case Studies</li>
            <li>Educational Resources</li>
            <li>Blog</li>
            <li>Raving Reviews</li>
        </ul>
    </nav>
);

export default navigation;