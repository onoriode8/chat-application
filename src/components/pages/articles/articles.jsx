import { PiStarFourFill } from "react-icons/pi"

import applyCream from "../../../assests/apply_cream.jpg"
import cosmeticIngredient from "../../../assests/cosmetic_ingre.jpg"
import applyCosmeticToSkin from "../../../assests/apply_cosmetic_to_skin.jpg"
import classes from './articles.module.css'
import HeadingTag from '../../utils/usableComponents/headingTag/headingTag'
import NewsLetterComponent from "../../utils/usableComponents/newletterComponent/newsletterComponent";
import ArticleEndComponent  from "../../utils/usableComponents/ArticleEndComponent/article_end_component"


const articles = () => (
    <div className={classes.container}>
        <div className={classes.icon_text}>
            <div className={classes.icon}><PiStarFourFill /></div>
            <div>More articles</div>
        </div>
        <HeadingTag headingText="See more articles that may interest you" textAlign="center" />
        <div className={classes.article_end_container}> {/* wrapper of the end component */}
           <NewsLetterComponent image={applyCream} 
            borderRadius="0.5em" width="134px" height="30vh" background="rgba(53, 242, 53, 0.1)"
            fontSize="12px" title="HelpCare" backgroundColor="rgba(29, 243, 29, 0.8)"
            marginRight="40px" marginLeft="140px"  
            btnMarginLeft="25px"
            // paddingBtnContainer="10px 25px" marginRightBtnContainer="450px"

            disableHeadingComponent={true}  disableComponent={true}
        
            />
            <div className={classes.end_container}>
               <ArticleEndComponent image={cosmeticIngredient} />
               <ArticleEndComponent showheading={true} image={applyCosmeticToSkin} />
            </div>
        </div>
    </div>
);

export default articles;