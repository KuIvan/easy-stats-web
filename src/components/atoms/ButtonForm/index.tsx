import React from 'react'
import { Button } from '@mui/material'

interface ButtonProps {
  value: string
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
    //NOTE:: Why is it array? Is it only for array?
    <Button onClick={() => onClickFunc(array)} disabled={disabled}>{value}</Button>
  )
}

