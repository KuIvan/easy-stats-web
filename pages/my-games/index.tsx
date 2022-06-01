import Head from 'next/head'
// src
import { Children } from 'src/types'
import MyGamesPage from '../../src/components/pages/MyGamesPage'

export default function MyGames(): JSX.Element {

  return (
    <>
      <Head>
        <title>YourEasyStats | Home</title>
        <meta name="description" content="Solution for generate football stats"/>
      </Head>
      <MyGamesPage />
    </>
  )
}

MyGames.getLayout = function getLayout(page: Children) {
  return (
    <>
      {page}
    </>
  )
}
