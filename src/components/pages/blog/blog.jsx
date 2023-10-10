import { TiPlus } from "react-icons/ti"


import classes from "./blog.module.css";
import CosmeticCare from "../../../assests/cosmetics_care.jpg"
import DrySkinCosmetic from "../../../assests/dry_skin_cosmetic.avif"
import personCosmetic from "../../../assests/person_cosmetic.jpg"
import Blogs from "../../utils/usableComponents/blogs/blogs";


const blog = () => (
    <div style={{textAlign: "center"}}> 
        <header>
            <div className={classes.icon_text}>
                <div style={{color: "green", margin: "15px 12px"}}><TiPlus /></div>
                <strong>our blog</strong>
            </div>
            <h2>Explore the world of healthy cosmetics</h2>
            <div className={classes.main_containers}>
                <Blogs image={CosmeticCare} marginRight="12px" 
                    text="How to recognize the first signs of skin aging?" 
                />
                <Blogs  image={personCosmetic} marginRight="12px"
                    text="Natural contributions, i.e the key to the highest quality."
                />
                <Blogs image={DrySkinCosmetic} marginRight="0px" 
                    text="A new line of cosmetics for dry skin is now available."
                />
            </div>
        </header>
    </div>
);

export default blog;