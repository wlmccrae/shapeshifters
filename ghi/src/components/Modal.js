function Modal({ visible, onClose, children }) {
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
      <div>{children}</div>
    </div>
  );
}

export default Modal;
