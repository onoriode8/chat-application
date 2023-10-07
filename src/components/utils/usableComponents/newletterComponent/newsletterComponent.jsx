import { MdDateRange } from "react-icons/md";
import { FcClock } from "react-icons/fc";

import Button from "../button/button";
import HeadingTag from "../headingTag/headingTag";
import classes from "./newsletterComponent.module.css"
import ImageCosmetic from '../../../pages/ImageCosmetic/imageCosmetic';


const newsletterComponent = props => (
    <div className={classes.container}>
        <img src={props.image} alt="" style={{borderRadius: props.borderRadius, width: props.width, height: props.height}}/>
        <div className={classes.btnContainer}>
            <div className={classes.btn}>
                <Button title="Top 10" boxShadow="1px 2px 3px 2px #b8b5b5"
                     backgroundColor="black" margin="0px 0px" 
                     borderRadius="1em" text="#fff"/>
                <Button title={new Date().toDateString()} icon={<MdDateRange />} boxShadow="1px 2px 3px 2px #b8b5b5"
                     backgroundColor="#fff" margin="0px 12px"
                     borderRadius="1em" text="black"/>
                <Button title="5 min" icon={<FcClock />} boxShadow="1px 2px 3px 2px #b8b5b5"
                     backgroundColor="#fff" margin="0px 0px" 
                     borderRadius="1em" text="black"/>
            </div>

            <HeadingTag textAlign="start" headingText="Top 10 tips on how to take care of your skin in advance"/>
            <p className={classes.text_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas,
                 libero mollitia omnis suscipit commodi voluptatem tenetur dolores qui assumenda 
                 provident est quam reiciendis animi, maxime sequi, consequuntur voluptates ipsam.
            </p>
            <p className={classes.text_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia? Odio
                 corporis voluptatum molestiae sit numquam nesciunt, nihil quae mollitia sunt accusamus
                  expedita voluptates quaerat assumenda accusantium maxime excepturi officia.
            </p>
            </div>
            <ImageCosmetic />
      </div>
  );

export default newsletterComponent;