import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material'
import DefaultLandingTitle from '../../atoms/DefaultLandingTitle'
import { map } from 'lodash'
import { useQuery } from '@apollo/client'
import { GET_USER_GAMES_DATA } from '../../../graphql/queries/userGames'
import styled from '@emotion/styled'

const StyledContainer = styled(Grid)`
  border-radius: 10px;
  border: 2px solid #0942ad90;
  margin-top: 50px;
  color: #EE9E20;
  &:hover {
    border: 2px solid #EE9E2090;
    color: #093272;
    box-shadow: 2px 4px 10px grey;
  }
`

type GameType = {
  id: number
}


export default function MyGamesPage(): JSX.Element {

  const { loading, error, data } = useQuery(GET_USER_GAMES_DATA, {
    variables: {
      id: 1
    }
  })

  const [games, setGames] = useState<GameType[]>([
    {id: 0},{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9}
  ])

  return (
    <Grid
      container
      spacing={5}
      justifyContent='center'
      sx={{ marginTop: 10 }}
    >
      <Grid item xs={12}>
        <DefaultLandingTitle title={`Your Games`}/>
      </Grid>
      <Grid item xs={6}>
        <Grid container>
          {map(games, function(game) {
            return(
              <StyledContainer container>
                <Grid item xs={12}>
                  <Grid container justifyContent='center'>
                    <Typography variant='h2'>Team #1 vs Team #2</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justifyContent='center'>
                    <Typography variant='h2'>0 : 0</Typography>
                  </Grid>
                </Grid>
              </StyledContainer>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}
