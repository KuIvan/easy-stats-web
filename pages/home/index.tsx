import Head from 'next/head'
// src
import DefaultLayout from 'src/components/templates/DefaultLayout'
import HomePage from 'src/components/pages/HomePage'
import { Children } from 'src/types'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>YourEasyStats | Home</title>
        <meta name="description" content="Solution for generate football stats"/>
      </Head>

      <HomePage/>
    </>
  )
}

Home.getLayout = function getLayout(page: Children) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
