import { NavLink } from "react-router-dom"
import { FcMenu } from 'react-icons/fc';


import classes from './navigation.module.css'

const navigation = (props) => (
    <div>
        <div className={classes.aside}>
            <div onClick={props.sideDrawerOpenHandler} className={classes.icon}><FcMenu /></div>
            <div className={classes.text}>RUKKY EMPIRE</div>
            <div>LOGO</div>
        </div>
        <nav className={classes.main_nav_container}>
            <div>logo</div>
            <ul className={classes.ul_container}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/hair_making">Hair Making</NavLink>
                <NavLink to="/ped_med">Pedicure & Manicure</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </nav>
    </div>
);

export default navigation;