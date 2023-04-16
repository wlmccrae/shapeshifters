import React, { useState, useEffect } from 'react';
import Login from "./Login";


function Modal({visible, onClose, login}) {

  const handleOnClose = (e) => {
    if (e.target.id === "modal-container") onClose();
  };

  if (!visible) return null;

  return (
    <div
    id="modal-container"
    onClick={handleOnClose}
    className="fixed z-0 inset-0 bg-black opacity-30 backdrop=blur-sm flex justify-center items-center"
    >
        <div>
          {/* {login} */}
        </div>
    </div>
  )
}

export default Modal