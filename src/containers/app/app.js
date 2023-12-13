import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from '../../components/layout/toolbar/navigation/navigation';
import SideDrawer from '../../components/layout/toolbar/side-drawer/side-drawer';
import AllUsersPosts from '../../components/users-posts/users/users';
import ChatRoom from '../chat-room/chats/chat';
import Toolbar from "../../components/layout/toolbar/toolbar";
import ContextHook  from '../../hooks/context';
import AllUsers from '../all-users/all-users';

import classes from './app.module.css';
import UserProfile from '../profile/user-profile/user-profile';
import Auth from '../auth/register/register'

const App = (props) => {
    return (
        <React.Fragment>
             <ContextHook>
                <Toolbar />
                <div className={classes.wrapper}>
                    {/* <Navigation /> */}
                    {/* <SideDrawer /> */}
                    <Routes>
                        <Route path="/" element={<AllUsersPosts />} />
                        <Route path="/" element={<ChatRoom />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route path={`/all_user/${props.userId}`} element={<AllUsers />} />
                        <Route path={`/user_profile/${props.userId}`} element={<UserProfile/>} />
                    </Routes>
                </div>
        </ContextHook>
        </React.Fragment>
    )
};

export default App;