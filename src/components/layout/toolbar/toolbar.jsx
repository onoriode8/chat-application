
import { useContext } from "react";
// import PropTypes from "prop-types";

import { CiMenuBurger } from "react-icons/ci";

import { Logo } from "./logo/logo"
import { Settings } from "../settings/settings";
import { Context } from "../../../hooks/context";

import "./toolbar.css";

const Toolbar = () => {
    const { sideHandler } = useContext(Context);
    return (
        <div className="toolbar_wrapper">
            <div className='toolbar'>
                <Logo />
                <div>Profile</div>
                <Settings />
                <div>Chat</div>
                <div className="menu" onClick={sideHandler}>
                    <CiMenuBurger />
                  </div>
            </div>
        </div>
    );
}


export default Toolbar;