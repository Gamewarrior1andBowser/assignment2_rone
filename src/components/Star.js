import {FaStar} from "react-icons/fa";

function Star(props) {
  if (props.isLit(props.id)) {
    return (
      <p className="FaStar yellow" onClick={props.light(props.id)}><FaStar/></p>
    );
  } else {
    return (
      <p className="FaStar" onClick={props.light(props.id)}><FaStar/></p>
    );
  }
}

export default Star;