import React from 'react'
import { Grid, Container } from '@mui/material'
import map from 'lodash/map'
import { useRouter } from 'next/router'
// src
import DefaultMenuTitle from 'src/components/atoms/DefaultMenuTitle'

export default function DefaultMenu(): JSX.Element {
  const router = useRouter()

  const menuItems = [
    { title: "Home", link: '/home' },
    { title: "My Stats", link: '/my-stats' },
    { title: "My Teams", link: '/my-teams' },
    { title: "My Tournaments", link: '/my-tournaments' },
  ]

  return (
    <Container maxWidth="xl">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: 960 }}
      >
        <Grid
          item
          xs={6}
        >
          <Grid
            container
            spacing={2}
          >
            {map(menuItems, (item, index) => (
              <Grid item xs={12} key={index}>
                <DefaultMenuTitle
                  title={item.title}
                  isHighlighted={item.link === router.pathname}
                  link={item.link}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Grid
            container
            justifyContent="flex-end"
          >
            <img
              className="logo"
              src="icons/default/logo1.png"
              alt="Logo"
              width={180}
              height={155}
              style={{ objectFit: 'cover' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
