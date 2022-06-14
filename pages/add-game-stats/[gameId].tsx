import { useRouter } from 'next/router'

//src
import AddStatisticPage from 'src/components/pages/AddStatisticGamePage'
import AdminLayoutAccess, { Roles } from 'src/components/templates/AdminLayoutAccess'
import { Children } from 'src/types'

export default function Stats(): JSX.Element {
  const router = useRouter()
  const { gameId } = router.query

  return (
    <AddStatisticPage gameId={Number(gameId)} />
  )
}

Stats.getLayout = function getLayout(page: Children) {
  return <AdminLayoutAccess role={Roles.ADMIN}>{page}</AdminLayoutAccess>
}
