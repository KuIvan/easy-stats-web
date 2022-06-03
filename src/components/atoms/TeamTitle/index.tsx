import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Image from 'next/image'
import image from '/public/icons/default/logo2-1.png'
// src
import { TeamInterface } from 'src/types/games'

interface TeamTitleProps{
  team: TeamInterface
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}

export default function TeamTitle({ team, direction = 'row' }: TeamTitleProps): JSX.Element {

  const router = useRouter()

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      flexDirection={direction}
      sx={({ palette }) => ({
        '&:hover': {
          color: palette.secondary.main,
        },
      })}
      onClick={(e) => {
        e.preventDefault()
        router.push(`/teams/${team.id}`)
      }}
    >
      <Grid
        item
        width={50}
        height={50}
        position="relative"
        marginLeft={direction === 'row-reverse' ? '12px' : '0'}
        marginRight={direction !== 'row-reverse' ? '12px' : '0'}
      >
        <Image
          alt="Block img"
          src={team.teamPhoto || image}
          layout="fill"
        />
      </Grid>
      <Grid item>
        <Typography variant="h6">
          {team.name}
        </Typography>
      </Grid>
    </Grid>
  )
}
