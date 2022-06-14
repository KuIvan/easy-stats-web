import { useRouter } from 'next/router';
import type { GetServerSidePropsContext } from 'next';
//src
import apolloClient from 'src/lib/apolloClient'
import { GET_USER_STATISTICS_DATA } from 'src/graphql/queries/user';
import { Children } from 'src/types'
import StatsPage from 'src/components/pages/StatsPage'
import AccessLayout from 'src/components/templates/AccessLayout'

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
  return <AccessLayout>{page}</AccessLayout>
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
