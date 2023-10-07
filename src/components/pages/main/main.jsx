import { FcClock } from "react-icons/fc"
import { MdDateRange } from "react-icons/md"

import imageCosmetics from "../../../assests/cosmetic.jpg";
import classes from "./main.module.css";
import Button from "../../utils/usableComponents/button/button";
import ReadMeButton from "../../utils/usableComponents/button/readme_btn"


const main = () => (
    <div className={classes.main_container}>
        <div className={classes.mainContainer}>
            <div className={classes.container}>
              <img className={classes.ImageCosmetics} src={imageCosmetics} alt="" />
            <div className={classes.btn_text}>
                <div className={classes.btn}>
                    <Button title="New" borderRadius="1em" backgroundColor="pink" text="#fff" margin="0px 2px"/>
                    <Button title={new Date().toDateString()} icon={<MdDateRange />} borderRadius="1em" backgroundColor="#fff" text="black" margin="0px 8px"/>
                    <Button title="4 min" icon={<FcClock />} borderRadius="1em" backgroundColor="#fff" text="black" width="30px" height="40px"/>
                </div>
                <h1 className={classes.h1}>How the summer sun affects our skin and complexion?</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ratione 
                    cumque quibusdam! Dolores sequi deserunt consequuntur aut voluptatum eum enim necessitatibus
                    consequatur dolorem provident autem numquam illum, dolore voluptate eaque.
                </p>
                <ReadMeButton backgroundColor="black" color="#fff" />
            </div>
            </div>
        </div>
    </div>
);

export default main;