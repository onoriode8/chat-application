import classes from './offer.module.css'

const offer = props => (
    <div className={classes.offer_container}>
        <div className={classes.braid_cont}>
            <div className={classes.braid_container}>
                <img className={classes.image}
                     src={props.icon} alt="" />
                <div>{props.title}</div>
            </div>
            <p>Lorem ipsum dolor Quidem some text about braid</p>
        </div>
    </div>
);

export default offer;