import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { zoomIn } from 'react-animations'
// src

interface DefaultLandingBlockProps {
  img: any
  title: string
  text: string
  order: string
  scrollY: number
}

export default function DefaultLandingBlock({ img, title, text, order, scrollY }: DefaultLandingBlockProps): JSX.Element {
  const [play, setPlay] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll() {
    if (window.scrollY > scrollY && !play) {
      setPlay(true)
    }
  }

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
          animation: 'zoomIn 2s',
          animationTimingFunction: 'linear',
          animationPlayState: play ? 'running' : 'paused',
          cursor: 'pointer',
          '@keyframes zoomIn': zoomIn,
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
