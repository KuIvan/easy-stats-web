import Head from 'next/head'
import AuthLayout from 'src/components/templates/AuthLayout'
import AuthPage from 'src/components/pages/AuthPage'
import { Children } from 'src/types'

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>YourEasyStats</title>
        <meta name="description" content="Solution for generate football stats"/>
      </Head>

      <AuthPage/>
    </>
  )
}

Index.getLayout = function getLayout(page: Children) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}
