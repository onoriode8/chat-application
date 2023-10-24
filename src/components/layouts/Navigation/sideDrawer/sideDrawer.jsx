import { NavLink } from "react-router-dom";


import classes from "./sideDrawer.module.css"

const sideDrawer = ({sideDrawerOpen, sideDrawerOpenHandler}) => {
    let assignClasses = [classes.SideDrawer, classes.SideDrawer_close];
    if(sideDrawerOpen) {
        assignClasses = [classes.SideDrawer, classes.SideDrawer_open];
    };

    return (
        <div>
        <div className={assignClasses.join(" ")}>
            <div className={classes.cont}>
                <div>LOGO</div>
                <div className={classes.text}>RUKKY EMPIRE</div>
                <div onClick={sideDrawerOpenHandler}>X</div>
            </div>
            <hr />
            <div>
                <ul className={classes.ul_navlink}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/hair_making">Hair Making</NavLink>
                    <NavLink to="/ped_med">Pedicure & Manicure</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default sideDrawer;