import React from 'react'
import { Grid } from '@mui/material'
// src
import NoAccess from 'src/components/pages/NoAccesPage'
import useCurrentUser from 'src/components/molecules/useCurrentUser'

type Props = {
  userId?: string | string[],
};

export default function StatsPage({ userId }: Props): JSX.Element {

  if (useCurrentUser() === undefined) {
    return <NoAccess/>
  } else {
    return (
      <Grid sx={{ marginTop: 10 }}>
        <div>11111</div>
      </Grid>
    )
  }
}
