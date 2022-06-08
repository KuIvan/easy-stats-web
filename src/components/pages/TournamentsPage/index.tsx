import React from 'react'
import { Button, CircularProgress, Grid, Link } from '@mui/material'
// src
import NoAccess from 'src/components/pages/NoAccesPage'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'

type Props = {
  userId?: string | string[],
};

export default function TournamentsPage({ userId }: Props): JSX.Element {

  if (useCurrentUser() === undefined) {
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

