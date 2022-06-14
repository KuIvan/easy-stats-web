import React, { useEffect, useState } from 'react'
import { Button, Grid, Link } from '@mui/material'
import { map } from 'lodash'
import { useQuery } from '@apollo/client'
//src
import { GET_PLAYER_GAMES } from 'src/graphql/queries/games'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import GameList from 'src/components/organisms/GameList'

type GameType = {
  id: number
  gameDay: string
  gamesSquads: any
}


export default function MyGamesPage(): JSX.Element {

  const [games, setGames] = useState<GameType[]>([])

  const { loading, error, data } = useQuery(GET_PLAYER_GAMES, {
    variables: {
      pagination: {
        per: 10,
        page: 1,
      },
    },
  })

  useEffect(() => {
    setGames(data?.fetchGames.nodes)
  }, [loading, data?.fetchGames.nodes])

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
      <Grid item xs={12}>
        <Link href='/home'>
          <Grid container justifyContent='center'>
            <Button variant='outlined'>Home</Button>
          </Grid>
        </Link>
      </Grid>
      <Grid item xs={8}>
        <Grid container justifyContent='center'>
          {map(games, (game) => {
            return (
              <Grid item xs={12} key={game.id}>
                <GameList game={game} link='/game-personal-stats'/>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

