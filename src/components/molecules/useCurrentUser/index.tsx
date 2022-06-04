import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
//src
import { GET_CURRENT_USER_DATA } from 'src/graphql/queries/user/currentUser'

export default function useCurrentUser() {
 const [userEmail, setUserEmail] = useState()
 const { loading, data } = useQuery(GET_CURRENT_USER_DATA)

 useEffect(() => {
  setUserEmail(data?.getCurrentUser.email)
 }, [loading])

 return userEmail
}
