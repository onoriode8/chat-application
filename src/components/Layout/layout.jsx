import React, { useState } from "react";

import Navigation from "./Navigation/navigation";
import Search from './search/search'
// import SideDrawer from "./sideDrawer/sideDrawer"
// import Backdrop from "./sideDrawer/backdrop/backdrop";
import asyncComponent from "../../hoc/asyncComponent";

const AsyncBackdrop = asyncComponent(() => import("./sideDrawer/backdrop/backdrop"))
const AsyncSideDrawer = asyncComponent(() => import("./sideDrawer/sideDrawer"))

const Layout = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    const sideDrawerHandler = () => {
        setSideDrawerOpen(prevState => !prevState)
    };

    return (
        <div>
            {sideDrawerOpen ? <AsyncBackdrop clicked={sideDrawerHandler} />: null}
            <AsyncSideDrawer sideDrawerOpen={sideDrawerOpen} />
            <div>
                <Navigation clicked={sideDrawerHandler}
                   sideDrawerOpen={sideDrawerOpen} />
                <Search />
            </div>
        </div>
  );
};

export default Layout;