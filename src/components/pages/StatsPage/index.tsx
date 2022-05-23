import React from 'react'
import { Grid } from '@mui/material'
// src
type Props = {
  userId?: string | string[],
};
export default function StatsPage({ userId }: Props): JSX.Element {

  console.log('userId', userId)

  return (
    <Grid sx={{ marginTop: 10 }}>
      <div>11111</div>
    </Grid>
  )
}
