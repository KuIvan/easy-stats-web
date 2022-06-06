import React, { useEffect, ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { ThemeProvider } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack'

// src
import '../styles/globals.css'
import DefaultLayout from 'src/components/templates/DefaultLayout'
import theme from 'src/styles/theme'
import { ApolloProvider } from '@apollo/client'
import apolloClient from 'src/lib/apolloClient'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          dense
          maxSnack={3}
          preventDuplicate
        >
          {getLayout(<Component {...pageProps} />)}
        </SnackbarProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
