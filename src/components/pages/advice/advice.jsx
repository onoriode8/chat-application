import { PiStarFourFill } from "react-icons/pi"

import classes from "./advice.module.css";
import HeadingTag from "../../utils/usableComponents/headingTag/headingTag";
import doctor from "../../../assests/dr_audrey_kunin.jpg"

const advice = () => (
    <div className={classes.advice}>
        <div className={classes.wrap}>
        <div className={classes.star_icon}><PiStarFourFill /></div>
        <p>in the wise words of renowned dermatologist</p>
        <HeadingTag textAlign="center" headingText="Sunscreen is like a little black dress, it's never out of style." />
        <p className={classes.text_p}>This quotes serves as a reminder of the timeless importance of sun protection in maintaining healthy facial skin.
            As physician emphasizes, incorporating sunscreen into our daily routine is a simple yet powerful step
            towards preserving our complexion and preventing sun damage.
        </p>
        <div className={classes.imgCont}>
            <div className={classes.cont}>
                <img src={doctor} alt="" className={classes.img}/>
                <div>
                    <div><strong>Dr Audrey Kunin</strong></div>
                    <div>Dermatologist</div>
                </div>
            </div>
        </div>
    </div>
    </div>
);

export default advice;