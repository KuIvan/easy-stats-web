import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
//srx
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import { GET_GAME_DATA } from 'src/graphql/queries/game'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
// import NoAccess from 'src/components/pagesNoAccesPage'

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
  },[loading, data?.getGame])

  if (useCurrentUser() === undefined) {
    // return <NoAccess/>
    return <Typography variant='h3'>Not enough rules</Typography>
  } else {
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
          <Typography variant='h3'>React vs Lazo</Typography>
        </Grid>
      </Grid>
    )
  }
}
