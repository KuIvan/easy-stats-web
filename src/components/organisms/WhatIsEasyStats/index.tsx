import React from 'react'
import { Container, Grid } from '@mui/material'
import map from 'lodash/map'
// src
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import DefaultLandingBlock from 'src/components/molecules/DefaultLandingBlock'
import image from 'public/icons/default/logo2-1.png'

export default function WhatIsEasyStats(): JSX.Element {

  const blocks = [
    {
      img: image,
      title: 'EASY way to get information',
      text: 'Quick registration, user-friendly interface, easy site navigation are the components of successful obtaining of necessary and interesting information.',
      order: 'direct'
    },
    {
      img: image,
      title: 'EASY way to analyze statistics',
      text: "Study detailed statistics - not only yours, but also your team's - goals, assists, accurate and inaccurate passes and much, much more.",
      order: 'reverse'
    },
    {
      img: image,
      title: 'EASY way to get better',
      text: 'Understand where your strengths and weaknesses are - and improve your game with EASYSTATS!',
      order: 'direct'
    },
  ]

  return (
    <Container maxWidth="xl" sx={{ marginTop: 10 }}>
      <Grid
        container
        spacing={10}
      >
        <Grid item xs={12}>
          <DefaultLandingTitle title={"What is EasyStats"} />
        </Grid>
        {map(blocks, (block, index) => (
          <Grid item xs={12} key={index}>
            <DefaultLandingBlock
              img={block.img}
              title={block.title}
              text={block.text}
              order={block.order}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
