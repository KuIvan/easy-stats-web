import React from 'react'
import { Grid } from '@mui/material'

// src
import { Children } from 'src/types'

export default function DefaultLayout ({ children }: { children: Children }): JSX.Element {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        minHeight: '100vh',
      }}
    >
      {children}
    </Grid>
  )
}
