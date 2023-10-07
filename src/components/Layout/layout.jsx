import React from "react";

import Navigation from "./Navigation/navigation";
import { Logo } from "./logo/logo";
import { NavEnd } from "./nav-end/nav_end";


const layout = () => (
    <div>
        <div>
           <Logo />
           <Navigation />
           <NavEnd />
        </div>
    </div>
);

export default layout;