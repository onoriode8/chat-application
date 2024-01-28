import { useState, useEffect, useContext } from 'react';
import { connect } from "react-redux"

import { Context } from '../../../hooks/context';
import * as actionCreator from "../../../store/actions/actions-creators"
import { usePickUserProfile } from "../../../hooks/custom-hook";
// import Button from '../../../UI/button/button';

const UserProfile = (props) => {
    const [id, setId] = useState(null);
    const [token, setToken] = useState(null);
    // const { id, token } = useContext(Context);

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
        const formData = new FormData();
        formData.append("image", userPost);
        const imageList = formData.get("image");
        console.log("Image_upload", imageList);
        if(imageList === null) return;
        // const fileReader = new FileReader();
        // let image;
        // fileReader.onload = () => {
        //     image = fileReader.result
        // }
        // fileReader.readAsDataURL(imageList)
        console.log("[READ-IMAGE]", userPost)
        props.uploadImageFunc(imageList, id, token);
        
    };

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "start", marginTop: "4em" }}>
            <form onSubmit={submitProfileHandler}>
                {userProfileUrl && <img style={{ width: "200px", height: "200px", borderRadius: "100px" }}
                    src={userProfileUrl} alt="" />}
                {/* <br /> */}
                <input ref={userProfileRef}  type="file" style={{ display: "none" }} onChange={pickImageHandler}/>

                {userProfileUrl === null ? <button style={buttonStyle} onClick={addImageHandler}>Add Image</button>
                    :
                    <button type="submit" style={buttonStyle}>Upload Image</button>}
            </form>
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
        userProfile: state.users.userProfile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uploadImageFunc: (imageList, id, token) => dispatch(actionCreator.userProfileHandlerFun(imageList, id, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);