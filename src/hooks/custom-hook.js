import { useState, useEffect, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import axios from "axios";

import { Context } from './context';


//backendURL
// const backendURL = "https://backend-chat-application.onrender.com/users" //comment back on after trying.
const backendURL = "http://localhost:8080/users"


//useCustom hook for fetching usersFriends
export const useFetch = () => {
    const [data, setData] = useState();
    const [friends, setFriends] = useState([
        { name: "USERNAME 1", id: 1 },
        { name: "USERNAME 2", id: 2 },
        { name: "USERNAME 3", id: 3 },
        { name: "USERNAME 4", id: 4 },
        { name: "USERNAME 5", id: 5 }
    ]);
    const [spinner, setSpinner] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAllFriends = async () => {
            setSpinner(true)
            try {
                const response = await fetch("http://localhost:4000/friends");
                const responseData = await response.json();
                if (response.ok === false) {
                    throw new Error("user not found")
                }
                setSpinner(false);
                const slice = responseData.slice(0, 5);
                setFriends(slice)
            } catch (err) {
                setSpinner(false);
                setError(err.message)
            }
        };
        getAllFriends();
    }, []);

    return { friends }

}

//useCustom hook for fetching posts
export const useFetchPosts = () => {
    const [users, setUsers] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [error, setError] = useState(null);

    const clearErrorHandler = () => {
        setError(null);
    }

    useEffect(() => {
        const getAllUsersPosts = async () => {
            setSpinner(true)
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const responseData = await response.json();
                if (response.ok === false) {
                    throw new Error("user not found")
                }
                setSpinner(false);
                const slice = responseData.slice(0, 10);
                setUsers(slice)
            } catch (err) {
                setSpinner(false);
                setError(err.message)
            }
        };
        getAllUsersPosts();
    }, []);

    return { users, spinner, error, clearErrorHandler }
}


//useCustom Hook for selecting user_profile
export const usePickUserProfile = () => {
    const [userPost, setUserPost] = useState(null);
    const [userProfileUrl, setUserProfileUrl] = useState(null);

    const userProfileRef = useRef();

    const addImageHandler = (event) => {
        event.preventDefault();
        userProfileRef.current.click();
    }

    useEffect(() => {
        if(userPost === null) return
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setUserProfileUrl(fileReader.result);
        }
        fileReader.readAsDataURL(userPost);

    }, [userPost]);

    const pickImageHandler = (event) => {
        const e = event.target.files[0];
        if(!e) return 
        setUserPost(e);

    }

    return { userPost, userProfileUrl, userProfileRef, addImageHandler, pickImageHandler }
}


//useCustom Hook for signin and registering users
export const useAuthenticationFunc = (url) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [closeErrorMessage, setCloseErrorMessage] = useState(false);


    const inputRef = useRef();

    let history = useHistory();

    const { login } = useContext(Context);

    const inputFocusHandler = () => {
        if(email.trim().length !== 0) return
        inputRef.current.focus();
    };
    const submitFormHandler = (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const authRequest = async () => {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ password, email })
                })
                if(response.ok === false) {
                    const errorMessage = await response.json();
                    setLoading(false);
                    setCloseErrorMessage(true)
                    setErrorMessage(errorMessage);
                    return
                };
                const responseData = await response.json();
                setLoading(false);
                login({ token: responseData.token, email: responseData.email, 
                    id: responseData._id, image: responseData.image });
                const data = JSON.stringify({ username: responseData.username,
                    token: responseData.token, id: responseData.id, image: responseData.image })
                sessionStorage.setItem("data", data);
                history.push("/");
                history.replace("/");
                window.location.reload(false);
            }
            authRequest();
        } catch(err) {
            setLoading(false);
            setCloseErrorMessage(true)
            setErrorMessage(err.message);
        }
    } 

    return { loading, closeErrorMessage, setCloseErrorMessage, 
        setEmail, errorMessage, setPassword, submitFormHandler, 
        inputFocusHandler, inputRef }
}