
import UsersFriends from '../user-friends/UsersFriends';
import { useFetch } from "../../../hooks/custom-hook";

import classes from './chat.module.css';

const Chat = () => {
    const { friends } = useFetch();
    return (
        <div className={classes.wrapper}>
            <div className={classes.chatContainer}>
                <h1>Chat</h1>
                <p>Number Of Friends <strong 
                style={{color: "blue"}}>{friends.length}</strong>
                </p>
                <div>
                    {friends.length !== 0 ? friends.map(f => 
                    <UsersFriends key={f.id} {...f} />) : <p>No Friends Yet!</p>}
                </div>
            </div>
        </div>
    )
};

export default Chat;