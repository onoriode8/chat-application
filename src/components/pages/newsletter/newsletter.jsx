import { PiStarFourFill } from "react-icons/pi"


import HeadingTag from "../../utils/usableComponents/headingTag/headingTag"
import NewsletterComponent from "../../utils/usableComponents/newletterComponent/newsletterComponent";
import newsletterCosmetic from "../../../assests/newletter_cosmetic.jpg"
import classes from "./newsletter.module.css";

const newsletter = () => (
    <div style={{textAlign: "center"}}>
        <div className={classes.icon_newletter}>
            <div className={classes.star_icon}><PiStarFourFill /></div>
            <div>Newsletter</div>
        </div>
        <HeadingTag headingText="Join Double Bay Community" />
        <p>Get access to exclusive codes, educational content and new products before anyone else!</p>
        <div>
          <input className={classes.inputContainer} type="email" placeholder="Your email address" />
          <button className={classes.signIn}>Sign In</button>
        </div><br />
        <div className={classes.wrapperContainer}>
            <NewsletterComponent image={newsletterCosmetic}
             paddingBtnContainer="10px 25px" 
             marginRightBtnContainer="450px" 
            //   margin="0px 222px"  
              marginRight="222px" 
              marginLeft="222px" 
            //  padding: 25px ;
             width="240px" height="30vh" borderRadius="0.5em" />
        </div>
    </div>
);

export default newsletter;