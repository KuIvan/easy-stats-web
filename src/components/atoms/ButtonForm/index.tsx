import React from 'react'
import { Button } from '@mui/material'

interface ButtonProps {
  value: string
  onClickFunc: Function
  disabled?: boolean
  variable?: any
}

export default function ButtonForm({
    variable,
    onClickFunc,
    value,
    disabled,
  }: ButtonProps) {
  return (
    <Button
      onClick={() => onClickFunc(variable)}
      disabled={disabled}
    >
      {value}
    </Button>
  )
}

