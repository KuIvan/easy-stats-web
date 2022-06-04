import React from 'react'
import { Box, Grid } from '@mui/material'
// src
import MyLastGames from 'src/components/organisms/MyLastGames'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'

export default function HomePage(): JSX.Element {

  console.log('CurrentUser email', useCurrentUser())

  if (useCurrentUser() === undefined) {
    return <NoAccess/>
  } else {
    return (
      <Grid sx={{ marginTop: 10 }}>
        <MyLastGames/>
      </Grid>
    )
  }
}
