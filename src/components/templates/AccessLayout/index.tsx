import { ReactNode, cloneElement } from 'react'
import { CircularProgress, Grid } from '@mui/material'

// src
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'

export enum Roles {
  ADMIN = 'admin',
  REGULAR = 'regular'
}

interface AccessLayoutProps {
  children: ReactNode
  role?: Roles
}

export default function AccessLayout({ children, role = Roles.REGULAR }: AccessLayoutProps): JSX.Element {
  const { user, loading } = useCurrentUser()

  const childrenNode = cloneElement(children as JSX.Element, { user })

  const getRole = () => {
    // if (user) return Roles[user.role] === role
    if (user) return 'admin-admin@gmail.com' === user.email
      ? <>{childrenNode}</>
      : <NoAccess />
    else return <NoAccess />
  }

  return (
    <>
      {loading && (
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          style={{ height: '80vh' }}
        >
          <CircularProgress />
        </Grid>
      )}

      {!loading && getRole()}
    </>
  )
}
