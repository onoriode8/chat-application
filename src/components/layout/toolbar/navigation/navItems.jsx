import { useContext, useEffect, useState } from "react";
import { connect } from 'react-redux'

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
    const [image, setImage] = useState(null);
    const [id, setId] = useState(null);

    const { sideHandler } = useContext(Context);

    useEffect(() => {
        // if(userProfile === null) return 
        const data = sessionStorage.getItem("user_Image")
        const image = JSON.parse(data);
        setImage(image)
    }, [props.userProfile]);

    useEffect(() => {
        const data = sessionStorage.getItem("data")
        if(data === null) return
        const image = JSON.parse(data);
        setImage(image.image);
        setId(image.id);
    }, []);

    return (
        <nav>
            {props.side && <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                    <div style={{fontSize: "50px", textAlign: "start"}} onClick={sideHandler}>
                        X
                    </div>
                    <div>
                        <img style={{ width: "25px", height: "25px", borderRadius: "100px" }}
                            src={`http://localhost:8080/${image}`} alt="" /> {/* image[0] */}
                    </div>
                </div>
            }
            <ul onClick={sideHandler} style={{fontSize: props.fontSize}} className={props.side ? navItemsCss.side : navItemsCss.ul_cont}>
                <li><NavLink to="/"><TiHome className={navItemsCss.icon} /> Home</NavLink></li>
                <li><NavLink to={`/all_user/${props.userId ? props.userId : id}`}><FaUsers className={navItemsCss.icon} /> AllUsers</NavLink></li>
                <li><NavLink to="friends"><GiThreeFriends className={navItemsCss.icon} /> Friends</NavLink></li>
                <li><NavLink to="/users/posts"><BsUpload className={navItemsCss.icon} /> AddPosts</NavLink></li>
                <li><NavLink to="/notifications"><IoNotificationsOutline className={navItemsCss.icon} /> Notifications</NavLink></li>
                <li><NavLink to="/logout"><RiLogoutCircleLine className={navItemsCss.icon} /> Logout</NavLink></li>
            </ul>
        </nav>
    );
}

const mapStateToProps = state => {
    return {
        userProfile: state.users.userProfile
    }
}

export default connect(mapStateToProps)(NavItems);