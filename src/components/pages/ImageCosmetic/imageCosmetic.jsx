import { FcClock } from "react-icons/fc"
import { MdDateRange } from "react-icons/md"

import classes from "./imageCosmetic.module.css"
import ImageCosmetic from "../../../assests/newsletter_cosmetic_nice.jpg"
import Button from "../../utils/usableComponents/button/button";

const imageCosmetic = () => (
    <div className={classes.container}>
        <img src={ImageCosmetic} alt="" className={classes.image} />
        <div className={classes.cont}>
            <Button title={new Date().toDateString()} icon={<MdDateRange />} borderRadius="1em" backgroundColor="#fff" text="black" margin="0px 8px" />
            <Button title="6 min" icon={<FcClock />} borderRadius="1em" backgroundColor="#fff" text="black" />
            <p style={{color: "#fff"}}>How to use and apply the cream on sensitive skin correctly.</p>
        </div>
    </div>
);

export default imageCosmetic;