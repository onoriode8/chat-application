import { useState, useEffect, createContext } from "react";
// import { MdSentimentSatisfiedAlt } from "react-icons/md";

import { withRouter } from 'react-router-dom'

export const Context = createContext({
    settingDropdown: false,
    settingDropdownFunc: () => {},
    side: false,
    sideHandler: () => {},
    authentication: false,
    token: null,
    email: null,
    id: null,
    image: null,
    username: null,
    login: () => {},
    logout: () => {},
    authenticationPageSwitch: false,
    switchAuthenticationPageFunc: () => {},
});


const ContextHook = (props) => {
    const [dropdown, setDropdown] = useState(false);
    const [side, setSide] = useState(false);
    const [switchPage, setSwitchPage] = useState(false);
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);
    const [id, setId] = useState(null);
    const [image, setImage] = useState(null);
    const [username, setUsername] = useState(null);

    
    // const [storageToken, setStorageToken] = useState(null);
    // const [storageId, setStorageId] = useState(null);

    console.log("FROM CONTEXT LINE 39", props);
    useEffect(() => {
        const data = sessionStorage.getItem("data");
        if(data === null) return;
        const parsedData = JSON.parse(data);
        setToken(parsedData.token);
        setId(parsedData.id);
        // setStorageToken(parsedData.token);
        // setStorageId(parsedData.id);
    }, []);


    const dropdownHandler = () => {
        setDropdown(!dropdown);
    };

    const switchAuthPage = () => {
        const prevState = switchPage
        setSwitchPage(!prevState);
    };

    const sideHandler = () => {
        const prevState = side;
        setSide(!prevState);
    }

    const logoutHandler = () => {
        setAuth(false)
        setToken(null)
        setEmail(null)
        setId(null)
        setImage(null)
        setUsername(null)
        props.history.push("/auth");
    }

    const loginHandler = (username, token, email, id, image) => {
        setAuth(true)
        setUsername(username)
        setToken(token)
        setEmail(email)
        setId(id)
        setImage(image)
    }

    return (
        <Context.Provider 
           value={{ settingDropdown: dropdown, 
                settingDropdownFunc: dropdownHandler, 
                side: side, sideHandler: sideHandler, 
                authenticationPageSwitch: switchPage, 
                switchAuthenticationPageFunc: switchAuthPage,
                auth: auth, logout: logoutHandler, login: loginHandler,
                token: token, email: email,
                id: id, image: image, username: username
            }}>
            {props.children}
        </Context.Provider>
    )
};

export default withRouter(ContextHook)