import React from 'react'

const TextInput = ({ id, label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input id={id} type="text" value={value} onChange={(e) => onChange(e.target.value)}/>
    </div>


  )
}

export default TextInput;
