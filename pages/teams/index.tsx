import Head from 'next/head'
// src
import MyTeamsPage from 'src/components/pages/MyTeamsPage'
import { Children } from 'src/types'
import AccessLayout from 'src/components/templates/AccessLayout'

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
  return <AccessLayout>{page}</AccessLayout>
}
