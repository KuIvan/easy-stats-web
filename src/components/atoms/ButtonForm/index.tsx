import React from 'react'
import { Button } from '@mui/material'

type Value = string

interface ButtonProps {
  value: Value
  onClickFunc: Function
  disabled?: boolean
  array?: any
}

export default function ButtonForm({
    array,
    onClickFunc,
    value,
    disabled,
  }: ButtonProps) {
  return (
    <Button onClick={() => onClickFunc(array)} disabled={disabled}>{value}</Button>
  )
}

