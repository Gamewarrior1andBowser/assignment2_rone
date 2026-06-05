import { useState } from "react";

function Dialog(props) {
  const[isHidden, setHidden] = useState(true);
  return (
    <footer >
      <div className={isHidden ? "hidden popup" : "popup"}>
        <p>temp text</p>
      </div>
      <div className="flex">
        <button onClick={() => {setHidden(!isHidden)}}>
      {isHidden ? "Open Dialog" : "Close Dialog"}</button>
      </div>
      
    </footer>
  );
}

export default Dialog;