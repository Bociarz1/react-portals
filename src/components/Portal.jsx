import ReactDOM  from "react-dom";

function Portal({children, visible}) {

  const visibleStyle= {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
  if (visible === false) return null
  return ReactDOM.createPortal( 
    <div style={visibleStyle}>
      {children}
    </div>,
    document.getElementById("portal-root")
  );
}

export default Portal;