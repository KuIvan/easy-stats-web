import { useRouter } from 'next/router';
import type { GetServerSidePropsContext } from 'next';
import DefaultLayout from 'src/components/templates/DefaultLayout'
import { Children } from 'src/types'

// import apolloClient from 'src/lib/apolloClient'
// import { GET_USER_STATISTICS_DATA } from 'src/graphql/queries/user';
import AddStatisticPage from 'src/components/pages/AddStatisticGamePage'

export default function Stats(): JSX.Element {

  const router = useRouter();
  const { gameId } = router.query;

  return (
    <>
      <AddStatisticPage gameId={Number(gameId)}/>
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

  // const gameId = context?.query?.gameId;

  // const { data } = await apolloClient.query({
  //   query: GET_USER_STATISTICS_DATA,
  //   variables: {
  //     id: gameId,
  //   },
  // });

  // console.log('data', data)

  return {
    props: {
      // game: data.getGame,
    },
  }
}
