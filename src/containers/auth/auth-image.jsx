import PropType from 'prop-types'

import undrawLogin from '../../assests/undraw-login.svg'
import undrawSignup from '../../assests/undraw-signup.svg'

import authImageCss from './auth-image.module.css';

function authImage({ showPage }) {
    let registerOpen = <div className={`text-center ${authImageCss.auth_image_register}`}>
        <h1>Register An Account</h1>
        <img src={undrawSignup} alt="" />
        <p><strong>Authenticate User</strong></p>
    </div>;

    if (showPage) {
        registerOpen = <div className={`text-center ${authImageCss.auth_image_register}`}>
            <h1>SignIn To Your Account</h1>
            <img src={undrawLogin} alt="" />
            <p><strong>Secure Login</strong></p>
        </div>
    };

    return (
        <>
            {registerOpen}
        </>
    )
}

authImage.propTypes = {
    showPage: PropType.bool
}

export default authImage;