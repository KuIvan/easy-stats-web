import React, { useEffect, useState } from 'react'
import { Button, Grid, Link } from '@mui/material'
import { map } from 'lodash'
import { useQuery } from '@apollo/client'
//src
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import { FETCH_ALL_GAMES_DATA } from 'src/graphql/queries/game/fetchAllGames'
import GameList from 'src/components/organisms/GameList'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'

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

  if (useCurrentUser() === undefined) {
    return <NoAccess/>
  } else {
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

        <Grid item xs={5}>
          <Grid container justifyContent='center'>
            {map(games, function (game) {
              return <GameList game={game} link='add-game-stats'/>
            })}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
