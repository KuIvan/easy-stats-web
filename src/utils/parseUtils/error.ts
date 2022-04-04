import { get, first } from 'lodash'

export function validateAuthErrors(error: any) {
  let errorText: string | undefined = 'Error'

  let errorUser = get(error, 'user', false)
  if (errorUser) errorText = first(errorUser)

  return errorText
}
