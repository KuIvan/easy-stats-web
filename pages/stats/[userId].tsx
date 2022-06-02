import { useRouter } from 'next/router';
import type { GetServerSidePropsContext } from 'next';
import DefaultLayout from 'src/components/templates/DefaultLayout'
import StatsPage from 'src/components/pages/StatsPage'
import { Children } from 'src/types'

import apolloClient from 'src/lib/apolloClient'
import { GET_USER_STATISTICS_DATA } from 'src/graphql/queries/user';

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
    <DefaultLayout>
      {page}
    </DefaultLayout>
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
