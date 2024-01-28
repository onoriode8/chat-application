
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
                const response = await fetch(`${process.env.REACT_APP_AUTHENTICATION}/upload/images`);
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


export const userProfileHandlerFun = (imageList, id, token) => {
    // const { id, token } = useContext(Context);
    // console.log("ID & TOKEN", id, token);
    return dispatch => {
        const postUserImage = async () => {
        console.log("ID & TOKEN", id, token);
        const url = `${process.env.REACT_APP_AUTHENTICATION}/profile/${id}`
        console.log("URL", url)
            console.log("[CLIENT-PROFILE-UPLOAD]", imageList);
            try {
                const response = await fetch(`${process.env.REACT_APP_AUTHENTICATION}/profile/${id}`, {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        "authorization": "Bearer " + token
                    },
                    body: JSON.stringify(imageList)
                });
                console.log("SERVER-RESPONSE");
                const responseData = await response.json();
                if (response.ok === false) {
                    throw new Error("user not found")
                }
                console.log("SERVER-RESPONSE", responseData)
                dispatch(dispatchImageUpload(responseData.image));
            } catch (err) {
                console.error(err.message)
            }
        }
        postUserImage();
    }
}