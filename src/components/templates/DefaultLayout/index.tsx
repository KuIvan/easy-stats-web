import React from 'react'

// src
import { Children } from 'src/types'

export default function DefaultLayout ({ children }: { children: Children }): JSX.Element {
  return <>{children}</>
}
