import PropTypes from 'prop-types'

import Button from "../button/button";

import errorMessageCss from './error-message.module.css';

const errorMessage = ({ errorMessage, clear }) => {
    return (
        <>
        <div className={errorMessageCss.backdrop}></div>
        {/* <div className={errorMessageCss.error_wrapper}> */}
            {/* <div className={errorMessageCss.cont}> */}
                <div className={errorMessageCss.container}>
                    <p>{errorMessage}</p>
                    <div className={errorMessageCss.wrap}>
                        <div></div>
                        <Button clicked={clear}>OK</Button>
                    </div>
                </div>
            {/* </div> */}
        {/* </div> */}
        </>
    );
};

errorMessage.propTypes = {
    errorMessage: PropTypes.string,
    clear: PropTypes.func
}

export default errorMessage;