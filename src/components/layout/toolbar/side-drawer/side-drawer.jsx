import { useContext } from "react";
import { NavLink } from "react-router-dom";

import NavItems from "../navigation/navItems"

import sideDrawerCss from './side-drawer.module.css'
import { Context } from "../../../../hooks/context";


const SideDrawer = () => {
    const { side } = useContext(Context);

    let assignClasses = [sideDrawerCss.SideDrawer, sideDrawerCss.close];
    if(side) {
        assignClasses = [sideDrawerCss.SideDrawer, sideDrawerCss.open];
    }
    return (
        <div className={assignClasses.join(" ")}>
            {/* <h1>Side Drawer</h1> */}
            <NavItems side={true} fontSize="8px"/>
            {/* <ul className={sideDrawerCss.ul_nav}>
                <li><NavLink to="/"> Home</NavLink></li>
                <li><NavLink to="/all_user">AllUsers</NavLink></li>
                <li><NavLink to="friends">Friends</NavLink></li>
                <li><NavLink to="/add_posts">AddPosts</NavLink></li>
                <li><NavLink to="/notifications">Notifications</NavLink></li>
                <li><NavLink to="/logout">Logout</NavLink></li>
            </ul> */}
        </div>
    );
}

export default SideDrawer;

