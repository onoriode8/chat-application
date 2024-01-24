import { useContext } from "react";
// import { NavLink } from "react-router-dom";

import NavItems from "../navigation/navItems"
import { Backdrop } from "./backdrop/backdrop";

import sideDrawerCss from './side-drawer.module.css'
import { Context } from "../../../../hooks/context";


const SideDrawer = () => {
    const { side } = useContext(Context);

    let assignClasses = [sideDrawerCss.SideDrawer, sideDrawerCss.close];
    if (side) {
        assignClasses = [sideDrawerCss.SideDrawer, sideDrawerCss.open];
    }
    return (
        <>
            <div className={assignClasses.join(" ")}>
            {/* {side && <Backdrop />} */}
                <NavItems side={true} fontSize="8px" />
            </div> 
        </> 
    );
}

export default SideDrawer;

