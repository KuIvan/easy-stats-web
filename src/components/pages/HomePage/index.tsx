import { Box } from '@mui/material'
import BackgroundImage from 'public/icons/home/background.svg'
import React from 'react'
import DefaultMenu from 'src/components/organisms/DefaultMenu'
// src

export default function HomePage(): JSX.Element {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: 'cover',
      }}
    >
      <DefaultMenu/>
    </Box>
  )
}
