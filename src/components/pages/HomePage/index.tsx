import React from 'react'
import { Box, Grid } from '@mui/material'
// src
import BackgroundImage from 'public/icons/home/background.svg'
import DefaultMenu from 'src/components/organisms/DefaultMenu'
import MyLastGames from 'src/components/organisms/MyLastGames'
import WhatIsEasyStats from 'src/components/organisms/WhatIsEasyStats'

export default function HomePage(): JSX.Element {
  return (
    <Grid>
      <Box
        sx={{
          backgroundImage: `url(${BackgroundImage.src})`,
          backgroundSize: 'cover',
        }}
      >
        <DefaultMenu/>
      </Box>
      <WhatIsEasyStats/>
      {/*<MyLastGames/>*/}
    </Grid>
  )
}
