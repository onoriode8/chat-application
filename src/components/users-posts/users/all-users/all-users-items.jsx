import appleImage from '../../../../assests/webdeve1.webp'

const userStyle = {
    display: "flex", justifyContent: "start",
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


const allUsersItems = (props) => {
console.log(props)
console.log("INDEX", props.id)


    return (
    <div style={userStyle}>
        <div><img style={imgStyle} src={appleImage} alt="" /></div>
        {/* <div>{props.name}</div> */}
        <div>{props.username}</div>
        {/* <div>{props.email}</div> */}
        {/* <div>...</div> */}
    </div>
)
    }


export default allUsersItems