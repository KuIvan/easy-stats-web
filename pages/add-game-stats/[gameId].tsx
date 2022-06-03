import { useRouter } from 'next/router';
//src
import { Children } from 'src/types'
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
    <>
      {page}
    </>
  )
}
