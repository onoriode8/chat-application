

const button = (props) => {

    const style={
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,  
        border: "none",
        color: props.text,
        // marginRight: props.marginRight,
        boxShadow: props.boxShadow,
        margin: props.margin
    };

    const containerStyle={
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center"
    }

    return (
        <button  style={style}>
            <div style={containerStyle}>
                {props.icon}
                {props.title}
            </div>
        </button>
   );
    
};

export default button;