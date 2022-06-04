import React, { useEffect, useState } from 'react'
import { Grid, Container } from '@mui/material'
import map from 'lodash/map'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { useQuery } from '@apollo/client'
import get from 'lodash/get'
// src
import DefaultMenuTitle from 'src/components/atoms/DefaultMenuTitle'
import { menuItems } from 'src/components/constants'
import { axiosClient } from 'src/utils/apiUtils/api.config'
import { validateAuthErrors } from 'src/utils/parseUtils/error'
import { GET_CURRENT_USER_DATA } from 'src/graphql/queries/user/currentUser'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import { removeJWTBearerToken } from 'src/utils/apiUtils/storage.config'

type UserType = {
  id: number,
  email: string,
  name: string
}

export default function DefaultMenu(): JSX.Element {

  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState<UserType | null>(null)

  const { loading, error, data } = useQuery(GET_CURRENT_USER_DATA)

  useEffect(() => {
    setUser(data?.getCurrentUser)
  },[loading])

  function signOut() {
    axiosClient.delete('/users/sign_out')
      .then( response => {
        enqueueSnackbar('Success', { variant: 'success' })
      })
      .catch(error => {
      const errorObject = get(error, 'response.data.errors', false)
      if (errorObject) {
        enqueueSnackbar(validateAuthErrors(errorObject), { variant: 'error' })
      }
    })
    removeJWTBearerToken()
  }

  const addStatsPage = user && user.email === 'admin-admin@gmail.com' ? <DefaultMenuTitle  title='Add Statistic game' isHighlighted={'/all-games' === router.pathname} link='/all-games' /> : null

  return (
    <Container maxWidth="xl">
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        sx={{ minHeight: 960 }}
        spacing={2}
      >
        <Grid
          item
          xs={6}
          sx={{
            zIndex: 1
          }}
        >
          <Grid
            container
            spacing={2}
          >
            {map(menuItems, (item, index) => (
              <Grid item xs={12} key={index}>
                <DefaultMenuTitle
                  title={item.title}
                  isHighlighted={item.link === router.pathname}
                  link={item.link}
                />
              </Grid>
            ))}
          </Grid>

          <Grid item xs={12}>
            {addStatsPage}
          </Grid>

          <Grid item xs={12} onClick={signOut}>
            {useCurrentUser() != undefined ? <DefaultMenuTitle  title='Sign Out' isHighlighted={'/' === router.pathname} link='/' /> : <DefaultMenuTitle  title='Sign In' isHighlighted={'/' === router.pathname} link='/' />}
          </Grid>

        </Grid>
      </Grid>
    </Container>
  )
}
