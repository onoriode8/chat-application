import React from "react";

import Navigation from "./Navigation/navigation";
import Search from './search/search'

const layout = () => (
    <div>
        <div>
           <Navigation />
           <Search />
        </div>
    </div>
);

export default layout;