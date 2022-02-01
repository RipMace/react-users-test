import React from 'react'
import styles from "./styles.module.css";

const Alert = ({ onRefuse, onConfirm, text }) => {
  return (
    <div className={styles.wrapper}>
      <p>{text}</p>
      <div className="flex-between">
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onRefuse}>No</button>
      </div>
    </div>
  )
}

export default Alert;
