import React from 'react'
import { Typography } from '@mui/material'
import { useRouter } from 'next/router'

// src

interface SeasonTitleProps {
  season_id: number
  tournament_name: string
  league_name: string
}

export default function SeasonTitle({ season_id, tournament_name, league_name }: SeasonTitleProps): JSX.Element {
  const router = useRouter()

  return (
    <Typography
      variant="subtitle1"
      align="center"
      sx={({ palette }) => ({
        '&:hover': {
          color: palette.secondary.main,
        },
      })}
      onClick={(e) => {
        e.preventDefault()
        router.push(`/seasons/${season_id}`)
      }}
    >
      {tournament_name}. {league_name}
    </Typography>
  )
}
