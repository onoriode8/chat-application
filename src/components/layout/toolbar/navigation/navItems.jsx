import { useContext } from "react";

import { NavLink } from "react-router-dom";
import { FaUsers } from 'react-icons/fa';
import { GiThreeFriends } from 'react-icons/gi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { BsUpload } from "react-icons/bs"
import { RiLogoutCircleLine } from "react-icons/ri"
import { TiHome } from 'react-icons/ti'
import { Context } from "../../../../hooks/context";

import navItemsCss from './navItems.module.css';


const NavItems = (props) => {
    const { sideHandler } = useContext(Context);
    return (
        <nav>
            {props.side && <div style={{fontSize: "50px", textAlign: "start"}}
            onClick={sideHandler}>X</div>}
            <ul onClick={sideHandler} style={{fontSize: props.fontSize}} className={props.side ? navItemsCss.side : navItemsCss.ul_cont}>
                <li><NavLink to="/"><TiHome className={navItemsCss.icon} /> Home</NavLink></li>
                <li><NavLink to={`/all_user/${props.userId}`}><FaUsers className={navItemsCss.icon} /> AllUsers</NavLink></li>
                <li><NavLink to="friends"><GiThreeFriends className={navItemsCss.icon} /> Friends</NavLink></li>
                <li><NavLink to="/add_posts"><BsUpload className={navItemsCss.icon} /> AddPosts</NavLink></li>
                <li><NavLink to="/notifications"><IoNotificationsOutline className={navItemsCss.icon} /> Notifications</NavLink></li>
                <li><NavLink to="/logout"><RiLogoutCircleLine className={navItemsCss.icon} /> Logout</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavItems;