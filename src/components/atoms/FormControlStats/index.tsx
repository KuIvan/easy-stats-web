import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { map } from 'lodash'


interface FormControlProps {
  form: any
  onChangeFunc: Function
  disabled?: boolean
}

export default function FormControlStats({
  form,
  onChangeFunc,
}: FormControlProps) {
  return (
    <FormControl fullWidth>
      <InputLabel>{form.label}</InputLabel>
      <Select
        value={form.value}
        label={form.label}
        onChange={(event: any) => onChangeFunc(event, form.setValue)}
      >
        {map(form.menuItems, function(item: any) {
          return(
            <MenuItem key={item} value={form.id != 1 ? item.seasonsSquadsPlayer.teamsPlayer.user.fullName : item.value}>{form.id != 1 ? item.seasonsSquadsPlayer.teamsPlayer.user.fullName : item.value}</MenuItem>
          )}
        )}
      </Select>
    </FormControl>
  )
}
