import { GoHeart } from "react-icons/go";
import { FaRegCommentDots } from 'react-icons/fa'

import appleImage from "../../../assests/apple.jpg";

import useroutputCss from './user-output.module.css';


const useroutput = (props) => {
    // console.log(props);
    return (
        <div className={useroutputCss.container}>
            <div>{props.username}</div>
            <div className={useroutputCss.imgWrap}>
                <p>Lorem ipsum dolor, sit amet consectetur
                    cumque ducimus ex accusantium! Maxime quasi.
                </p>
                <div className={useroutputCss.img_wrap}>
                    <img src={appleImage} alt="" />
                </div>
            </div>
            <hr />
            <div className={useroutputCss.wrap}>
                <GoHeart />
                <FaRegCommentDots />
            </div>
        </div>
    )
};

export default useroutput;