import React from 'react'
import { Grid } from '@mui/material'
import DefaultLandingTitle from '../../atoms/DefaultLandingTitle'

interface StatisticGamePageProps {
  gameId: number
}

export default function StatisticGamePage({ gameId }: StatisticGamePageProps) {
  return(
    <Grid
      container
      spacing={5}
      justifyContent='center'
      sx={{ marginTop: 10 }}
    >
      <Grid item xs={12}>
        <DefaultLandingTitle title={`Statistic for game ${gameId}`}/>
      </Grid>
    </Grid>
  )
}
