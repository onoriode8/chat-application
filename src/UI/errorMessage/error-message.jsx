import Button from "../button/button";

import errorMessageCss from './error-message.module.css';

const errorMessage = (props) => {
    return (
        <div className={errorMessageCss.container}>
            <p>{props.errorMessage}</p>
            <div className={errorMessageCss.wrap}>
                <div></div>
                <Button clicked={props.clear}>OK</Button>
            </div>
        </div>
    );
};

export default errorMessage;