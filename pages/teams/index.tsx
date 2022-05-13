import Head from 'next/head'
// src
import DefaultLayout from 'src/components/templates/DefaultLayout'
import MyTeamsPage from 'src/components/pages/MyTeamsPage'
import { Children } from 'src/types'

export default function Teams(): JSX.Element {
  return (
    <>
      <Head>
        <title>YourEasyStats | teams</title>
        <meta name="description" content="Solution for generate football stats"/>
      </Head>

      <MyTeamsPage/>
    </>
  )
}

Teams.getLayout = function getLayout(page: Children) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}