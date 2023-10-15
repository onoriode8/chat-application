
import Navigation from "../Navigation/navigation";
import Search from "../search/search";

import classes from "./sideDrawer.module.css"


const sideDrawer = ({sideDrawerOpen}) => {
    let assignClasses = [classes.sideDrawer_container, classes.sideDrawer_close];
    if(sideDrawerOpen) {
        assignClasses = [classes.sideDrawer_container, classes.sideDrawer_open]
    }
    return (
        <div className={assignClasses.join(" ")}>
            <Navigation 
            sideDrawerOpen={sideDrawerOpen} 
            // sideDrawer={true}
             sideDrawerlogoStyle={true} />
            <Search sideDrawerSearch={true} inputMessage="search articles" />
        </div>
  );
};

export default sideDrawer;