import React from 'react'
import { Grid, Link, Typography } from '@mui/material'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import HdrAutoIcon from '@mui/icons-material/HdrAuto'
import RectangleIcon from '@mui/icons-material/Rectangle'

type PlayerType = {
  id: number
  seasonsSquadsPlayer: SeasonsSquadsPlayerType
  goalsCount: number
  assistCount: number
  yellowCardCount: number
  redCardCount: number
}

type SeasonsSquadsPlayerType = {
  teamsPlayer: TeamsPlayerType
}

type TeamsPlayerType = {
  user: UserType
  number: number
}

type UserType = {
  id: number
  fullName: string
}

export default function UserMap(player: PlayerType) {
  const userName = player.seasonsSquadsPlayer?.teamsPlayer
  return (
    <Grid item xs={12} key={player.id}>
      <Grid container justifyContent='center'>
        <Link href={`/user-stats/${userName.user.id}`}>
          <Typography variant='h5'>
            {[userName.user.fullName, userName.number].join(' ')}
          </Typography>
        </Link>
      </Grid>
      <Grid container justifyContent='center'>
        <Grid item xs={8}>
          <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={2}>
              <Typography fontSize={16}>
                <SportsSoccerIcon/> {player.goalsCount ? player.goalsCount : 0}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography fontSize={16}>
                <HdrAutoIcon/> {player.assistCount ? player.assistCount : 0}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography fontSize={16}>
                <RectangleIcon
                  style={{ color: '#EE9E20' }}/> {player.yellowCardCount ? player.yellowCardCount : 0}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography fontSize={16}>
                <RectangleIcon
                  style={{ color: 'red' }}/> {player.redCardCount ? player.redCardCount : 0}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
