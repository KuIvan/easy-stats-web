import Head from 'next/head'
// src
import { Children } from 'src/types'
import AllGamesPage from 'src/components/pages/AllGamesPage'
import AccessLayout, { Roles } from 'src/components/templates/AccessLayout'

export default function AllGames(): JSX.Element {

  return (
    <>
      <Head>
        <title>YourEasyStats | Home</title>
        <meta name="description" content="Solution for generate football stats"/>
      </Head>
      <AllGamesPage />
    </>
  )
}

AllGames.getLayout = function getLayout(page: Children) {
  return <AccessLayout role={Roles.ADMIN}>{page}</AccessLayout>
}
