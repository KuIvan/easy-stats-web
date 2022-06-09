import React from 'react'
import { CircularProgress, Grid } from '@mui/material'
// src
import MyLastGames from 'src/components/organisms/MyLastGames'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'

export default function HomePage(): JSX.Element {

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
      }
    if (userEmail === 'admin-admin@gmail.com') {
      return <></>
    } else {
      return (
        <Grid sx={{ marginTop: 10 }}>
          <MyLastGames/>
        </Grid>
      )
    }
  }
}
