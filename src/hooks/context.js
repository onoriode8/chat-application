import { useState, createContext } from "react";


export const Context = createContext({
    settingDropdown: false,
    settingDropdownFunc: () => {},
    side: false,
    sideHandler: () => {},
    logout: () => {},
    authenticationPageSwitch: false,
    switchAuthenticationPageFunc: () => {}
});


const ContextHook = (props) => {
    const [dropdown, setDropdown] = useState(false);
    const [side, setSide] = useState(false);
    const [switchPage, setSwitchPage] = useState(false);


    const dropdownHandler = () => {
        setDropdown(!dropdown)
    };

    const switchAuthPage = () => {
        setSwitchPage(!switchPage);
    };

    const sideHandler = () => {
        const prevState = side;
        setSide(!prevState);
    }

    return (
        <Context.Provider 
           value={{ settingDropdown: dropdown, 
                settingDropdownFunc: dropdownHandler, 
                side: side, sideHandler: sideHandler, 
                authenticationPageSwitch: switchPage, 
                switchAuthenticationPageFunc: switchAuthPage
            }}>
            {props.children}
        </Context.Provider>
    )
};

export default ContextHook