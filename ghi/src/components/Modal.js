import React, { useState, useEffect } from 'react';
import Login from "./Login";


function Modal({visible, onClose, login, component}) {

  const handleOnClose = (e) => {
    if (e.target.id === "modal-container") onClose();
  };

  if (!visible) return null;

  return (
    <div
    id="modal-container"
    onClick={handleOnClose}
    className="fixed z-0 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
        <div>
          {component}
        </div>
    </div>
  )
}

export default Modal