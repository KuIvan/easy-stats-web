import React from 'react'
import { TextField } from '@mui/material'
import { FieldMetaState } from 'react-final-form'

type Value = string

interface Meta {
  error?: FieldMetaState<Error>
  touched?: boolean | undefined
}

interface Input {
  value: Value
  onChange: Function
}

interface FormTextFieldProps {
  input: Input
  meta: Meta
  typeInput?: string
  placeholder?: string
}

export default function FormTextField({
  input: { onChange, value },
  placeholder,
  meta,
  typeInput,
  ...rest
}: FormTextFieldProps) {
  return (
    <TextField
      {...rest}
      value={value}
      type={typeInput}
      helperText={meta.touched ? meta.error : undefined}
      error={meta.error && meta.touched}
      onChange={(e: React.BaseSyntheticEvent) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  )
}
