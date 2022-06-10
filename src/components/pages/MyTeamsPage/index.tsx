import React from 'react'
import { Button, CircularProgress, Grid, Link } from '@mui/material'
//src
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import NoAccess from 'src/components/pages/NoAccesPage'

export default function MyTeamsPage(): JSX.Element {

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
    if (userEmail !== 'admin-admin@gmail.com') {
      return <NoAccess/>
    } else {
      return (
        <Grid sx={{ marginTop: 10 }}>
          <Grid item>
            <Grid container justifyContent='center'>
              <DefaultLandingTitle title='In developing'/>
            </Grid>
          </Grid>
          <Grid item marginTop={10}>
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
