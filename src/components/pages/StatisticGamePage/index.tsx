import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import TableStats from 'src/components/molecules/TableStats'
import { useQuery } from '@apollo/client'
import { GET_GAME_DATA } from '../../../graphql/queries/game'

type GameType = {
  id: number
}

interface StatisticGamePageProps {
  gameId: number
}

export default function StatisticGamePage({ gameId }: StatisticGamePageProps) {

  const [gameStats, setGameStats] = useState<GameType>()

  const { loading, error, data } = useQuery(GET_GAME_DATA, {
    variables: {
      id: gameId,
    },
  })

  useEffect(() => {
    setGameStats(data?.getGame)
  },[loading])

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
        <Typography variant='h3'>TestName1 vs TestName2</Typography>
      </Grid>
    </Grid>
  )
}
