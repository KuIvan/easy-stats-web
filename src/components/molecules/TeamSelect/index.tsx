import React, { useEffect, useState } from 'react'
import { Grid, Switch, Typography } from '@mui/material'

interface Props {
  onChange: Function
  stats: string[]
}

export default function TeamSelect({ onChange, stats }: Props) {

  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange()
    setChecked(event.target.checked);
  };

  useEffect(() => {
    setChecked(false)
  },[stats])

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
