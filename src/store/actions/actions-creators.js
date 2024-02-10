import axios from "axios";

import * as actionTypes from './action-types';


const allUsers = (data) => {
    console.log("[fetch dispatch]", data)
    return {
        type: actionTypes.FETCH_USERS,
        payload: data
    }
}

const spinnerUploadingProfile = (spinner) => {
    return {
        type: actionTypes.SPINNER_UPLOADING_PROFILE,
        spinner: spinner
    }
}

const errorHandlerFetchingUser = (errors) => {
    return {
        type: actionTypes.ERRORS,
        errors: errors
    }
}

//backendURL
//const backendURL = "https://backend-chat-application.onrender.com/users" //comment back on after trying.
const backendURL = "http://localhost:8080/users"


export const fetchUsers = (token) => {
    console.log("[FETCH ALL USERS SUCCESSFUL]");
    return dispatch => {
        const request = async () => {
            try {
                // dispatch(spinnerUploadingProfile(true))
                const response = await fetch(`${backendURL}/users/`, {
                    headers: {
                        "Authorization" : "Bearer " + token
                    }
                });
                const responseData = await response.json();
                console.log("line 45", responseData)
                if (response.ok === false) {
                    throw new Error(responseData)
                }
                dispatch(spinnerUploadingProfile(false))
                console.log("line 45", responseData)
                dispatch(allUsers(responseData));
            } catch (err) {
                dispatch(spinnerUploadingProfile(false))
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

// const spinnerUploadingProfile = (spinner) => {
//     return {
//         type: actionTypes.SPINNER_UPLOADING_PROFILE,
//         spinner: spinner
//     }
// }


export const userProfileHandlerFun = (imageList, id, token) => {
    return dispatch => {
        const postUserImage = async () => {
            try {
                const formData = new FormData();
                formData.append("image", imageList);
                dispatch(spinnerUploadingProfile(true))
                const response = await axios.post(`${backendURL}/profile/${id}`, formData, {
                    headers: { 
                        "Content-Type": "multipart/form-data",
                        "Authorization": "Bearer " + token
                    }
                });
                const image = response.data.lastImageUploaded
                sessionStorage.setItem("user_Image", JSON.stringify(image))
                dispatch(spinnerUploadingProfile(false))
                alert("Uploaded successful");
                dispatch(dispatchImageUpload(image));
            } catch (err) {
                dispatch(spinnerUploadingProfile(false))
                dispatch(errorUploadingProfile(err.message))
            }
        }
        postUserImage();
    }
}