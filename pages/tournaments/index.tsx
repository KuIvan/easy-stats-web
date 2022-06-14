import Head from 'next/head'
// src
import { Children } from 'src/types'
import TournamentsPage from 'src/components/pages/TournamentsPage'
import AccessLayout from 'src/components/templates/AccessLayout'

export default function Tournaments(): JSX.Element {
  return (
    <>
      <Head>
        <title>YourEasyStats | teams</title>
        <meta name="description" content="Solution for generate football stats"/>
      </Head>

      <TournamentsPage/>
    </>
  )
}

Tournaments.getLayout = function getLayout(page: Children) {
  return <AccessLayout>{page}</AccessLayout>
}
