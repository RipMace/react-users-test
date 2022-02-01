import React from 'react'
import styles from "./styles.module.css";

const Alert = ({ onRefuse, onConfirm, text }) => {
  return (
    <div>
      {text}
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onRefuse}>No</button>
    </div>
  )
}

export default Alert;
