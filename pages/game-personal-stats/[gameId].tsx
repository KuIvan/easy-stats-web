import { useRouter } from 'next/router';
//src
import { Children } from 'src/types'
import MyGameStatistic from 'src/components/pages/MyGameStatistic'

export default function Stats(): JSX.Element {

  const router = useRouter();
  const { gameId } = router.query;

  return (
    <>
      <MyGameStatistic gameId={Number(gameId)}/>
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
