import searchOutputCss from "./searchoutput.module.css";


const searchOutput = (props) => {
    return (
        <div className={searchOutputCss.searchoutput}>
            <div>{props.name}</div>
        </div>
    )
}

export default searchOutput