import React, { useEffect, useState} from "react";
import ReactDOM from 'react-dom';
const modalWrapper = document.getElementById('modal');

const Modal = (children) => {
  const [modal, setModal] = useState(document.createElement('div'))

  useEffect(() => {
    modalWrapper.appendChild(modal);
    return () => modalWrapper.removeChild(modal)
  }, [])

    return ReactDOM.createPortal(children, modal);
}

export default Modal
