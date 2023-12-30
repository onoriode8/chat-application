// import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

// import { Context } from "../../../../hooks/context";

import "./settings-dropdown.css"


export default function SettingsDropdown(props) {
    // const {settingsDropdown} = useContext(Context);

    let history = useHistory();

    const logoutFunc = () => {
        sessionStorage.removeItem("data");
        history.push("/auth");
    };

    return (
        <div>
            <div className="settings_dropdown">
                <div className="settings_div">
                    <div><NavLink to={`${props.userId}/add_place`}>Add Place</NavLink></div>
                    <div><NavLink to={`/view_posts/${props.userId}`}>View Posts</NavLink></div>
                    <div><NavLink to={`${props.userId}/chat`}>Chat</NavLink></div>
                    <div><NavLink to={`/user_profile/${props.userId}`}>Profile</NavLink></div>
                    <div><NavLink>{props.email}</NavLink></div>
                    <div onClick={logoutFunc}><NavLink to="/logout">Logout</NavLink></div>
                </div>
            </div>
        </div>
    );
}