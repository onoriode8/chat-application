// import { useState, useEffect } from "react";

import ErrorMessage from "../../../UI/errorMessage/error-message";
import Spinner from "../../../UI/spinner/spinner";
import UsersFriends from '../user-friends/UsersFriends';
import { useFetch } from "../../../hooks/custom-hook";

import classes from './chat.module.css';

const Chat = () => {
    const { friends } = useFetch();
    return (
        <div className={classes.chatContainer}>
            <h1>Chat</h1>
            {/* {spinner && <Spinner />}
            {error && <ErrorMessage clear={() => setError(null)} errorMessage={error} />} */}
            <div>
                {friends.length !== 0 ? friends.map(f => 
                  <UsersFriends key={f.id} {...f} />) : null}
            </div>
        </div>
    )
};

export default Chat;