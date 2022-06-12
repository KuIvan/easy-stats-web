import { useRouter } from 'next/router'

//src
import AddStatisticPage from 'src/components/pages/AddStatisticGamePage'
import AccessLayout, { Roles } from 'src/components/templates/AccessLayout'
import { Children } from 'src/types'

export default function Stats(): JSX.Element {
  const router = useRouter()
  const { gameId } = router.query

  return (
    <AddStatisticPage gameId={Number(gameId)} />
  )
}

Stats.getLayout = function getLayout(page: Children) {
  return <AccessLayout role={Roles.ADMIN}>{page}</AccessLayout>
}
