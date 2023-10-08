import Sunburnt from "../../../assests/sunburnt.jpg"
import classes from "./sunburnt.module.css"
import HeadingTag from "../../utils/usableComponents/headingTag/headingTag";
import Button from "../../utils/usableComponents/button/button";

const sunburnt = () => (
    <div>
    <div className={classes.container}>
        <div>
            <img src={Sunburnt} alt="" className={classes.sunburnt}/>
        </div>
        <div className={classes.cont}>
            <Button title="Part-2" backgroundColor="#fff"
                   boxShadow="1px 2px 3px 2px #b8b5b5" margin="0px 8px" 
                   borderRadius="1em" text="black"/>
            <HeadingTag headingText="The Dangers of Sunburn and Dryness" />
            <p>Sunburn is a common consequence of excessive sun exposure. Particularly on the face. It can cause redness, pain,
                peeling, and even blistering. Additionally, the sun can deplete the skin's natural moisture, leading to dryness and flakiness.
                These conditions not only affect the skin appearance but can also cause discomfort and irritation.
            </p>
        </div>
    </div>
    <div>
        <p className={classes.cent_p}>Proper sun protection, 
           such as wearing sunscreen and seeking shade, is 
        </p>
        <p className={classes.cent_ps}>essential to prevent sunburn and maintain skin hydration.</p>
    </div>
    </div>
);

export default sunburnt;