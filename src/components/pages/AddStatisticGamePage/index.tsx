import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { get, reverse } from 'lodash'
import { useSnackbar } from 'notistack'
import { Grid } from '@mui/material'
//src
import { GET_GAME_DATA } from 'src/graphql/queries/game'
import GameActionCreator from 'src/components/organisms/GameActionCreator'
import TeamSelect from 'src/components/molecules/TeamSelect'
import TableStats from 'src/components/molecules/TableStats'
import { REMOVE_ACTION } from 'src/graphql/mutation/action/RemoveAction'
import { validateAuthErrors } from 'src/utils/parseUtils/error'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import { ADD_ACTION } from 'src/graphql/mutation/action/AddAction'

type TeamType = {
  gamesSquadsPlayer: GamesSquadsPlayerType
}

type GamesSquadsPlayerType = {
  id: number
  seasonsSquadsPlayer: SeasonSquadsPlayerType
}

type SeasonSquadsPlayerType = {
  id: number
  teamsPlayer: TeamsPlayerType
}

type TeamsPlayerType = {
  id: number
  number: number
  user: UserType
}

type UserType = {
  id: number
  fullName: string
}

interface AddStatisticPageProps {
  gameId: number
}

export default function AddStatisticPage({ gameId }: AddStatisticPageProps) {

  const { enqueueSnackbar } = useSnackbar()
  const { loading, data, refetch } = useQuery(GET_GAME_DATA, {
    variables: {
      id: gameId,
    },
  })

  const team1 = data?.getGame.gamesSquads[0]
  const team2 = data?.getGame.gamesSquads[1]

  const [teams, setTeams] = useState<TeamType[]>([team1, team2])
  const [stats, setStats] = useState<string[]>(data?.getGame.actions)

  const [deleteElement] = useMutation(REMOVE_ACTION, {
    onCompleted: (_data) => {
      refetch()
        .then()
      enqueueSnackbar('Success', { variant: 'success' })
    },
    onError: (error) => {
      const errorObject = get(error, 'response.data.errors', false)
      if (errorObject) {
        enqueueSnackbar(validateAuthErrors(errorObject), { variant: 'error' })
      }
    }
  })

  const [handleElement] = useMutation(ADD_ACTION, {
    onCompleted: (_data) => {
      enqueueSnackbar('Success', { variant: 'success' })
      refetch()
        .then()
    },
    onError: (error) => {
      const errorObject = get(error, 'response.data.errors', false)
      if (errorObject) {
        enqueueSnackbar(validateAuthErrors(errorObject), { variant: 'error' })
      }
    }
  })

  function removeItem(id: number) {
    return deleteElement({
      variables: {
        id
      }
    })
  }

  const onGlobalTeamSelect = () => {
    setTeams(reverse([teams[0], teams[1]]))
  }

  useEffect(() => {
    setTeams([team1, team2])
    setStats(data?.getGame.actions)
  }, [loading, team1, team2, data?.getGame.actions])

  return (
    <Grid
      container
      justifyContent='center'
      spacing={5}
      sx={{ marginTop: 10 }}
    >

      <Grid item xs={12}>
        <DefaultLandingTitle title={`Add statistic for game ${gameId}`}/>
      </Grid>

      <Grid item xs={2}>
        <TeamSelect onChange={onGlobalTeamSelect} />
      </Grid>

      <Grid item xs={12}>
        <GameActionCreator
          teams={teams}
          gameId={gameId}
          handleElement={handleElement}
        />
      </Grid>

      <Grid item xs={6}>
        <TableStats
          stats={stats}
          rowsNames={['№', 'Initiator', 'Action', 'Addressable', 'Successful', 'Delete']}
          onRemoveAction={removeItem}
        />
      </Grid>

    </Grid>
  )
}
