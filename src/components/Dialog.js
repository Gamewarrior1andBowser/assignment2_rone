import { useState } from "react";

function Dialog(props) {
  const[isHidden, setHidden] = useState(true);

  if (props.popup) {
    return (
      <>
        <p>temp text</p>
      </>
    );
  } else {
    return (
        <footer>
          <button onClick={() => {setHidden(!isHidden)}}>Open Dialog</button>
        </footer>
    );
  }
  
}

export default Dialog;