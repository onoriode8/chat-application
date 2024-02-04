import { useContext } from "react";
import { NavLink } from "react-router-dom";

import NavItems from "../navigation/navItems"
// import { Backdrop } from "./backdrop/backdrop";
// import Profile from  '../../../../containers/profile/toolbar-profile/toolbar-profile'

import sideDrawerCss from './side-drawer.module.css'
import { Context } from "../../../../hooks/context";


const SideDrawer = () => {
    const { side, id, sideHandler } = useContext(Context);

    let assignClasses = [sideDrawerCss.SideDrawer, sideDrawerCss.close];
    if (side) {
        assignClasses = [sideDrawerCss.SideDrawer, sideDrawerCss.open];
    }
    return (
        <>
            <div className={assignClasses.join(" ")}>
                <div className={sideDrawerCss.wrapper}>
                    <NavItems side={true} fontSize="8px" />
                    <div className={sideDrawerCss.select} onClick={sideHandler}>
                        <NavLink to={`/user_profile/${id}`}>Profile</NavLink>
                        <div>Settings</div>
                        <NavLink to={`${id}/chat`}>Chat</NavLink>
                    </div>
                </div>
            </div> 
        </> 
    );
}

export default SideDrawer;

