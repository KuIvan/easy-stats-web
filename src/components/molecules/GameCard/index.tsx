import React from 'react'
import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import find from 'lodash/find'
import moment from 'moment'
// src
import { GameInterface } from 'src/types/games'
import SeasonTitle from 'src/components/atoms/SeasonTitle'
import TeamTitle from 'src/components/atoms/TeamTitle'
import palette from 'src/styles/theme/palette'

interface GameCardProps {
  game: GameInterface
}

export default function GameCard({ game }: GameCardProps): JSX.Element {

  const host = find(game.gamesSquads, { 'status': 'host' })
  const guest = find(game.gamesSquads, { 'status': 'guest' })

  return (
    <Grid
      item
      xs={12}
      sx={{
        borderColor: palette.primary.main,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 3,
        marginTop: 2,
        cursor: 'pointer',
        '&:hover': {
          color: palette.system.white.main,
          background: palette.primary.main,
        }
      }
      }
    >
      <Link passHref href={`/game-stats/${game.id}`}>
        <a>
          <Grid
            container
            justifyContent="center"
            alignContent="center"
          >
            <Grid
              item
              xs={12}
            >
              <SeasonTitle
                season_id={game.stage.season.id}
                league_name={game.stage.season.league.name}
                tournament_name={game.stage.season.league.tournament.name}
              />
            </Grid>

            <Grid item xs={12}>
              <Grid container alignItems="center">
                <Grid item xs={4}>
                  {host && <TeamTitle team={host.seasonsSquad.team}/>}
                </Grid>
                <Grid item xs={4}>
                  <Grid container justifyContent="center">
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" align="center">
                        {moment(game.gameDay).format('ll')}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        align="center"
                        sx={({ palette }) => ({
                          '&:hover': {
                            color: palette.secondary.main,
                          },
                        })}
                      >
                        {host ? host.goals : '-'} : {guest ? guest.goals : '-'}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  {guest && <TeamTitle team={guest.seasonsSquad.team} direction={'row-reverse'}/>}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </a>
      </Link>
    </Grid>
  )
}
