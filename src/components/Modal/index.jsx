import { useEffect, useMemo } from "react";
import ReactDOM from 'react-dom';
import styles from './styles.module.css'

const modalWrapper = document.getElementById('modal');

const Modal = ({ children }) => {
  const modal = useMemo(() => document.createElement('div'),[])

  useEffect(() => {
    modal.classList.add(styles.modal)
    modalWrapper.appendChild(modal);
    return () => modalWrapper.removeChild(modal)
  }, [modal])

    return ReactDOM.createPortal(children, modal);
}

export default Modal
