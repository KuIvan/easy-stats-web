import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
//src
import { GET_CURRENT_USER_DATA } from 'src/graphql/queries/user/currentUser'

type UserType = {
 id: number
 fullName: string
 email: string
}

export default function useCurrentUser() {
 const [user, setUser] = useState<UserType>()
 const { loading, data } = useQuery(GET_CURRENT_USER_DATA)

 useEffect(() => {
  setUser(data?.getCurrentUser)
 }, [loading, data?.getCurrentUser])

 return {
  user,
  loading,
 }
}
