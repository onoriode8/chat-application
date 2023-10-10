import { MdDateRange } from "react-icons/md";
import { FcClock } from "react-icons/fc";

import Button from "../button/button";
import ReadMeButton from "../button/readme_btn"
import HeadingTag from "../headingTag/headingTag";
import classes from "./newsletterComponent.module.css"
import ImageCosmetic from '../../../pages/ImageCosmetic/imageCosmetic';


const newsletterComponent = (props) => {

     const style = props.fontSize;
     const container = {
          // marginRight: "30px",
          background: props.background, 
          marginRight: props.marginRight, 
          marginLeft: props.marginLeft,
          // margin: props.title === "helpCare" ? null : props.margin
          // marginLeft: "150px"
     }

     const btnContainer = {
          padding: props.paddingBtnContainer,
          marginRight: props.marginRightBtnContainer
     }

     return (
    <div className={classes.container} style={container}>
        <img src={props.image} alt="" style={{borderRadius: props.borderRadius, width: props.width, height: props.height}}/>
        <div  style={btnContainer}>
          <div style={{marginLeft: props.btnMarginLeft}}>
            <div className={classes.btn}>
                <Button title={props.disableHeadingComponent ? props.title : "Top 10"} 
                     boxShadow="1px 2px 3px 2px #b8b5b5"
                     backgroundColor={props.disableHeadingComponent ? props.backgroundColor : "black"} 
                     margin="0px 0px" 
                     borderRadius="1em" text="#fff"/>
                <Button title={new Date().toDateString()} icon={<MdDateRange />} boxShadow="1px 2px 3px 2px #b8b5b5"
                     backgroundColor="#fff" margin="0px 12px"
                     borderRadius="1em" text="black"/>
                <Button title="5 min" icon={<FcClock />} boxShadow="1px 2px 3px 2px #b8b5b5"
                     backgroundColor="#fff" margin="0px 0px" 
                     borderRadius="1em" text="black"/>
            </div>
            {props.disableHeadingComponent ? 
               <HeadingTag textAlign="start" fontSize="12px" headingText="How to take care of dry and sensitive skin on the face?" /> 
             : <HeadingTag textAlign="start" headingText="Top 10 tips on how to take care of your skin in advance"/>
            }
            <p className={classes.text_p} 
                 style={{fontSize: style}}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas,
                 libero mollitia omnis suscipit commodi voluptatem ipsam.
            </p>
            {!props.disableHeadingComponent && <p className={classes.text_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia? Odio
                 corporis voluptatum molestiae sit numquam nesciunt, nihil quae mollitia sunt accusamus
                  expedita voluptates quaerat assumenda accusantium maxime excepturi officia.
            </p>}
            {props.disableHeadingComponent && <ReadMeButton backgroundColor="black" color="#fff" boxshadow="1px 2px 3px 2px #b8b5b5" />}
       </div>
       </div>

            {props.disableComponent ? null : <ImageCosmetic />}
     </div>
  );

}

export default newsletterComponent;