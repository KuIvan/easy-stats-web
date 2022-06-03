import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { map } from 'lodash'

interface formField {
  id: number,
  label: string,
  menuItems: string[],
  value: number,
  setValue: Function
}

interface FormControlProps {
  form: formField
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
            <MenuItem
              key={item.id}
              value={( form.id != 0 && form.id != 3) ? item.seasonsSquadsPlayer.teamsPlayer : item.value}
            >
              {( form.id != 0 && form.id != 3) ? item.seasonsSquadsPlayer.teamsPlayer.user.fullName : item.label}
            </MenuItem>
          )}
        )}
      </Select>
    </FormControl>
  )
}
