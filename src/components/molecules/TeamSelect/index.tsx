import React, { useState } from 'react'
import { FormControl, Grid, InputLabel, MenuItem, Select, Switch, Typography } from '@mui/material'

export default function TeamSelect({ onChange }: any) {

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange()
  };

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
    >
      <Grid item>
        <Typography color={ checked ? 'gray' : '#093272'} variant='h5'>Host</Typography>
      </Grid>
      <Grid item>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Grid>
      <Grid item>
        <Typography color={ checked ? '#EE9E20' : 'gray'} variant='h5'>Guest</Typography>
      </Grid>

    </Grid>

  );
}
