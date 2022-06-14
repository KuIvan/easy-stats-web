import React from 'react'
import { Grid, Container } from '@mui/material'
import map from 'lodash/map'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import get from 'lodash/get'
// src
import DefaultMenuTitle from 'src/components/atoms/DefaultMenuTitle'
import { menuItems } from 'src/components/constants'
import { axiosClient } from 'src/utils/apiUtils/api.config'
import { validateAuthErrors } from 'src/utils/parseUtils/error'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import { removeJWTBearerToken } from 'src/utils/apiUtils/storage.config'

export default function DefaultMenu(): JSX.Element {

  const { user } = useCurrentUser()
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  function signOut() {
    axiosClient.delete('/users/sign_out')
      .then(response => {
        enqueueSnackbar('Success', { variant: 'success' })
      })
      .catch(error => {
        const errorObject = get(error, 'response.data.errors', false)
        if (errorObject) {
          enqueueSnackbar(validateAuthErrors(errorObject), { variant: 'error' })
        }
      })
    removeJWTBearerToken()
      .then(response => {
        enqueueSnackbar('Success', { variant: 'success' })
      })
      .catch(error => {
        const errorObject = get(error, 'response.data.errors', false)
        if (errorObject) {
          enqueueSnackbar(validateAuthErrors(errorObject), { variant: 'error' })
        }
      })
  }

  const addStatsPage = user?.email === 'admin-admin@gmail.com'
    ? <DefaultMenuTitle title='Add Statistic game' isHighlighted={'/all-games' === router.pathname} link='/all-games'/>
    : null

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
          xs={10}
          sx={{
            zIndex: 1
          }}
        >
          <Grid
            container
            spacing={2}
          >
            {map(menuItems, (item, index) => {
              if (user?.email === 'admin-admin@gmail.com' && (
                item.title === "My Teams (In Developing)" ||
                item.title === "My Games" ||
                item.title === "All Games"
              )) {
                return null
              } else {
                return (
                  <Grid item xs={12} key={index}>
                    <DefaultMenuTitle
                      title={item.title}
                      isHighlighted={item.link === router.pathname}
                      link={item.link}
                    />
                  </Grid>
                )
              }
            })}
          </Grid>

          <Grid item xs={12}>
            {addStatsPage}
          </Grid>

          <Grid item xs={12} onClick={signOut}>
            {user
              ? <DefaultMenuTitle title='Sign Out' isHighlighted={'/' === router.pathname} link='/'/>
              : <DefaultMenuTitle title='Sign In' isHighlighted={'/' === router.pathname} link='/'/>
            }
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
