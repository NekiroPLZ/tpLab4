/* eslint-disable react/prop-types */
import { useState } from "react";

function Toggle() {
  const [hide, setHide] = useState(true);

  const hideHandler = () => {
    setHide(!hide);
  };
  // const handleMouseEnter = () => {
  //   setHide(true);
  // };

  // const handleMouseLeave = () => {
  //   setHide(false);
  // };
  return (
    <div>
      <button onClick={hideHandler}>CLICK ME</button>
      {hide && <h2>Message</h2>}
    </div>
  );
}

export default Toggle;
