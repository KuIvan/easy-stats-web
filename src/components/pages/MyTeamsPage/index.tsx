import React from 'react'
import { Grid } from '@mui/material'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'

export default function MyTeamsPage(): JSX.Element {

  if (useCurrentUser() === undefined) {
    return <NoAccess/>
  } else {
    return (
      <Grid sx={{ marginTop: 10 }}>
        <div>123</div>
      </Grid>
    )
  }
}
