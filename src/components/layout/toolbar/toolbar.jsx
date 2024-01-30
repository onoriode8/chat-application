
import { useContext } from "react";
import { useHistory } from 'react-router-dom'
import PropType from "prop-types";
import { NavLink } from "react-router-dom";


import { CiMenuBurger } from "react-icons/ci";

import { Logo } from "./logo/logo"
import { Settings } from "../settings/settings";
import { Context } from "../../../hooks/context";
import Profile from '../../../containers/profile/toolbar-profile/toolbar-profile';

import "./toolbar.css";

// import appleImage from '../../../assests/apple.jpg'

const Toolbar = () => {
    const { sideHandler, token, id } = useContext(Context);

    let history = useHistory();

    const logoutFunc = () => {
        sessionStorage.removeItem("data");
        sessionStorage.removeItem("user_Image")
        history.push("/auth");
        history.replace("/auth");
    };

    return (
        <div className="toolbar_wrapper">
            <div className='toolbar'>
                <Logo />
                {token !== null && <Profile />}
                {token || id ? <Settings /> : null}
                {token !== null && <div className="chat"><NavLink to={`${id}/chat`}>Chat</NavLink></div>}
                {token !== null && <div className="menu" onClick={sideHandler}>
                    <CiMenuBurger />
                </div>}
                {token === null ? <div><NavLink to="/auth">LogIn</NavLink></div>
                    : <div onClick={logoutFunc}><NavLink to="/logout">Logout</NavLink></div>}
            </div>
        </div>
    );
};


Toolbar.propType = {
    token: PropType.string,
    id: PropType.string
};


export default Toolbar;