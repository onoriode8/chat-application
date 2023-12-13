// import { useContext } from "react";
import { NavLink } from "react-router-dom";

// import { Context } from "../../../../hooks/context";

import "./settings-dropdown.css"


export default function settingsDropdown(props) {
    // const {settingsDropdown} = useContext(Context);
    return (
        <div>
            <div className="settings_dropdown">
                <div className="settings_div">
                    <div><NavLink to={`${props.userId}/add_place`}>Add Place</NavLink></div>
                    <div><NavLink to={`/view_posts/${props.userId}`}>View Posts</NavLink></div>
                    <div><NavLink to={`${props.userId}/chat`}>Chat</NavLink></div>
                    <div><NavLink to={`/user_profile/${props.userId}`}>Profile</NavLink></div>
                    <div><NavLink to="/logout">Logout</NavLink></div>
                </div>
            </div>
        </div>
    );
}