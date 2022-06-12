import React, { useEffect, useState } from 'react'
import { Button, CircularProgress, Grid, Link, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
import { map } from 'lodash'
//srx
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import { GET_GAME_DATA } from 'src/graphql/queries/game'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import setTeamPicture from 'src/utils/TeamPicture'
import NoAccess from 'src/components/pages/NoAccesPage'
import UserMap from 'src/components/organisms/UserMap'

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

  const { loading, data } = useQuery(GET_GAME_DATA, {
    variables: {
      id: gameId,
    },
  })

  useEffect(() => {
    setHost(data?.getGame.gamesSquads[0])
    setGuest(data?.getGame.gamesSquads[1])
  }, [loading, data?.getGame])

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
                  <UserMap
                    key={player.id}
                    id={player.id}
                    seasonsSquadsPlayer={player.seasonsSquadsPlayer}
                    goalsCount={player.goalsCount}
                    assistCount={player.assistCount}
                    yellowCardCount={player.yellowCardCount}
                    redCardCount={player.redCardCount}
                  />
                )
              })}
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={5}>
              {map(guest?.gamesSquadsPlayer, function (player: PlayerType) {
                return (
                  <UserMap
                    key={player.id}
                    id={player.id}
                    seasonsSquadsPlayer={player.seasonsSquadsPlayer}
                    goalsCount={player.goalsCount}
                    assistCount={player.assistCount}
                    yellowCardCount={player.yellowCardCount}
                    redCardCount={player.redCardCount}
                  />
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
