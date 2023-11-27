import React, { useState, useEffect } from 'react';

import SearchOutput from '../seachoutput/searchoutput';
import Input from './input';

const Search = React.memo(() => {
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState("");
    const [spinner, setSpinner] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getAllUsers = async () => {
            setSpinner(true)
            try {
                const response = await fetch("");
                const responseData = await response.json();
                if (response.ok === false) {
                    throw new Error("user not found")
                }
                setSpinner(false);
                setUsers(responseData)
            } catch (err) {
                setSpinner(false);
                setError(err.message)
            }
        };
        getAllUsers();
    }, []);

    const onChangeEventHandler = (event) => {
        const text = event.target.value;
        setInput(text)
    }

    let search = '';
    if(input.trim().length !== 0) {
        search = users.filter(f => f.name === input);
    }

    let user = null;
    if(search.length !== 0) {
        user = search.map(u => <SearchOutput key={u.id} {...u} />)
    };

    
    return (
        <div>
            <Input onChangeEventHandler={onChangeEventHandler}/>
            <div>
                {user}
            </div>
        </div>
    )
});


export default Search;