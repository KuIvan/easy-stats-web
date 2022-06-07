import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
//src
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'
import { GET_USER_STATISTICS_DATA } from 'src/graphql/queries/user'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import setTeamPicture from 'src/utils/TeamPicture'
import { FETCH_GOAL_ACTIONS_DATA } from 'src/graphql/queries/action/goalActions'

type ActionType = {
  id: number
  scope: string
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
  const [actions, setActions] = useState<object[]>([])

  const { loading: loadUser, error: errorUser, data: dataGetUser } = useQuery(GET_USER_STATISTICS_DATA, {
      variables: {
        id: userId
      }
    }
  )

  const { loading: loadGoal, error: errorGoal, data: dataGoals } = useQuery(FETCH_GOAL_ACTIONS_DATA, {
    variables: {
      userId: userId,
      goals: true,
      assist: true,
      redCard: true,
      yellowCard: true
    }
  })

  useEffect(() => {
    setUser(dataGetUser?.getUser)
    setActions(dataGoals?.fetchGoalActions)
  }, [loadUser, loadGoal])

  if (useCurrentUser() === undefined) {
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
          <DefaultLandingTitle title={`User Statistic`}/>
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
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={2}>
              <Grid
                container
                justifyContent='center'
              >
                <Typography variant='h1' color='#093272'>{user?.teamsPlayers[0]?.team.name}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <img alt='team-logo' src={setTeamPicture(user?.teamsPlayers[0]?.team.name)} style={{ width: 150, borderRadius: '30%'}} />
            </Grid>
          </Grid>
        </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent='center'>
              <Typography variant='h4' color='#EE9E20'>Goals: {actions?.length}</Typography>
            </Grid>
          </Grid>
      </Grid>
    )
  }
}
