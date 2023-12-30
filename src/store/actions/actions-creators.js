// import { useCallback, useMemo } from 'react';


import * as actionTypes from './action-types';


const allUsers = (data) => {
    console.log("[fetch dispatch]", data)
    return {
        type: actionTypes.FETCH_USERS,
        payload: data
    }
}

export const fetchUsers = () => {
    console.log("[FETCH ALL USERS SUCCESSFUL]");
    return dispatch => {
        const request = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const responseData = await response.json();
                if (response.ok === false) {
                    throw new Error("user not found")
                }
                const slice = responseData.slice(0, 9);
                console.log("[SLICE DATA]", slice)
                dispatch(allUsers(slice));
            } catch (err) {
                console.error(err.message)
            }
        }

        request();
    }

}


export const dispatchImageUpload = (image) => {
    return {
        type: actionTypes.POST_USER_PROFILE,
        userProfile: image
    }
}


export const userProfileHandlerFun = (imageList) => {
    return dispatch => {
        const postUserImage = async () => {
            console.log("[CLIENT-PROFILE-UPLOAD]", imageList);
            try {
                const response = await fetch("http://localhost:8080/users/profile/id", {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        "authorization": "token from server"
                    },
                    body: imageList
                });
                const responseData = await response.json();
                if (response.ok === false) {
                    throw new Error("user not found")
                }
                dispatch(dispatchImageUpload(responseData.image));
            } catch (err) {
                console.error(err.message)
            }
        }
        postUserImage();
    }
}