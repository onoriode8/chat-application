import spinnerCss from './spinner.module.css';


const spinner = () => (
    <div className={spinnerCss.loader}>
        {/* <div> */}
            Loading ...
        {/* </div> */}
    </div>
);

export default spinner;