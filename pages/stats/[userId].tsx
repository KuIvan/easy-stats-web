import { useRouter } from 'next/router';
import type { GetServerSidePropsContext } from 'next';
//src
import DefaultLayout from 'src/components/templates/DefaultLayout'
import apolloClient from 'src/lib/apolloClient'
import { GET_USER_STATISTICS_DATA } from 'src/graphql/queries/user';
import { Children } from 'src/types'
import StatsPage from 'src/components/pages/StatsPage'

export default function Stats(): JSX.Element {

  const router = useRouter();
  const { userId } = router.query;

  return (
    <>
      <StatsPage userId={userId}/>
    </>
  )
}

Stats.getLayout = function getLayout(page: Children) {
  return (
    <>
      {page}
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

  const userId = context?.query?.userId;


  const { data } = await apolloClient.query({
    query: GET_USER_STATISTICS_DATA,
    variables: {
      id: userId,
    },
  });



  return {
    props: {
      user: data.getUser,
    },
  }
}
