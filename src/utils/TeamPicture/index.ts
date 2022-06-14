import { useState } from 'react'
import { map } from 'lodash'

type PictureType = {
  id: number
  team: string
  src: string
}

export default function setTeamPicture(teamName: string | undefined) {
  let url = ''
  const arrayPictures = [
    { id: 0, team: 'React', src: 'https://img.favpng.com/1/17/24/react-logo-png-favpng-m00s95CAF5ngxbSc2NfvnypRP.jpg' },
    { id: 1, team: 'Legion', src: 'https://logopond.com/logos/8a9ae49f5df67dac4b05b1df56b565bd.png' },
    { id: 2, team: 'Natus Vincere', src: 'https://pbs.twimg.com/profile_images/1410651428243361793/cDoC832p_400x400.jpg' },
    { id: 3, team: 'Lokomotiv', src: 'https://lokobasket.com/wp-content/themes/lokobasket/assets/images/pages/corporate-identity/20-21/logo_pbc_lokomotiv_kuban_border_raw.png' },
    { id: 4, team: 'Zenit', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/FC_Zenit_1_star_2015_logo.svg/1200px-FC_Zenit_1_star_2015_logo.svg.png' },
    { id: 5, team: 'Lazo', src: 'https://toppng.com//public/uploads/preview/imagen-lazo-luto-a4-png-inciclopedia-fandom-powered-logo-muerte-1156292447489smxbncne.png' },
    { id: 6, team: 'Youngs', src: 'https://assets-global.website-files.com/5dcecea1792b9612feb80ba1/5e1a40203feecd6de0129edd_youngs%20pub%20logo%20dark.png' },
    { id: 7, team: 'Oddisey', src: 'https://musical-time.com/wp-content/uploads/2020/06/assassins-creed-odyssey-logo.png' }
  ]

  // NOTE: This is temp solution because we have trouble with heroku, active storage
  map(arrayPictures, function (picture: PictureType) {
    if (teamName === picture.team)
      url = picture.src
  })
  return url
}
