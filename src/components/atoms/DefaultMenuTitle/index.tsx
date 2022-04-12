import React from 'react'
import { Grid, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { bounceIn } from 'react-animations'
import { Breakpoints } from '@mui/system/createTheme/createBreakpoints'
// src
import palette from 'src/styles/theme/palette'

interface DefaultMenuTitleProps {
  title: string
  isHighlighted: boolean
  link: string
  image?: any
}

export default function DefaultMenuTitle({ title, isHighlighted, link, image = null }: DefaultMenuTitleProps): JSX.Element {
  const upXL = useMediaQuery(({ breakpoints }: { breakpoints: Breakpoints }) => breakpoints.up('xl'));

  return (
    <Link passHref href={link}>
      <a>
        {
          image && (
            <Grid
              container
              alignItems="center"
              spacing={1}
              justifyContent={{ xs: 'center', xl: 'flex-start' }}
              sx={{
                '&:hover': {
                  '& .MuiTypography-root ': {
                    color: palette.system.white.main,
                    position: 'relative',
                    animation: 'bounceIn 1s',
                    animationTimingFunction: 'linear',
                  }
                },
                '@keyframes bounceIn': bounceIn,
                cursor: 'pointer',
              }}
            >
              <Grid item>
                <Image
                  alt="Block img"
                  src={image}
                  width={30}
                  height={30}
                />
              </Grid>
              {upXL && (
                <Grid item>
                  <Typography
                      variant="h6"
                      sx={{
                        position: 'absolute',
                      }}
                      color={'primary'}
                    >
                      {title}
                    </Typography>
                </Grid>
              )}
            </Grid>
          )
        }
        {
          !image && (
            <Typography
              variant="h2"
              color={isHighlighted ? 'secondary' : 'system.white.main'}
              sx={({ palette}) => ({
                '&:hover': {
                  fontSize: 60,
                  color: palette.secondary.main
                },
                cursor: 'pointer',
              })}
            >
              {title}
            </Typography>
          )
        }
      </a>
    </Link>
  )
}
