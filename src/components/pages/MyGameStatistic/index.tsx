import React, { useEffect, useState } from 'react'
import {
  Button,
  CircularProgress,
  Grid,
  Link,
} from '@mui/material'
import { useQuery } from '@apollo/client'
//src
import TableStats from 'src/components/molecules/TableStats'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import { FETCH_CURRENT_USER_ACTIONS_DATA } from 'src/graphql/queries/action'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'

type ActionType = {
  id: number
  initiator: object
  addressable: object
  scope: string
  isSuccessful: boolean
}

interface AddStatisticPageProps {
  gameId: number
}

export default function MyGameStatistic({ gameId }: AddStatisticPageProps) {

  const { userEmail, loading: loadingCurrentUser } = useCurrentUser()
  const [actionsPresent, setActionsPresent] = useState<ActionType[]>([])

  const { loading, error, data } = useQuery(FETCH_CURRENT_USER_ACTIONS_DATA, {
    variables: {
      gameId
    },
  })

  useEffect(() => {
    setActionsPresent(data?.fetchCurrentUserActions)
  }, [loading, data?.fetchCurrentUserActions])

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
    if (userEmail === undefined) {
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
            <DefaultLandingTitle title={`My statistic for game ${gameId}`}/>
          </Grid>

          <Grid item xs={4}>
            <TableStats
              rows={actionsPresent}
              rowsNames={['№', 'playerFirst', 'action', 'PlayerSecond', 'Successful']}
            />
          </Grid>

          <Grid item xs={12}>
            <Link href='/home'>
              <Grid container justifyContent='center'>
                <Button variant='outlined'>Home</Button>
              </Grid>
            </Link>
          </Grid>

        </Grid>
      )
    }
  }
}
