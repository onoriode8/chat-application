import { FcSearch } from "react-icons/fc"
// import { RiArrowDropDownLine } from "react-icons/ri"


import classes from './search.module.css'


const search = ({sideDrawerSearch, inputMessage}) => (
    <div className={classes.search_container}>
        <div className={classes.search_cont}>
            {sideDrawerSearch && <input type="search" 
             className={sideDrawerSearch ? classes.removeBorder : classes.search} 
               placeholder={sideDrawerSearch ?
                inputMessage : "What article are you looking for?"}/>}
            <div className={classes.search_icon}><FcSearch /></div>
      </div>
        {!sideDrawerSearch ? <select className={classes.article_container}>
            <option value="articles">All articls</option>
            <option value="blogs">All blogs</option>
            <option value="newsletter">All newsletter</option>
        </select>: null}
    </div>
);

export default search;