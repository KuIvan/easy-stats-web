import React, { useEffect } from 'react'
import { Container, Grid, Box } from '@mui/material'
import { useRouter } from 'next/router'
import includes from 'lodash/includes'
// src
import { Children } from 'src/types'
// import Header from 'src/components/organisms/Header'
// import BackgroundImage from 'public/icons/default/back1.jpeg'
import { setJWTBearerToken } from 'src/utils/apiUtils/storage.config'
import Particle from 'src/components/atoms/Particle';

export default function AuthLayout({ children }: { children: Children }): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    async function getToken() {
      const token = await setJWTBearerToken()
      if (token && includes(['/'], router.pathname)) {
        await router.push('/about')
      }
    }

    getToken()
  }, [])

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        minHeight: '100vh',
      }}
    >
      {/*<Header/>*/}
      <Box
        sx={{
          backgroundSize: 'cover',
        }}
      >
        <Particle />
        <Container
          maxWidth="lg"
        >
          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            sx={{
              minHeight: '100vh',
            }}
          >
            {children}
          </Grid>
        </Container>
      </Box>
    </Grid>
  )
}
