import React from 'react'
import { Button, Grid, Link } from '@mui/material'
// src
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'

type Props = {
  userId?: string | string[],
};

export default function TournamentsPage({ userId }: Props): JSX.Element {

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

