import React from 'react'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { wobble } from 'react-animations'
// src

interface DefaultLandingBlockProps {
  img: any
  title: string
  text: string
  order: string
}

export default function DefaultLandingBlock({ img, title, text, order }: DefaultLandingBlockProps): JSX.Element {
  return (
    <Grid
      container
      alignItems="center"
      flexDirection={order === 'reverse' ? 'row-reverse' : 'row'}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          '&:hover': {
            animation: 'wobble 5s infinite',
            animationTimingFunction: 'linear',
          },
          cursor: 'pointer',
          '@keyframes wobble': wobble,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Image
          alt="Block img"
          src={img}
          width={488}
          height={336}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
      >
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
          >
            <Typography
              variant="h3"
              color="primary"
              textAlign="center"
            >
              {title}
            </Typography>
          </Grid>
          <Grid
            item
          >
            <Typography
              variant="h6"
              color="system.black.main"
              textAlign="center"
            >
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
