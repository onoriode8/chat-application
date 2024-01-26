import PropTypes from 'prop-types'

import Button from "../button/button";
// import { Backdrop } from '../../components/layout/toolbar/side-drawer/backdrop/backdrop';

import errorMessageCss from './error-message.module.css'; 

const errorMessage = ({ errorMessage, clear }) => {
    return (
        <>
        <div className={errorMessageCss.backdrop}></div>
        <div className={errorMessageCss.container}>
            <p>{errorMessage}</p>
            <div className={errorMessageCss.wrap}>
                <div></div>
                <Button clicked={clear}>OK</Button>
            </div>
        </div>
        </>
    );
};

errorMessage.propTypes = {
    errorMessage: PropTypes.string,
    clear: PropTypes.func
}

export default errorMessage;