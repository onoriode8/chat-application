import "./backdrop.css" 

export default function backdrop({clicked}) {
    return (
    <div className="backdrop" onClick={clicked}></div>
  );
}