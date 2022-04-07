import React from 'react'
import { Divider, Grid, Typography } from '@mui/material'
// src

interface DefaultLandingTitleProps {
  title: string
}

export default function DefaultLandingTitle({ title }: DefaultLandingTitleProps): JSX.Element {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
    >
      <Grid
        item
        xs={12}
      >
        <Typography
          variant="h1"
          color="primary"
          textAlign="center"
        >
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        md={3}
      >
        <Divider
          sx={({ palette}) => ({
            borderBottomColor: palette.secondary.main,
            borderBottomWidth: 3
          })}
        />
      </Grid>
    </Grid>
  )
}
