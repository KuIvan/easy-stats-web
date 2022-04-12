import React from 'react'
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import { Breakpoints } from '@mui/system/createTheme/createBreakpoints'
// src

interface DefaultLandingTitleProps {
  title: string
}

export default function DefaultLandingTitle({ title }: DefaultLandingTitleProps): JSX.Element {
  const upMD = useMediaQuery(({ breakpoints }: { breakpoints: Breakpoints }) => breakpoints.up('md'));

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
          variant={upMD ? 'h1' : 'h4'}
          color="primary"
          textAlign="center"
        >
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
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
