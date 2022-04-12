import Head from 'next/head'
// src
import DefaultLayout from 'src/components/templates/DefaultLayout'
import AboutPage from 'src/components/pages/AboutPage'
import { Children } from 'src/types'

export default function About(): JSX.Element {
  return (
    <>
      <Head>
        <title>YourEasyStats | Home</title>
        <meta name="description" content="Solution for generate football stats"/>
      </Head>

      <AboutPage/>
    </>
  )
}

About.getLayout = function getLayout(page: Children) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
