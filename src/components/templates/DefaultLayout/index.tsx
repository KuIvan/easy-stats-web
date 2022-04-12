import React, { useEffect, useState } from 'react'
import { Box, Grid, useMediaQuery } from '@mui/material'
import { Breakpoints } from '@mui/system/createTheme/createBreakpoints'
// src
import { Children } from 'src/types'
import Particle from 'src/components/atoms/Particle'
import DefaultMenu from 'src/components/organisms/DefaultMenu'
import Header from 'src/components/organisms/Header'

export default function DefaultLayout ({ children }: { children: Children }): JSX.Element {
  const [isVisible, setIsVisible] = useState(false)
  const upMD = useMediaQuery(({ breakpoints }: { breakpoints: Breakpoints }) => breakpoints.up('md'));

  useEffect(() => {
    if (upMD) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [upMD])

  function handleScroll() {
    if (window.scrollY > 960) {
      setIsVisible(true)
    } else setIsVisible(false)
  }

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <Particle
          isFullScreen={false}
          width="100%"
          height="960px"
          position="absolute"
        />
        <DefaultMenu/>
      </Box>
      {(!upMD || isVisible) && <Header/>}
      {children}
    </Grid>
  )
}
