import { Grid, Link, Typography } from '@mui/material'
import moment from 'moment'
import React from 'react'
//src
import StyledContainer from 'src/components/organisms/GameList/styled'

type GameType = {
  id: number
  gameDay: string
  gamesSquads: any
}

interface GameListProps {
  game: GameType
  link: string
}

export default function GameList({ game, link } :GameListProps): JSX.Element {

  return (
    <Link href={`${link}/${game.id}`} key={game.id}>
      <StyledContainer container>
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
}
