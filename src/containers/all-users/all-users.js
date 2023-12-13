import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// import * as actionTypes from "../../store/actions/action-types";
import { fetchUsers } from '../../store/actions/actions-creators';
import AllUsersItems from '../../components/users-posts/users/all-users/all-users-items'

const AllUsers = React.memo((props) => {

    useEffect(() => {
        console.log("CHECK CHECK")
        if(props.allusers.length !== 0) return
        const getRequest = () => {
            props.getAllUsers();
        }
        getRequest();
    }, [props]);

    console.log(props);

    return (
        <div>
            {props.allusers.length === 0 ? null : 
                props.allusers.map((items, index) => <AllUsersItems key={items.id} id={index} {...items} />)}
        </div>
    );
});

const mapStateToProps = state => {
    return {
        allusers: state.users.allUsers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);