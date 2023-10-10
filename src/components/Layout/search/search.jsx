import { FcSearch } from "react-icons/fc"
// import { RiArrowDropDownLine } from "react-icons/ri"


import classes from './search.module.css'


const search = () => (
    <div className={classes.search_container}>
        <div className={classes.search_cont}>
            <input type="search" className={classes.search} 
               placeholder="What article are you looking for?"/>
            <div><FcSearch /></div>
        </div>
            <select className={classes.article_container}>
                <option value="articles">All articls</option>
                <option value="blogs">All blogs</option>
                <option value="newsletter">All newsletter</option>
            </select>
    </div>
);

export default search;