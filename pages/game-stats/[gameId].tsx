import { useRouter } from 'next/router';
//src
import { Children } from 'src/types'
import StatisticGamePage from 'src/components/pages/StatisticGamePage'
import AccessLayout, { Roles } from 'src/components/templates/AccessLayout'

export default function Stats(): JSX.Element {

  const router = useRouter();
  const { gameId } = router.query;

  return (
    <>
      <StatisticGamePage gameId={Number(gameId)}/>
    </>
  )
}

Stats.getLayout = function getLayout(page: Children) {
  return <AccessLayout role={Roles.ADMIN}>{page}</AccessLayout>
}
