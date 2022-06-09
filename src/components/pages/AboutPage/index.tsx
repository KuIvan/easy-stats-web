import React from 'react'
import { CircularProgress, Grid } from '@mui/material'
// src
import WhatIsEasyStats from 'src/components/organisms/WhatIsEasyStats'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'

export default function AboutPage(): JSX.Element {

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
        <>
          <WhatIsEasyStats/>
        </>
      )
    }
  }
}
