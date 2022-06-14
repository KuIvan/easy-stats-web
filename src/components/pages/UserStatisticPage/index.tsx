import React, { useEffect, useState } from 'react'
import { Button, CircularProgress, Grid, Link, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
//src
import { GET_USER_STATISTICS_DATA } from 'src/graphql/queries/user'
import { GET_ALL_USER_GOALS_DATA } from 'src/graphql/queries/action/goalActions'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import setTeamPicture from 'src/utils/TeamPicture'

type ActionType = {
  gamesCount: number
  goalsCount: number
  assistsCount: number
  yellowCardsCount: number
  redCardsCount: number
}

type TeamType = {
  id: number
  name: string
  teamPhoto?: any
}

type TeamsPlayerType = {
  id: number
  team: TeamType
}

type UserType = {
  id: number
  fullName: string
  email: string
  actions: ActionType
  teamsPlayers: TeamsPlayerType[]
}

interface StatisticUserPageProps {
  userId: number
}

export default function UserStatisticPage({ userId }: StatisticUserPageProps): JSX.Element {

  const [user, setUser] = useState<UserType | null>(null)
  const { user: currentUser, loading: loadingCurrentUser } = useCurrentUser();
  const [actions, setActions] = useState<ActionType | null>(null)

  const { loading: loadUser, data: dataGetUser } = useQuery(GET_USER_STATISTICS_DATA, {
      variables: {
        id: userId
      }
    }
  )

  const { loading: loadGoal, data: dataGoals } = useQuery(GET_ALL_USER_GOALS_DATA, {
    variables: {
      userId: userId
    }
  })

  useEffect(() => {
    setUser(dataGetUser?.getUser)
    setActions(dataGoals?.getAllUserGoals)
  }, [loadUser, loadGoal])

  if (loadingCurrentUser) {
    return (
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        style={{ height: '80vh'}}
      >
        <CircularProgress/>
      </Grid>
    )
  } else {
    if (!currentUser) {
      return <NoAccess/>
    } else {
      return (
        <Grid
          container
          justifyContent='center'
          spacing={5}
          sx={{ marginTop: 10 }}
        >
          <Grid item xs={12}>
            <DefaultLandingTitle title={`User Statistic for ${user?.teamsPlayers[0]?.team.name}`}/>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent='center'
            >
              <Typography variant='h1' color='#EE9E20'>{user?.fullName}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
            >
              <Grid item xs={6}>
                <Grid container justifyContent='end'>
                  <Typography variant='h1' color='#093272'>{user?.teamsPlayers[0]?.team.name}</Typography>
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <img alt='team-logo' src={setTeamPicture(user?.teamsPlayers[0]?.team.name)}
                     style={{ width: 150, borderRadius: '30%' }}/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent='center' spacing={10}>

              <Grid item xs={12}>
                <Grid container justifyContent='center'>
                  <Typography variant='h4' color='#093272'>Games: {actions?.gamesCount}</Typography>
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <Grid container justifyContent='end'>
                      <Typography variant='h4' color='#093272'>Goals: {actions?.goalsCount}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justifyContent='end'>
                      <Typography variant='h4' color='#EE9E20'>Assists: {actions?.assistsCount}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <Typography variant='h4' color='#EE9E20'>Yellow Card: {actions?.yellowCardsCount}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant='h4' color='#093272'>Red Card: {actions?.redCardsCount}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container justifyContent='center'>
              <Link href='/home'>
                <Button variant='outlined'>Home</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      )
    }
  }
}
