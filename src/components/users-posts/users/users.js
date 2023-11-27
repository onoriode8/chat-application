import { useState, useEffect } from "react";

import ErrorMessage from "../../../UI/errorMessage/error-message";
import Spinner from '../../../UI/spinner/spinner'
import UsersOutput from "../user-output/user-output";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAllUsers = async () => {
            setSpinner(true)
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const responseData = await response.json();
                if (response.ok === false) {
                    throw new Error("user not found")
                }
                setSpinner(false);
                const slice = responseData.slice(0, 5);
                setUsers(slice)
            } catch (err) {
                setSpinner(false);
                setError(err.message)
            }
        };
        getAllUsers();
    }, []);
    
    return (
        <div style={{marginLeft: "-77%", marginTop: "-5%"}}>
            {spinner && <Spinner />}
            {error && <ErrorMessage clear={() => setError(null)} errorMessage={error} />}
            <div>
                {users.length !== 0 ? users.map(u => <UsersOutput key={u.id} {...u} />) : null}
            </div>
        </div>
    );
};

export default Users;