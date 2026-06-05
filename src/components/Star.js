import {FaStar} from "react-icons/fa";

function Star(props) {
  if (props.isLit) {
    return (
      <p className="FaStar yellow" onClick={props.light}><FaStar/></p>
    );
  } else {
    return (
      <p className="FaStar" onClick={props.light}><FaStar/></p>
    );
  }
}

export default Star;