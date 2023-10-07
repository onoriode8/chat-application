
const readMeButton = (props) => {

    const style={
        backgroundColor: props.backgroundColor,
        borderRadius: "5px",  
        border: "none",
        color: props.color,
        padding: "7px 13px",
        boxShadow: props.boxshadow,
        margin: "15px 0px"
        // marginRight: props.marginRight,
    };

    return (
        <button  style={style}>Read more</button>
   );
    
};

export default readMeButton;