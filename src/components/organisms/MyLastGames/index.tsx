import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useQuery } from '@apollo/client';
// src
import { GET_PLAYER_GAMES } from 'src/graphql/query/games'

export default function MyLastGames(): JSX.Element {
  const { loading, error, data } = useQuery(GET_PLAYER_GAMES, {
    variables: {
      pagination: {
        per: 10,
        page: 1
      }
    }
  });

  return (
    <Container maxWidth="xl" sx={{ marginTop: 4 }}>
      <Grid
        container
      >
        <Grid
          item
          xs={12}
        >
          <Typography
            variant="h2"
            color="system.black.main"
          >
            My Last Games
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
