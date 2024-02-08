import { useContext, useEffect, useState } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { MdArrowDropDown } from "react-icons/md";


import { Context } from '../../../hooks/context';
// import appleImage from '../../../assests/apple.jpg'


const ToolbarProfile = ({ userProfile }) => {
    const [image, setImage] = useState(null);

    const { id } = useContext(Context);
    // console.log(id)
    
    useEffect(() => {
        // if(userProfile === null) return 
        const data = sessionStorage.getItem("user_Image")
        const image = JSON.parse(data);
        setImage(image) //comment back on.
        console.log("", image)
    }, [userProfile]);

    return (
        <>
            {image === null ?
                <div className="profile"><NavLink to={`/user_profile/${id}`}>Profile</NavLink></div>
             : 
                <div>
                    <img style={{ width: "25px", height: "25px", borderRadius: "100px" }}
                        src={`http://localhost:8080/${image}`} alt="" /> {/* image[0] */}
                    <MdArrowDropDown />
                </div>
            } 
        </>
    );
}

ToolbarProfile.propType = {
    userProfile: PropType.string,
    image: PropType.string,
    id: PropType.string
}

const mapStateToProps = state => {
    return {
        userProfile: state.users.userProfile
    }
}

export default connect(mapStateToProps)(ToolbarProfile);