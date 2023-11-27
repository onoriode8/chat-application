
import userFriendCss from './userFriend.module.css';

const userFriends = (props) => {
    return (
        <div className={userFriendCss.container}>
            <div className={userFriendCss.wrap}>
                <div>{props.name}</div>
            </div>
        </div>
    );
}

export default userFriends;