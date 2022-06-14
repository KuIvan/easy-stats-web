import React from 'react'
import { Grid } from '@mui/material'
// src
import MyLastGames from 'src/components/organisms/MyLastGames'
import useCurrentUser from 'src/components/molecules/useCurrentUser'

export default function HomePage(): JSX.Element {

  const { user } = useCurrentUser()

  if (user?.email === 'admin-admin@gmail.com') {
    return <></>
  } else {
    return (
      <Grid sx={{ marginTop: 10 }}>
        <MyLastGames/>
      </Grid>
    )
  }
}
