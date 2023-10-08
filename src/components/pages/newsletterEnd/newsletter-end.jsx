import classes from "./newsletter-end.module.css"
import Button from "../../utils/usableComponents/button/button";

const newsletterEnd = () => (
    <div className={classes.container}>
        <div className={classes.cont}>
            <Button title="The End" backgroundColor="#fff"
                   boxShadow="1px 2px 3px 2px #b8b5b5" margin="0px 0px" 
                   borderRadius="1em" text="black"
            />
            <p>In conclusion, understanding the effects of the sun on our facial skin is crucial for maintaining
                a healthy and radiant complexion. By taking proactive measures such as wearing sunscreen, seeking shade, and following
                a consistent skincare routine, we can protect ournskin from the harmful effects of the sun and enjoy
                a youthful and glowing appearance for years to come.
            </p>
        </div>
    </div>
);

export default newsletterEnd;