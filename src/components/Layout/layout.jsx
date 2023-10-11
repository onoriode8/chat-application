import React, { useState } from "react";

import Navigation from "./Navigation/navigation";
import Search from './search/search'
import SideDrawer from "./sideDrawer/sideDrawer"

const Layout = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    const sideDrawerHandler = () => {
        setSideDrawerOpen(prevState => !prevState)
    }

    return (
        <div>
            <SideDrawer sideDrawerOpen={sideDrawerOpen} />
            <div>
            <Navigation clicked={sideDrawerHandler} />
            <Search />
            </div>
        </div>
  );
};

export default Layout;