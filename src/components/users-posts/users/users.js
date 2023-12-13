import React from "react";

import ErrorMessage from "../../../UI/errorMessage/error-message";
import Spinner from '../../../UI/spinner/spinner'
import UsersOutput from "../user-output/user-output";
import { useFetchPosts } from "../../../hooks/custom-hook";

import classes from './users.module.css';

const Users = React.memo(() => {
    const { users, spinner, error, clearErrorHandler } = useFetchPosts();

    return (
        <div className={classes.wrapper}>
            {spinner && <Spinner />}
            {error && <ErrorMessage clear={clearErrorHandler} errorMessage={error} />}
            <div className={classes.cont}>
                {users.length !== 0 ? users.map(u => <UsersOutput key={u.id} {...u} />) : null}
            </div>
        </div>
    );
});

export default Users;