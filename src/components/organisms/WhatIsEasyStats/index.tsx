import React from 'react'
import { Container, Grid } from '@mui/material'
import map from 'lodash/map'
// src
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import DefaultLandingBlock from 'src/components/molecules/DefaultLandingBlock'
import { blocksAbout } from 'src/components/constants'

export default function WhatIsEasyStats(): JSX.Element {


  return (
    <Container maxWidth="xl" sx={{ marginTop: 10 }}>
      <Grid
        container
        spacing={10}
      >
        <Grid item xs={12}>
          <DefaultLandingTitle title={'What is EasyStats'}/>
        </Grid>
        {map(blocksAbout, (block, index) => (
          <Grid item xs={12} key={index}>
            <DefaultLandingBlock
              img={block.img}
              title={block.title}
              text={block.text}
              order={block.order}
              scrollY={block.scrollY}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
