import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';

// import * as actionTypes from "../../store/actions/action-types";
import { fetchUsers } from '../../store/actions/actions-creators';
import AllUsersItems from '../../components/users-posts/users/all-users/all-users-items';
// import Spinner from '../../UI/spinner/spinner';
import ErrorMessage from '../../UI/errorMessage/error-message';

    import { Context } from '../../hooks/context';

const AllUsers = (props) => {
    const [loading, setLoading] = useState(false);
    const [clear, setClear] = useState(true);

    const { token } = useContext(Context);

    useEffect(() => {
        setLoading(true)
        if(props.allusers.length === 0) {
            setLoading(false)
        }
        if(props.allusers.length !== 0) {
            setLoading(false);
            return
        }
        const getRequest = () => {
            props.getAllUsers(token);
        }
        getRequest();
    }, [props, token]);

    const clearModel = () => {
        setLoading(false);
        setClear(false)
    }


    return (
        <div>
            {clear ? <div style={{textAlign: "center"}}>
                {props.errors ? <ErrorMessage errorMessage={props.errors} clear={clearModel} /> : null}
            </div> : null}
            {/* <div style={{textAlign: "center"}}>{ props.spinner ? <Spinner />: null }</div> */}
            {loading ? <div style={{textAlign: "center"}}>Loading...</div> : null}
            {props.allusers.length === 0 ? <div style={{textAlign: "center"}}>No User Yet!</div> : 
                props.allusers.map(items => <AllUsersItems key={items._id} email={items.email} 
                id={items._id} image={items.image[0]}/>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        allusers: state.users.allUsers,
        spinner: state.users.spinner,
        errors: state.users.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: (token) => dispatch(fetchUsers(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);