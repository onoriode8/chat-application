import axios from "axios";

import * as actionTypes from './action-types';


const allUsers = (data) => {
    console.log("[fetch dispatch]", data)
    return {
        type: actionTypes.FETCH_USERS,
        payload: data
    }
}

const errorHandlerFetchingUser = (errors) => {
    return {
        type: actionTypes.ERRORS,
        errors: errors
    }
}

//backendURL
// const backendURL = "https://backend-chat-application.onrender.com/users" //comment back on after trying.
const backendURL = "http://localhost:8080/users"


export const fetchUsers = () => {
    console.log("[FETCH ALL USERS SUCCESSFUL]");
    return dispatch => {
        const request = async () => {
            try {
                const response = await fetch(`${backendURL}/upload/images`);
                const responseData = await response.json();
                if (response.ok === false) {
                    throw new Error("user not found")
                }
                // const slice = responseData.slice(0, 9);
                // console.log("[DATA]", slice)
                dispatch(allUsers(responseData));
            } catch (err) {
                dispatch(errorHandlerFetchingUser(err.message))
            }
        }

        request();
    }

}


const dispatchImageUpload = (image) => {
    return {
        type: actionTypes.POST_USER_PROFILE,
        userProfile: image
    }
}

const errorUploadingProfile = (err) => {
    return {
        type: actionTypes.ERROR_UPLOADING_PROFILE,
        error: err
    }
}

const spinnerUploadingProfile = (spinner) => {
    return {
        type: actionTypes.SPINNER_UPLOADING_PROFILE,
        spinner: spinner
    }
}


export const userProfileHandlerFun = (imageList, id, token) => {
    
    return dispatch => {
        const postUserImage = async () => {
        console.log("ID & TOKEN", id, token);
        const url = `${backendURL}/profile/${id}`
        console.log("URL", url)
            console.log("[CLIENT-PROFILE-UPLOAD]", imageList);
            try {
                const formData = new FormData();
                formData.append("image", imageList)
                formData.append("name", "Javscript")
                // const image = formData.get("image");
                dispatch(spinnerUploadingProfile(true))
                const response = await fetch(`${backendURL}/profile/${id}`, {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        "authorization": "Bearer " + token
                    },
                    formData
                });
                console.log("SERVER-RESPONSE");
                const responseData = await response.json();
                if (response.ok === false) {
                    throw new Error("user not found")
                }
                dispatch(spinnerUploadingProfile(false))
                console.log("SERVER-RESPONSE", responseData)
                alert("Uploaded successful");
                dispatch(dispatchImageUpload(responseData.image));
            } catch (err) {
                dispatch(spinnerUploadingProfile(false))
                dispatch(errorUploadingProfile(err.message))
            }
        }
        postUserImage();
    }
}