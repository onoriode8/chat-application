import { useState, useEffect } from "react";

import ErrorMessage from "../../../UI/errorMessage/error-message";
import Spinner from "../../../UI/spinner/spinner";
import UsersFriends from '../user-friends/UsersFriends';

import classes from './chat.module.css';

const Chat = () => {
    const [friends, setFriends] = useState([
        { name: "USERNAME 1", id: 1 },
        { name: "USERNAME 2", id: 2 },
        { name: "USERNAME 3", id: 3 },
        { name: "USERNAME 4", id: 4 },
        { name: "USERNAME 5", id: 5 }
    ]);
    const [spinner, setSpinner] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAllFriends = async () => {
            setSpinner(true)
            try {
                const response = await fetch("http://localhost:4000/friends");
                const responseData = await response.json();
                if (response.ok === false) {
                    throw new Error("user not found")
                }
                setSpinner(false);
                const slice = responseData.slice(0, 5);
                setFriends(slice)
            } catch (err) {
                setSpinner(false);
                setError(err.message)
            }
        };
        getAllFriends();
    }, []);

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