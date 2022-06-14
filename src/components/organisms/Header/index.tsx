import React from 'react'
import { Container, AppBar, Toolbar, Grid } from '@mui/material'
import map from 'lodash/map'
// src
import { menuItems } from 'src/components/constants'
import DefaultMenuTitle from 'src/components/atoms/DefaultMenuTitle'

export default function Header(): JSX.Element {
  return (
    <AppBar
      position="fixed"
      sx={({ palette}) => ({
        background: palette.primary.main
      })}
    >
      <Container
        maxWidth="xl"
      >
        <Toolbar
          disableGutters
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
          >
            {map(menuItems, (item, index) => (
              <Grid item key={index} xs={2}>
                <DefaultMenuTitle
                  title={item.title}
                  isHighlighted={false}
                  link={item.link}
                  image={item.image}
                />
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
