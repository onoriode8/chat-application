import classes from './backdrop.module.css'

const backdrop = ({sideDrawerOpenHandler}) => (
    <div className={classes.backdrop} onClick={sideDrawerOpenHandler}></div>
);

export default backdrop;