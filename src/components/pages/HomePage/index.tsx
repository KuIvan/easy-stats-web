import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@mui/material'
// src
import BackgroundImage from 'public/icons/home/background.svg'
import DefaultMenu from 'src/components/organisms/DefaultMenu'
import MyLastGames from 'src/components/organisms/MyLastGames'
import WhatIsEasyStats from 'src/components/organisms/WhatIsEasyStats'
import Particle from 'src/components/atoms/Particle'
import Header from 'src/components/organisms/Header'

export default function HomePage(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll() {
    if (window.scrollY > 960) {
      setIsVisible(true)
    } else setIsVisible(false)
  }

  return (
    <Grid>
      <Box>
        <Particle
          isFullScreen={false}
          width="100%"
          height="960px"
          position="absolute"
        />
        <DefaultMenu/>
      </Box>
      {isVisible && <Header/>}
      <WhatIsEasyStats/>
      {/*<MyLastGames/>*/}
    </Grid>
  )
}
