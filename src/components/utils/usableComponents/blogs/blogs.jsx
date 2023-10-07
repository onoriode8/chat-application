import { FcClock } from "react-icons/fc"
import { MdDateRange } from "react-icons/md"


import classes from './blogs.module.css'
import ReadMeButton from '../button/readme_btn';
import Button from '../button/button';


const blogs = (props) => (
    <div className={classes.blogs_container} style={{marginRight: props.marginRight}}>
            <img src={props.image} alt="" style={{width: "150px", height: "20vh", borderRadius: "0.3em"}}/>
            <div className={classes.btn_text_container}>
                <Button title={new Date().toDateString()} icon={<MdDateRange />} 
                     boxShadow="1px 2px 3px 2px #b8b5b5"
                     backgroundColor="#fff" margin="0px 0px" 
                     borderRadius="1em" text="black"/>

                <Button title="6 min" icon={<FcClock />} backgroundColor="#fff"
                   boxShadow="1px 2px 3px 2px #b8b5b5" margin="0px 8px" 
                   borderRadius="1em" text="black"/>
                <h3>{props.text}</h3>
                <p className={classes.pa}>Lorem ipsum dolor sit amet Neque commodi dolorum eum.</p>
                <p className={classes.pa}>Lorem ipsum dolor sit amet consectetur adipisicing elits?</p>
                <ReadMeButton backgroundColor="#fff" color="black" boxshadow="1px 2px 3px 2px #b8b5b5" />
            </div>
        </div>
);

export default blogs;