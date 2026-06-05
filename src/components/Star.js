import {FaStar} from "react-icons/fa";

function Star(props) {
  const click = () => {
    props.setRating(props.id);
    props.text();
  }


  return (
    <p className={props.id <= props.rating ? "FaStar yellow" : "FaStar"} onClick={click}><FaStar/></p>
  );
}

export default Star;