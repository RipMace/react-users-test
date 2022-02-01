import React from 'react'

const TextInput = ({ label, id, value, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input id={id} data-testid={id} placeholder={`Insert ${label}`} type="text" value={value} onChange={(e) => onChange(e.target.value)}/>
    </>
  )
}

export default TextInput;
