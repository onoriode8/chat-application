import React from 'react';

import Navigation from '../../components/layout/toolbar/navigation/navigation';
import SideDrawer from '../../components/layout/toolbar/side-drawer/side-drawer';
import AllUsersPosts from '../../components/users-posts/users/users';
import ChatRoom from '../chat-room/chats/chat';
import Toolbar from "../../components/layout/toolbar/toolbar";
import ContextHook  from '../../hooks/context';

import classes from './app.module.css';

const App = () => {
    return (
        <React.Fragment>
             <ContextHook>
                <Toolbar />
                <div className={classes.wrapper}>
                    <Navigation />
                    <SideDrawer />
                    <AllUsersPosts />
                    <ChatRoom />
                </div>
        </ContextHook>
        </React.Fragment>
    )
};

export default App;