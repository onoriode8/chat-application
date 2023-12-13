import React, { useContext } from 'react';

import Button from '../../../UI/button/button';
import Register from '../register/register';

import './signin.css';

import { useAuthenticationFunc } from '../../../hooks/custom-hook'
import { Context } from '../../../hooks/context';


export default function Signin() {
    const URL = "https://locahost:8080/auth/signin"
    const { setEmail, setPassword, submitFormHandler,
         inputFocusHandler, inputRef } = useAuthenticationFunc(URL);

    const { authenticationPageSwitch, switchAuthenticationPageFunc } = useContext(Context);

    return (
        <div>
            {!authenticationPageSwitch ? <form onSubmit={submitFormHandler} className="signIn_form_container">
                <div className='signin'>Signin</div>

                <input ref={inputRef} type="email" onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email" required name="email" />

                <input onClick={inputFocusHandler} type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    required placeholder="Password" name="password" />

                <div className='signin_btn_container'>
                    <Button type="submit">Signup</Button>
                    <Button type="submit" onClick={switchAuthenticationPageFunc}>switch to Register</Button>
                </div>
            </form>
            : <Register />}
        </div>
    )
}