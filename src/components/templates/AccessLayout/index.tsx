import { ReactNode, cloneElement } from 'react'
import { CircularProgress, Grid } from '@mui/material'

// src
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'


interface AccessLayoutProps {
  children: ReactNode
}

export default function AccessLayout({ children }: AccessLayoutProps): JSX.Element {
  const { user, loading } = useCurrentUser()

  const childrenNode = cloneElement(children as JSX.Element, { user })

  const getRole = () => {
    // if (user) return Roles[user.role] === role
    if (user) return user.email !== undefined
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
