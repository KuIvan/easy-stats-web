import React from 'react'
import { CircularProgress, Grid } from '@mui/material'
// src
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'

type Props = {
  userId?: string | string[],
};

export default function StatsPage({ userId }: Props): JSX.Element {

  const { userEmail, loading: loadingCurrentUser } = useCurrentUser();

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
        <Grid sx={{ marginTop: 10 }}>
          <div>11111</div>
        </Grid>
      )
    }
  }
}
