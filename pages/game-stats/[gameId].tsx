import { useRouter } from 'next/router';
import type { GetServerSidePropsContext } from 'next';
import DefaultLayout from 'src/components/templates/DefaultLayout'
import { Children } from 'src/types'

import apolloClient from 'src/lib/apolloClient'
import { GET_GAME_DATA } from 'src/graphql/queries/game';
import AddStatisticPage from 'src/components/pages/AddStatisticGamePage'

export default function Stats(): JSX.Element {

  const router = useRouter();
  const { gameId } = router.query;

  console.log('gameId', gameId)

  return (
    <>
      <AddStatisticPage gameId={Number(gameId)}/>
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

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//
//   console.log('11111')
//
//   const gameId = context?.query?.gameId;
//
//   const { data } = await apolloClient.query({
//     query: GET_GAME_DATA,
//     variables: {
//       id: gameId,
//     },
//   });
//
//   console.log('data', data)
//
//   return {
//     props: {
//       game: data.getGame,
//     },
//   }
// }
