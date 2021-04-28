import React from 'react'
import ReactDOM from 'react-dom';


export default function Modal({ open, children }) {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal">
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}
