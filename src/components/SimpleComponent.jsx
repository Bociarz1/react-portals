import Portal from "./Portal";
import { useState } from "react";

function SimpleComponent() {
  const [visible, setVisible] = useState(false)
  function showPortalComponent() {
    setVisible(!visible)
  }
  return ( 
    <>
      <h1>
        This Simple Component is in the div#root
      </h1>
      <button onClick={showPortalComponent}>
        Click to show Portal Component
      </button>
      <Portal visible={visible}>
        <h1>
          This is the Portal Component in div#root-portal
        </h1>
      </Portal>
    </>
   );
}

export default SimpleComponent;