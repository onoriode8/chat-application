
const readMeButton = (props) => {

    const style={
        backgroundColor: props.backgroundColor,
        borderRadius: "5px",  
        border: "none",
        color: props.color,
        padding: "8px 15px",
        boxShadow: props.boxshadow,
        margin: "15px 0px",
        fontSize: "11px"
        // marginRight: props.marginRight,
    };

    return (
        <button  style={style}>Read more</button>
   );
    
};

export default readMeButton;