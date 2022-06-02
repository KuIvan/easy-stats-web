import React, { useEffect, useState } from 'react'
import { Grid, Container, Typography } from '@mui/material'
import map from 'lodash/map'
import { useRouter } from 'next/router'
// src
import DefaultMenuTitle from 'src/components/atoms/DefaultMenuTitle'
import { menuItems } from 'src/components/constants'
import { axiosClient } from '../../../utils/apiUtils/api.config'
import { useSnackbar } from 'notistack'
import get from 'lodash/get'
import { validateAuthErrors } from '../../../utils/parseUtils/error'
import { GET_CURRENT_USER_DATA } from '../../../graphql/queries/user/currentUser'
import { useQuery } from '@apollo/client'

export default function DefaultMenu(): JSX.Element {

  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState<any>()

  const { loading, error, data } = useQuery(GET_CURRENT_USER_DATA)

  useEffect(() => {
    setUser(data?.getCurrentUser)
  },[loading])

  function signOut() {
    localStorage.removeItem('JWT_BEARER_TOKEN')
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
  }

  const addStatsPage = user && user.email === 'nikita-shuba@gmail.com' ? <DefaultMenuTitle  title='Add Statistic game' isHighlighted={'/all-games' === router.pathname} link='/all-games' /> : null

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
            <DefaultMenuTitle  title='Sign Out' isHighlighted={'/' === router.pathname} link='/' />
          </Grid>

        </Grid>
      </Grid>
    </Container>
  )
}
