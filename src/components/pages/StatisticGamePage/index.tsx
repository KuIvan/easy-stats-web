import React, { useEffect, useState } from 'react'
import { Button, Grid, Link, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
import { map } from 'lodash'
//srx
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import { GET_GAME_DATA } from 'src/graphql/queries/game'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import setTeamPicture from 'src/utils/TeamPicture'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import RectangleIcon from '@mui/icons-material/Rectangle';

type TeamNameType = {
  name: string
  teamPhoto: string
}

type UserType = {
  fullName: string
  id: number
}

type TeamsPlayer = {
  number: number
  user: UserType
}

type SeasonPlayerType = {
  teamsPlayer: TeamsPlayer
}

type PlayerType = {
  id: number
  seasonsSquadsPlayer: SeasonPlayerType
  goalsCount: number
  assistCount: number
  yellowCardCount: number
  redCardCount: number
}

type SeasonsSquad = {
  team: TeamNameType
}

type TeamType = {
  id: number
  goals: number
  gamesSquadsPlayer: object[]
  status: string
  name: string
  seasonsSquad: SeasonsSquad
}

interface StatisticGamePageProps {
  gameId: number
}

export default function StatisticGamePage({ gameId }: StatisticGamePageProps) {

  const [host, setHost] = useState<TeamType | null>(null)
  const [guest, setGuest] = useState<TeamType | null>(null)

  const { loading, error, data } = useQuery(GET_GAME_DATA, {
    variables: {
      id: gameId,
    },
  })

  useEffect(() => {
    setHost(data?.getGame.gamesSquads[0])
    setGuest(data?.getGame.gamesSquads[1])
  }, [loading, data?.getGame])

  if (useCurrentUser() === undefined) {
    // return <NoAccess/>
    return <Typography variant='h3'>Not enough rules</Typography>
  } else {
    return (
      <Grid
        container
        spacing={5}
        justifyContent='center'
        sx={{ marginTop: 10 }}
      >
        <Grid item xs={12}>
          <DefaultLandingTitle title={`Statistic for Game`}/>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent='center' alignItems='center' spacing={5}>
            <Grid item>
              <img
                alt='logo-team-1'
                src={setTeamPicture(host?.seasonsSquad.team.name)}
                style={{ height: 150, width: 150, borderRadius: '20%', objectFit: 'cover' }}
              />
            </Grid>
            <Grid item>
              <Typography variant='h3'>{host?.seasonsSquad.team.name} : {guest?.seasonsSquad.team.name}</Typography>
            </Grid>
            <Grid item>
              <img
                alt='logo-team-2'
                src={setTeamPicture(guest?.seasonsSquad.team.name)}
                style={{ height: 150, width: 150, borderRadius: '50%', objectFit: 'cover' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            <Typography variant='h3'>{host?.goals} : {guest?.goals}</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justifyContent='space-around'>
            <Grid item xs={3}>
              <Grid container spacing={5}>
                {map(host?.gamesSquadsPlayer, function (player: PlayerType) {
                  return (
                    <Grid item xs={12} key={player.id}>
                      <Grid container justifyContent='end'>
                          <Link href={`/user-stats/${player.seasonsSquadsPlayer?.teamsPlayer.user.id}`}>
                            <Typography variant='h5'>
                              {player.seasonsSquadsPlayer?.teamsPlayer.user.fullName} {player.seasonsSquadsPlayer?.teamsPlayer.number}
                            </Typography>
                          </Link>
                        </Grid>
                      <Grid container justifyContent='end'>
                        <Grid item xs={8}>
                          <Grid container spacing={2} justifyContent='end'>
                            <Grid item xs={2}>
                              <Typography fontSize={16}>
                                <SportsSoccerIcon /> {player.goalsCount ? player.goalsCount : 0}
                              </Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography  fontSize={16}>
                                <HdrAutoIcon /> {player.assistCount ? player.assistCount : 0}
                              </Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography  fontSize={16}>
                                <RectangleIcon style={{ color: '#EE9E20'}} /> {player.yellowCardCount ? player.yellowCardCount : 0}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography  fontSize={16}>
                                <RectangleIcon style={{ color: 'red'}} /> {player.redCardCount ? player.redCardCount : 0}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container spacing={5}>
                {map(guest?.gamesSquadsPlayer, function (player: PlayerType) {
                  return (
                    <Grid item xs={12} key={player.id}>
                      <Grid container>
                        <Link href={`/user-stats/${player.seasonsSquadsPlayer?.teamsPlayer.user.id}`}>
                          <Typography variant='h5'>
                            {player.seasonsSquadsPlayer?.teamsPlayer.user.fullName} {player.seasonsSquadsPlayer?.teamsPlayer.number}
                          </Typography>
                        </Link>
                      </Grid>
                      <Grid container>
                        <Grid item xs={8}>
                          <Grid container spacing={2}>
                            <Grid item xs={2}>
                              <Typography fontSize={16}>
                                <SportsSoccerIcon /> {player.goalsCount ? player.goalsCount : 0}
                              </Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography  fontSize={16}>
                                <HdrAutoIcon  /> {player.assistCount ? player.assistCount : 0}
                              </Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography  fontSize={16}>
                                <RectangleIcon style={{ color: '#EE9E20'}} /> {player.yellowCardCount ? player.yellowCardCount : 0}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography  fontSize={16}>
                                <RectangleIcon style={{ color: 'red'}} /> {player.redCardCount ? player.redCardCount : 0}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Link href='/home'>
          <Grid item xs={12}>
            <Grid container justifyContent='center'>
              <Button variant='outlined'>Home</Button>
            </Grid>
          </Grid>
        </Link>
      </Grid>
    )
  }
}
