import React from 'react'

function Modal({visible, onClose}) {
    if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black opacity-30 backdrop=blur-sm flex justify-center items-center">
        <div className='bg-white p-3 rounded'>My Modal</div>
    </div>
  )
}

export default Modal