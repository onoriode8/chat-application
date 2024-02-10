import React from 'react';

const userStyle = {
    display: "flex", justifyContent: "center",
    flexDirection: "row",
    border: "1px solid #ccc",
    boxShadow: "1px 3px 11px 0px #ccc",
    padding: "8px 6px",
    width: "200px",
    alignItems: "center",
    margin: "8px 0px"
}

const imgStyle = {
    width: "30px", height: "30px",
    borderRadius: "100px"
}


const allUsersItems = React.memo((props) => {
console.log("INDEX", props)
    const username = props.email.split("@")[0];

    return (
    <div style={userStyle}>
        <div>
            <img style={imgStyle} src={`http://localhost:8080/${props.image}`} alt="" />
        </div>
        <div>{username}</div>
    </div>
   )
})


export default allUsersItems