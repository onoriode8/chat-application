import PropTypes from "prop-types";

import buttonCss from "./button.module.css"


const button = (props) => {
    const { clicked, children } = props;
    return (
        <div className={buttonCss.cont}>
            <button onClick={clicked}>{children}</button>
        </div>
    );
}

button.propTypes = {
    clicked: PropTypes.func.isRequired
}

export default button;