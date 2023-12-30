import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import Navigation from '../../components/layout/toolbar/navigation/navigation';
import SideDrawer from '../../components/layout/toolbar/side-drawer/side-drawer';
// import AllUsersPosts from '../../components/users-posts/users/users';
// import ChatRoom from '../chat-room/chats/chat';
import Toolbar from "../../components/layout/toolbar/toolbar";
import ContextHook from '../../hooks/context';
import AllUsers from '../all-users/all-users';

// import classes from './app.module.css';
import UserProfile from '../profile/user-profile/user-profile';
import Auth from '../auth/register/register';
import { Context } from '../../hooks/context';
import Home from '../../components/home/home';
import ErrorPage from '../../UI/errorMessage/error-page';
import ChatRoom from '../chat-room/chats/chat';


const App = React.memo((props) => {

    const { token, id } = useContext(Context)

    return (
        <React.Fragment>
            <ContextHook>
                <Toolbar />
                {token === null && id === null ? 
                    <Switch>
                       <Route path="/auth" component={Auth} />
                       <Redirect to="/auth" />

                    </Switch>
                    :
                    <Switch>
                        <Route path="/" component={Home} />
                        <Route path={`${id}/chat`} component={ChatRoom} />
                        <Route path={`/all_user/${id}`} component={AllUsers} />
                        <Route path={`/user_profile/${id}`} component={UserProfile} />
                        <Redirect to="/" />
                        {/* <Route path="*" component={<ErrorPage />} />  */}
                    </Switch>
                } 
            </ContextHook>
        </React.Fragment>
    )
});

export default App;