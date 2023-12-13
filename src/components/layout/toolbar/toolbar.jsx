
import { useContext } from "react";
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { MdArrowDropDown } from "react-icons/md";


import { CiMenuBurger } from "react-icons/ci";

import { Logo } from "./logo/logo"
import { Settings } from "../settings/settings";
import { Context } from "../../../hooks/context";

import "./toolbar.css";

import appleImage from '../../../assests/apple.jpg'

const Toolbar = (props) => {
    const { sideHandler } = useContext(Context);
    return (
        <div className="toolbar_wrapper">
            <div className='toolbar'>
                <Logo />
                {!props.userProfile || "user-profile-server-here" ?
                    <div className="profile"><NavLink to={`/user_profile/${props.userId}`}>Profile</NavLink></div>
                    :
                    <div>
                        <img style={{ width: "25px", height: "25px", borderRadius: "100px" }}
                            src={appleImage} alt="" />
                        <MdArrowDropDown />
                    </div>}
                <Settings />
                <div className="chat"><NavLink to={`/chat`}>Chat</NavLink></div>
                <div className="menu" onClick={sideHandler}>
                    <CiMenuBurger />
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        userProfile: state.users.userProfile
    }
}


export default connect(mapStateToProps)(Toolbar);