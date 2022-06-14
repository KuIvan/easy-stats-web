import React, { ChangeEvent } from 'react'
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { map } from 'lodash'

type FormType = {
  id: number
  value: number | string
  menuItems: []
  setValue: Function
  label: string
}

interface Props {
  form: FormType
}

export default function Selector({form}: Props) {

  function handleChange(_event: ChangeEvent<{}>, setValue: any): void {
    setValue((_event.target as HTMLTextAreaElement).value)
  }

  return (
    <Grid item xs={2} key={form.id}>
      <FormControl fullWidth>
        <InputLabel>{form.label}</InputLabel>
        <Select
          value={form.value}
          label={form.label}
          onChange={(event: any) => handleChange(event, form.setValue)}
        >
          {map(form.menuItems, (item: any) => (
            <MenuItem
              key={item.id}
              value={item.seasonsSquadsPlayer ? item.id : item.value}
            >
              {item.seasonsSquadsPlayer ? item.seasonsSquadsPlayer?.teamsPlayer.user.fullName : item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  )
}
