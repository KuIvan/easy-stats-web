import React from 'react'
import { Box, Grid } from '@mui/material'
// src
import MyLastGames from 'src/components/organisms/MyLastGames'

export default function HomePage(): JSX.Element {

  return (
    <Grid sx={{ marginTop: 10 }}>
      <MyLastGames/>
    </Grid>
  )
}
