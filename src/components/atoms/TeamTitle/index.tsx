import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
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
        position="relative"
        marginLeft={direction === 'row-reverse' ? '12px' : '0'}
        marginRight={direction !== 'row-reverse' ? '12px' : '0'}
      >
        <img
          alt="Block img"
          // @ts-ignore
          src={team.teamPhoto || image}
          style={{height: 50, width: 50, borderRadius: '50%'}}
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
