import NavItems from "./navItems";
import Search from "../../../../containers/search/search/search";
import navigationCss from "./navigation.module.css";

const navigation = () => {
    return (
        <div className={navigationCss.cont}>
            <Search />
            <NavItems />
        </div>
    )
}

export default navigation;