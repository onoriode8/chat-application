import React, { useContext } from 'react';

import Button from '../../../UI/button/button';
import Spinner from '../../../UI/spinner/spinner';


import './signin.css';

import { useAuthenticationFunc } from '../../../hooks/custom-hook'
import { Context } from '../../../hooks/context';


export default function Signin() {
    // const URL = `${process.env.REACT_APP_AUTHENTICATION}/login`
    const URL = "http://localhost:8080/users/login"


    const { loading, setEmail, setPassword, submitFormHandler,
         inputFocusHandler, inputRef } = useAuthenticationFunc(URL);

    const { switchAuthenticationPageFunc } = useContext(Context);

    return (
        <div>
            <form onSubmit={submitFormHandler} className="signIn_form_container">
                {loading ? <Spinner /> : null}
                <div className='signin'>Signin</div>

                <input ref={inputRef} type="email" onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email" name="email" />

                <input onClick={inputFocusHandler} type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password" name="password" />

                <div className='signin_btn_container'>
                    <Button type="submit">SignIn</Button>
                    <Button type="submit" clicked={switchAuthenticationPageFunc}>switch to Signup</Button>
                </div>
            </form>
        </div>
    )
}