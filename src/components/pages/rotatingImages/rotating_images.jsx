import cosmeticNice from "../../../assests/newsletter_cosmetic_nice.jpg"
import viewCosmetic from "../../../assests/view_cosmetic.webp"
import applyingCosmetic from "../../../assests/applying_cosmetic.webp"
import cosmeticApply from "../../../assests/cosmetic_applying.webp"
import cosmeticTools from "../../../assests/cosmetic_tools.webp"
import classes from "./rotating_images.module.css"

const rotatingImages = () => (
    <div>
        <div className={classes.cont}>
            <img src={cosmeticNice} alt="" className={classes.cosmeticNice}/>
            <img src={cosmeticApply} alt="" className={classes.cosmeticApply}/>
            <img src={applyingCosmetic} alt="" className={classes.applyingCosmetic}/>
            <img src={cosmeticTools} alt="" className={classes.cosmeticTools}/>
            <img src={viewCosmetic} alt="" className={classes.viewCosmetic}/>
        </div>
    </div>
)

export default rotatingImages;