import { useState, createContext } from "react";


export const Context = createContext({
    settingDropdown: false,
    settingDropdownFunc: () => {},
    side: false,
    sideHandler: () => {},
    logout: () => {}
});


const ContextHook = (props) => {
    const [dropdown, setDropdown] = useState(false);
    const [side, setSide] = useState(false);


    const dropdownHandler = () => {
        setDropdown(!dropdown)
    };

    const sideHandler = () => {
        const prevState = side;
        setSide(!prevState);
    }

    return (
        <Context.Provider 
           value={{ settingDropdown: dropdown, 
                settingDropdownFunc: dropdownHandler, 
                side: side, sideHandler: sideHandler 
            }}>
            {props.children}
        </Context.Provider>
    )
};

export default ContextHook