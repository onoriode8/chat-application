import Navigation from '../../components/layout/toolbar/navigation/navigation';
import AllUsersPosts from '../../components/users-posts/users/users';
import ChatRoom from '../../containers/chat-room/chats/chat';
import WelcomePage from '../../UI/welcome-page/welcome-page'

import classes from './home.module.css'

//style this wrapper components to look good on each device screen size.
const home = () => (
    <div className={classes.wrapper}>
        <WelcomePage />
        <Navigation />
        <AllUsersPosts />
        <ChatRoom />
    </div>
);

export default home;