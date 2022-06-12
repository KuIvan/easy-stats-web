import React, { ChangeEvent } from 'react'
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { map } from 'lodash'

export default function Selector({form}: any) {

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
              value={item.seasonsSquadsPlayer ? item.seasonsSquadsPlayer?.teamsPlayer.id : item.value}
            >
              {item.seasonsSquadsPlayer ? item.seasonsSquadsPlayer?.teamsPlayer.user.fullName : item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  )
}
