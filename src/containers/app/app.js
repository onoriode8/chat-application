import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Toolbar from "../../components/layout/toolbar/toolbar";
import ContextHook from '../../hooks/context';
// import AllUsers from '../all-users/all-users';
// import UserProfile from '../profile/user-profile/user-profile';
import Auth from '../auth/register/register';
// import Home from '../../components/home/home';
// import ChatRoom from '../chat-room/chats/chat';

//lazy loading/ code splitting.
import AsyncComponent from '../code_splitting/asynComponent';

const AsyncHome = AsyncComponent(() => import("../../components/home/home"))
const AsyncChatRoom = AsyncComponent(() => import('../chat-room/chats/chat'))
const AsyncUserProfile = AsyncComponent(() => import('../profile/user-profile/user-profile'))
const AsyncAllUsers = AsyncComponent(() => import('../all-users/all-users'));


const App = () => {
    const [id, setId] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedData = sessionStorage.getItem("data");
        const parsedData = JSON.parse(storedData)
        if(!parsedData) { return }
        setId(parsedData.id);
        setToken(parsedData.token)
    }, []);

    return (
        <React.Fragment>
            <ContextHook>
                <Toolbar /> {/* fully responsive on all device views. */}
                {/* {token === null && id === null ? 
                    <Switch>
                       <Route path="/auth" exact component={Auth} /> {/* fully responsive on all device views. */}
                       {/* <Redirect to="/auth" />
                    </Switch> */}
                    {/* : */}
                    <Switch>
                        <Route path="/" exact component={AsyncHome} /> {/* not yet responsive on all device views. */}
                        <Route path={`${id}/chat`} component={AsyncChatRoom} /> {/* not yet responsive on all device views. */}
                        <Route path={`/all_user/${id}`} component={AsyncAllUsers} /> {/* not yet responsive on all device views. */}
                        <Route path={`/user_profile/${id}`} component={AsyncUserProfile} /> {/* not yet responsive on all device views. */}
                        <Redirect to="/" />
                    </Switch>
                {/* }   */}
            </ContextHook>
        </React.Fragment>
    )
};

export default App;