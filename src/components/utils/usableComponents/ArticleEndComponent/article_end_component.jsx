import { MdDateRange } from "react-icons/md"
import { FcClock } from "react-icons/fc"

import classes from "./article_end_component.module.css"

import Button from "../button/button";
import HeadingTag from "../headingTag/headingTag";

const articleEndComponent = props => (
    <div className={classes.container}>
        <div className={classes.image_text_container}>
                <img src={props.image} alt="" className={classes.image} />
            <div className={classes.btn_para_container}>
                <div className={classes.btn_container}>
                    <Button title={new Date().toDateString()} icon={<MdDateRange />} boxShadow="1px 2px 3px 2px #b8b5b5"
                     backgroundColor="#fff" margin="0px 0px"
                     borderRadius="1em" text="black"/>
                    <Button title="6 min" icon={<FcClock />} boxShadow="1px 2px 3px 2px #b8b5b5"
                     backgroundColor="#fff" margin="0px 12px" 
                     borderRadius="1em" text="black"/>
                </div>
                {props.showheading ? <HeadingTag headingText="How to determine the type of skin to take better care of it?" />
                 : <HeadingTag headingText="What ingredients of cosmetic should we avoid for our health?" />}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Rerum, vitae labore aspernatur voluptates beatae.
                </p></div>
          </div>
      </div>
);

export default articleEndComponent 