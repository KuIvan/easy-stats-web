import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
// src
import MyLastGames from 'src/components/organisms/MyLastGames'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'

export default function HomePage(): JSX.Element {

  const user = useCurrentUser()

  if (user === undefined) {
    return <NoAccess/>
  } else {
    if(user === 'admin-admin@gmail.com') {
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
