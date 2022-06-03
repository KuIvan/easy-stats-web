import React, { useState } from 'react'
import { Grid } from '@mui/material'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import TableStats from 'src/components/molecules/TableStats'

type GameType = {
  id: number
}

interface StatisticGamePageProps {
  gameId: number
}

export default function StatisticGamePage({ gameId }: StatisticGamePageProps) {

  const [gameStats, setGameStats] = useState<GameType[]>([])

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
      <Grid item xs={8}>
        <TableStats
          rowName={['№','playerFirst', 'action', 'PlayerSecond', 'Nothing']}
          rows={gameStats}
        />
      </Grid>
    </Grid>
  )
}
