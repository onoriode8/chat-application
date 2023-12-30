import { useContext } from 'react';

import { MdArrowDropDown } from "react-icons/md";

import SettingsDropdown from "./settings-dropdown/settings-dropdown";
import { Context } from '../../../hooks/context';


import "./settings.css";

export const Settings = () => {
    const { settingDropdown, settingDropdownFunc, id, email } = useContext(Context);
    // console.log(context)
    return (
        <div>
            <div className="settings" onClick={settingDropdownFunc}>
                <div>Settings</div>
                <MdArrowDropDown />
            </div>
            {settingDropdown && <SettingsDropdown userId={id} email={email} />}
        </div>
    )
}