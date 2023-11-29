import React from 'react';

import Navigation from '../../components/layout/toolbar/navigation/navigation';
import AllUsersPosts from '../../components/users-posts/users/users';
import ChatRoom from '../chat-room/chats/chat';

import classes from './app.module.css'

const App = () => {
    return (
        <React.Fragment>
            <div className={classes.wrapper}>
                <Navigation />
                <AllUsersPosts />
                <ChatRoom />
            </div>
        </React.Fragment>
    )
};

export default App;