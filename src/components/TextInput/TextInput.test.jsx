import React from 'react'
import TextInput  from './index'
import { render, screen, fireEvent } from '@testing-library/react';

it('Able to update value', () => {
  let value = ''
  render(<TextInput label="Name" value={value} id="name" onChange={(text) => value = text}/>)
  const input = screen.getByTestId('name')
  fireEvent.change(input, { target: { value: 'Test' } })
  expect(value).toBe('Test')
})

it('Able to reset value', () => {
  let value = 'Test'
  render(<TextInput label="Name" value={value} id="name" onChange={(text) => value = text}/>)
  const input = screen.getByTestId('name')
  fireEvent.change(input, { target: { value: '' } })
  expect(value).toBe('')
})
