import { useRouter } from 'next/router';
//src
import { Children } from 'src/types'
import UserStatisticPage from 'src/components/pages/UserStatisticPage'
import AccessLayout from 'src/components/templates/AccessLayout'

export default function Stats(): JSX.Element {

  const router = useRouter();
  const { userId } = router.query;

  return (
    <>
      <UserStatisticPage userId={Number(userId)}/>
    </>
  )
}

Stats.getLayout = function getLayout(page: Children) {
  return <AccessLayout>{page}</AccessLayout>
}
