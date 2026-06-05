import { useState } from "react";
import image from '../img/logo192.png';

function Dialog(props) {
  const[isHidden, setHidden] = useState(true);
  return (
    <footer className="container">
      <div className={isHidden ? "hidden popup flex" : "popup flex"}>
        <img src={image} alt="Uh-oh!" title="Easter Egg"></img>
      </div>
      <div className="flex">
        <button onClick={() => {setHidden(!isHidden)}}>
      {isHidden ? "Open Dialog" : "Close Dialog"}</button>
      </div>
      
    </footer>
  );
}

export default Dialog;