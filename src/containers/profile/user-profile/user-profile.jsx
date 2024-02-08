import { useState, useEffect, useContext } from 'react';
import { connect } from "react-redux"

import { FaArrowLeft } from "react-icons/fa";

// import { Context } from '../../../hooks/context';
import * as actionCreator from "../../../store/actions/actions-creators"
import { usePickUserProfile, useFetchPosts } from "../../../hooks/custom-hook";
// import ErrorMessage from '../../../UI/errorMessage/error-message';
import Spinner from '../../../UI/spinner/spinner';
// import Button from '../../../UI/button/button';

const UserProfile = (props) => {
    const [id, setId] = useState(null);
    const [token, setToken] = useState(null);
    // const {  } = useContext(Context);

    useEffect(() => {
        const storedData = sessionStorage.getItem("data");
        const parsedData = JSON.parse(storedData)
        if(!parsedData) { return }
        setId(parsedData.id);
        setToken(parsedData.token)
    }, [])

    const { userPost, userProfileUrl, userProfileRef, 
        addImageHandler, pickImageHandler } = usePickUserProfile();
   
    const submitProfileHandler = (event) => {
        event.preventDefault();
        // const backendURL = "http://localhost:8080/users"
        
        console.log("[READ-IMAGE]", userPost)
        const formData = new FormData();
        formData.append("image", userPost);
        props.uploadImageFunc(userPost, id, token);
        
    };

    return (
        <div>
            <div title="goBack" style={{color: "blue", marginLeft: "10px", fontSize: "1.5em", marginTop: "15px"}}>
                <FaArrowLeft onClick={() => props.history.goBack()} />
            </div>
            {props.profileError && <div style={{marginTop: "4em", textAlign: "center", fontSize: "2em"}}>{props.profileError}</div>}
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "start", marginTop: "4em" }}>
                <form onSubmit={submitProfileHandler}>
                    {userProfileUrl && <img style={{ width: "200px", height: "200px", borderRadius: "100px" }}
                        src={userProfileUrl} alt="" />}
                    {/* <br /> */}
                    <input ref={userProfileRef} 
                     type="file" accept=".png, .jpeg, .jpg, .svg, .webp"
                     encType="multipart/form-data" name="image"
                     style={{ display: "none" }} onChange={pickImageHandler}/>

                    {userProfileUrl === null ? <button style={buttonStyle} onClick={addImageHandler}>Add Image</button>
                        :
                        <button type="submit" style={buttonStyle}>Upload Image</button>}
                </form>

                <div style={{textAlign: "center"}}>{ props.spinner ? <Spinner />: null }</div>
            </div>
        </div>
    )
};

const buttonStyle = {
    backgroundColor: "rgba(9, 9, 239, 0.9)",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid #fff",
    cursor: "pointer"
}

const mapStateToProps = state => {
    return {
        userProfile: state.users.userProfile,
        profileError: state.users.profileError,
        spinner: state.users.spinner
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uploadImageFunc: (imageList, id, token) => dispatch(actionCreator.userProfileHandlerFun(imageList, id, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);