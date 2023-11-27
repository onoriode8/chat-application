import spinnerCss from './spinner.module.css';


const spinner = () => (
    <div className={spinnerCss.spinner}>
        <div>Loading ...</div>
    </div>
);

export default spinner;