import classes from "./card.css"


const card = (props) => (
    <div className={classes.card}>
        {/* <div className={classes.btn_container}>
            <img style={{width: "150px", height: "20vh"}} src={props.CosmeticCare} alt="" />
        </div>
        <div style={{display: "flex", justifyContent: "space-evenly"}}> */}
            {props.children}
        {/* </div> */}
    </div>
);

export default card;