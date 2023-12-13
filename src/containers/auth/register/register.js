import React, { useContext } from 'react';

import Button from '../../../UI/button/button';
import './register.css';

import { useAuthenticationFunc } from '../../../hooks/custom-hook'
import { Context } from '../../../hooks/context';
import Signin from '../signin/signin';


export default function Register() {
    const URL = "https://locahost:8080/auth/register"
    const { setEmail, setPassword, submitFormHandler,
         inputFocusHandler, inputRef } = useAuthenticationFunc(URL);

    const { authenticationPageSwitch, switchAuthenticationPageFunc } = useContext(Context);

    return (
        <div className="register_container">
            {!authenticationPageSwitch ? <form onSubmit={submitFormHandler} className="form_container">
                <div className='signup'>Signup</div>

                <input ref={inputRef} type="email" onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email" required={false} name="email" />

                <input onClick={inputFocusHandler} type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    required={false} placeholder="Password" name="password" />

                <div className='btn_container'>
                    <Button type="submit">Signup</Button>
                    <Button type="submit" onClick={switchAuthenticationPageFunc}>switch to signin</Button>
                </div>
            </form>
            : <Signin />}
        </div>
    )
}