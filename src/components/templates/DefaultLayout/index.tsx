import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Grid, useMediaQuery } from '@mui/material'
import { Breakpoints } from '@mui/system/createTheme/createBreakpoints'
// src
import { Children } from 'src/types'
import Particle from 'src/components/atoms/Particle'
import DefaultMenu from 'src/components/organisms/DefaultMenu'
import Header from 'src/components/organisms/Header'
import useCurrentUser from '../../molecules/useCurrentUser'

export default function DefaultLayout ({ children }: { children: Children }): JSX.Element {
  const { user, loading } = useCurrentUser()
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

  if (loading) {
    return (
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        style={{ height: '100vh', backgroundColor:'#093272' }}
      >
        <CircularProgress/>
      </Grid>
    )
  } else {
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
            height={user?.email !== 'admin-admin@gmail.com' ? "960px" : "100vh"}
            position="absolute"
          />
          <DefaultMenu/>
        </Box>
        {(!upMD || isVisible) && <Header/>}
        {children}
      </Grid>
    )
  }
}
