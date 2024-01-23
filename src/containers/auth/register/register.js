import React, { useContext } from 'react';

import Button from '../../../UI/button/button';
import './register.css';

import { useAuthenticationFunc } from '../../../hooks/custom-hook'
import { Context } from '../../../hooks/context';
import Signin from '../signin/signin';
import ErrorMessage from '../../../UI/errorMessage/error-message';
import AuthImage from '../auth-image';


export default function Register() {
    const URL = `${process.env.REACT_APP_AUTHENTICATION}/register`

    //console.log("[URL-DATA]", `${process.env.REACT_APP_AUTHENTICATION}`)

    const { setEmail, errorMessage, setPassword, submitFormHandler,
         inputFocusHandler, inputRef } = useAuthenticationFunc(URL);

    const { authenticationPageSwitch, switchAuthenticationPageFunc } = useContext(Context);
        // console.log(authenticationPageSwitch, "[TESTING]", switchAuthenticationPageFunc)
    return (
        <>
        {errorMessage && <ErrorMessage errorMessage={errorMessage}  /> }
        <div className="register_container">
            {!authenticationPageSwitch ? <form onSubmit={submitFormHandler} className="form_container">
                <div className='signup'>Signup</div>

                <input ref={inputRef} type="email" onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email" name="email" />

                <input onClick={inputFocusHandler} type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password" name="password" />

                <div className='btn_container'>
                    <Button type="submit">Signup</Button>
                    <Button type="submit" clicked={switchAuthenticationPageFunc}>switch to signin</Button>
                </div>
            </form> : <Signin />}
            <div>
                <AuthImage showPage={authenticationPageSwitch} />
            </div>
        </div>
        </>
    )
}