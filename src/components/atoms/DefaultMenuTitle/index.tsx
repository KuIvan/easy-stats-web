import React from 'react'
import { Grid, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { slideInRight } from 'react-animations'
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
  const isNotMobile = useMediaQuery(({ breakpoints }: { breakpoints: Breakpoints }) => breakpoints.up('xl'));

  return (
    <Link passHref href={link}>
      <a>
        {
          image && (
            <Grid
              container
              alignItems="center"
              spacing={1}
              sx={{
                '&:hover': {
                  '& .MuiTypography-root ': {
                    color: palette.system.white.main,
                    position: 'relative',
                    animation: 'slideInRight 1s',
                    animationTimingFunction: 'linear',
                  }
                },
                '@keyframes slideInRight': slideInRight,
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
              {isNotMobile && (
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
