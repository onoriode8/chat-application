import { useContext } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { MdArrowDropDown } from "react-icons/md";


import { Context } from '../../../hooks/context';
import appleImage from '../../../assests/apple.jpg'


const ToolbarProfile = ({ userProfile }) => {
    const { image, id } = useContext(Context);
    return (
        <>
            {/* {!userProfile || image === null ? */}
                <div className="profile"><NavLink to={`/user_profile/${id}`}>Profile</NavLink></div>
                {/* : */}
                <div>
                    <img style={{ width: "25px", height: "25px", borderRadius: "100px" }}
                        src={appleImage} alt="" /> {/* image[0] */}
                    <MdArrowDropDown />
                </div>
                {/* } */}
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