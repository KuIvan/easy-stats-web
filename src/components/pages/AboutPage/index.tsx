import React from 'react'
// src
import WhatIsEasyStats from 'src/components/organisms/WhatIsEasyStats'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'

export default function AboutPage(): JSX.Element {

  if (useCurrentUser() === undefined) {
    return <NoAccess/>
  } else {
    return (
      <>
        <WhatIsEasyStats/>
      </>
    )
  }
}
