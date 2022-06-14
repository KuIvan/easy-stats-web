import React, { useEffect, useState } from 'react'
import {
  Button,
  Grid,
  Link,
} from '@mui/material'
import { useQuery } from '@apollo/client'
//src
import TableStats from 'src/components/molecules/TableStats'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import { FETCH_CURRENT_USER_ACTIONS_DATA } from 'src/graphql/queries/action'

interface AddStatisticPageProps {
  gameId: number
}

export default function MyGameStatistic({ gameId }: AddStatisticPageProps) {

  const [actionsPresent, setActionsPresent] = useState<string[]>([])

  const { loading, data } = useQuery(FETCH_CURRENT_USER_ACTIONS_DATA, {
    variables: {
      gameId
    },
  })

  useEffect(() => {
    setActionsPresent(data?.fetchCurrentUserActions)
  }, [loading, data?.fetchCurrentUserActions])


  return (
    <Grid
      container
      spacing={5}
      justifyContent='center'
      sx={{ marginTop: 10 }}
    >

      <Grid item xs={12}>
        <DefaultLandingTitle title={`My statistic for game`}/>
      </Grid>

      <Grid item xs={4}>
        <TableStats
          stats={actionsPresent}
          rowsNames={['№', 'Initiator', 'Action', 'Addressable', 'Successful']}
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
