import React from 'react'
import { CircularProgress, Container, Grid } from '@mui/material'
import { useQuery } from '@apollo/client'
import map from 'lodash/map'
import get from 'lodash/get'
// src
import { GET_PLAYER_GAMES } from 'src/graphql/query/games'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import GameCard from 'src/components/molecules/GameCard'

export default function MyLastGames(): JSX.Element {
  const { loading, error, data } = useQuery(GET_PLAYER_GAMES, {
    variables: {
      pagination: {
        per: 6,
        page: 1,
      },
    },
  })

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          '&:last-child': {
            marginBottom: 10,
          },
        }}
      >
        <Grid item xs={12}>
          <DefaultLandingTitle title={'My Last Games'}/>
        </Grid>
        <Grid item xs={12} lg={10}>
          <Grid
            container
            justifyContent="center"
          >
            {loading && (
              <Grid item>
                <CircularProgress/>
              </Grid>
            )}
            {!loading && error && <CircularProgress/>}
            {!loading && !error && map(get(data, 'fetchGames.nodes', []), (game, index) => (
              <GameCard key={index} game={game}/>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
