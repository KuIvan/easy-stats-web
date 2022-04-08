import React from 'react'
import { Grid, Container } from '@mui/material'
import map from 'lodash/map'
import { useRouter } from 'next/router'
// src
import DefaultMenuTitle from 'src/components/atoms/DefaultMenuTitle'
import { menuItems } from 'src/components/constants'

export default function DefaultMenu(): JSX.Element {
  const router = useRouter()

  return (
    <Container maxWidth="xl">
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        sx={{ minHeight: 960 }}
      >
        <Grid
          item
          xs={6}
          sx={{
            zIndex: 1
          }}
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
        {/*<Grid*/}
        {/*  item*/}
        {/*  xs={6}*/}
        {/*>*/}
        {/*  <Grid*/}
        {/*    container*/}
        {/*    justifyContent="flex-end"*/}
        {/*  >*/}
        {/*    <img*/}
        {/*      className="logo"*/}
        {/*      src="icons/default/logo1.png"*/}
        {/*      alt="Logo"*/}
        {/*      width={180}*/}
        {/*      height={155}*/}
        {/*      style={{ objectFit: 'cover' }}*/}
        {/*    />*/}
        {/*  </Grid>*/}
        {/*</Grid>*/}
      </Grid>
    </Container>
  )
}
