import React from 'react';

import Navigation from '../../components/layout/toolbar/navigation/navigation';
import AllUsersPosts from '../../components/users-posts/users/users';
import ChatRoom from '../chat-room/chats/chat';

const App = () => {
    return (
        <React.Fragment>
            <div style={{ display: "flex" }}>
                <Navigation />
                <AllUsersPosts />
                <ChatRoom />
            </div>
        </React.Fragment>
    )
};

export default App;