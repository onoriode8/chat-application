
import userFriendCss from './userFriend.module.css';

const userFriends = (props) => {
    return (
        <div className={userFriendCss.wrap}>
            <div style={{padding: "15px"}}>{props.name}</div>
        </div>
    );
}

export default userFriends;