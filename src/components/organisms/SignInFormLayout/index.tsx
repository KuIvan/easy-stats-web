import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { useSnackbar } from 'notistack'
import { Button, CircularProgress, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import get from 'lodash/get'
// src
import FormTextField from 'src/components/atoms/FormTextField'
import { axiosClient } from 'src/utils/apiUtils/api.config'
import { validateAuthErrors } from 'src/utils/parseUtils/error'

interface InitialValues {
  email: string
  password: string
}

export default function SignInFormLayout(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()

  const onSubmit = (values: InitialValues) => {
    setIsLoading(true)
    axiosClient.post('users/sign_in', { user: { ...values } })
      .then(response => {
        setIsLoading(false)
        enqueueSnackbar('Success', { variant: 'success' })
        router.push('/home')
      })
      .catch(error => {
        setIsLoading(false)
        const errorObject = get(error, 'response.data.errors', false)
        if (errorObject) {
          enqueueSnackbar(validateAuthErrors(errorObject), { variant: 'error' })
        }
      })
  }

  const validate = (values: InitialValues) => {
    let errors: {
      email?: string
      password?: string
    } = {}
    if (!values.email) {
      errors.email = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    return errors
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, form, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">

            <Grid item xs={12}>
              <Field
                name="email"
                component={FormTextField}
                fullWidth
                variant="outlined"
                placeholder="Email or name..."
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                name="password"
                component={FormTextField}
                fullWidth
                variant="outlined"
                placeholder="Password..."
                autoComplete="new-password"
                typeInput="password"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={24}/> : "Sign In"}
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  )
}
