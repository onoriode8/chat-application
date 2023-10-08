import { PiStarFourFill } from "react-icons/pi"

import applyCream from "../../../assests/apply_cream.jpg"
import classes from './articles.module.css'
import HeadingTag from '../../utils/usableComponents/headingTag/headingTag'
import NewsLetterComponent from "../../utils/usableComponents/newletterComponent/newsletterComponent";

const articles = () => (
    <div className={classes.container}>
        <div className={classes.icon_text}>
            <div className={classes.icon}><PiStarFourFill /></div>
            <div>More articles</div>
        </div>
        <HeadingTag headingText="See more articles that may interest you" textAlign="center" />
        <div>
           <NewsLetterComponent image={applyCream} 
            borderRadius="0.5em" width="134px" height="30vh" background="rgba(53, 242, 53, 0.1)"
            fontSize="12px" title="HelpCare" backgroundColor="rgba(29, 243, 29, 0.8)"
            marginRight="40%" marginLeft="17%"
            disableHeadingComponent={true}  disableComponent={true}
            />
        </div>
    </div>
);

export default articles;