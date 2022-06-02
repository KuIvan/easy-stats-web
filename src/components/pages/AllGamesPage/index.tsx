import React, { useEffect, useState } from 'react'
import { Button, Grid, Link, Typography } from '@mui/material'
import { map } from 'lodash'
import { useQuery } from '@apollo/client'
import styled from '@emotion/styled'
import moment from 'moment'
//src
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import { FETCH_ALL_GAMES_DATA } from 'src/graphql/queries/game/fetchAllGames'

const StyledContainer = styled(Grid)`
  border-radius: 10px;
  border: 2px solid #0942ad90;
  margin-top: 30px;
  color: #EE9E20;
  &:hover {
    border: 2px solid #EE9E2090;
    color: #093272;
    box-shadow: 2px 4px 10px grey;
  }
`

type GameType = {
  id: number
  gameDay: string
  gamesSquads: any
}


export default function MyGamesPage(): JSX.Element {

  const [games, setGames] = useState<GameType[]>([])

  const { loading, error, data } = useQuery(FETCH_ALL_GAMES_DATA, {
    variables: {
      pagination: {
        per: 10,
        page: 1,
      },
    },
  })

  useEffect(() => {
    setGames(data?.fetchAllGames)
  }, [loading])

  return (
    <Grid
      container
      spacing={5}
      justifyContent='center'
      sx={{ marginTop: 10 }}
    >
      <Grid item xs={12}>
        <DefaultLandingTitle title={`All Games`}/>
      </Grid>
      <Grid item xs={12}>
        <Link href='/home'>
          <Grid container justifyContent='center'>
            <Button variant='outlined'>Home</Button>
          </Grid>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Grid container justifyContent='center'>
          {map(games, function (game) {
            return (
              <Link href={`/add-game-stats/${game.id}`}>
                <StyledContainer container key={game.id}>
                  <Grid item xs={12}>
                    <Grid container justifyContent='center'>
                      <Typography variant='h5'>{moment(game.gameDay).format('MMMM Do YYYY')}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justifyContent='center'>
                      <Typography
                        variant='h2'>{game.gamesSquads[0].seasonsSquad.team.name} vs {game.gamesSquads[1].seasonsSquad.team.name}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justifyContent='center'>
                      <Typography variant='h2'>{game.gamesSquads[0].goals} : {game.gamesSquads[1].goals}</Typography>
                    </Grid>
                  </Grid>
                </StyledContainer>
              </Link>
            )
          })}
        </Grid>
      </Grid>

    </Grid>
  )
}
