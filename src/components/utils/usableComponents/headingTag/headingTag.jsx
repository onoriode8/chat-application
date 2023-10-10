

const headingTag = props => (
    <div style={{textAlign: props.textAlign, fontSize: props.fontSize,
     fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
        <h2>{props.headingText}</h2>
    </div>
);

export default headingTag;