import React from 'react'
import { Button, CircularProgress, Grid, Link } from '@mui/material'
// src
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import NoAccess from 'src/components/pages/NoAccesPage'

type Props = {
  userId?: string | string[],
};

export default function TournamentsPage({ userId }: Props): JSX.Element {

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

