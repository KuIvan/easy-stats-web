import React, { useEffect, useState } from 'react'
import { map } from 'lodash'
import { Button, Grid } from '@mui/material'
//src
import { menuItemsAction } from 'src/components/constants'
import Selector from 'src/components/organisms/Selector'

type FormType = {
  id: number
  label: string
  menuItems: any
  value: number | string
  setValue: Function
}

interface Props {
  teams: any
  gameId: number
  handleElement: Function
}

export default function GameActionCreator({ teams, gameId, handleElement }: Props) {

  const [selectedAction, setSelectedAction] = useState<string>(menuItemsAction[0].value)
  const [firstTeamSelect, setFirstTeamSelect] = useState<number | null>(null)
  const [secondTeamSelect, setSecondTeamSelect] = useState<number | null>(null)
  const [success, setSuccess] = useState<boolean>(true)
  const [secondTeam, setSecondTeam] = useState<any>(teams[0])

  const onFirstTeamSelect = (value: any) => {
    setFirstTeamSelect(value)
  }

  const onSecondTeamSelect = (value: any) => {
    setSecondTeamSelect(value)
  }

  function handleAction() {
    return handleElement(
      {
        variables: {
          initiatorId: firstTeamSelect,
          addressableId: secondTeamSelect,
          scope: selectedAction,
          isSuccessful: success,
          gameId: gameId
        }
      })
  }

  const onCreateNewAction = () => {
    handleAction()
    setSelectedAction('')
    setFirstTeamSelect(null)
    setSecondTeamSelect(null)
  }

  const formStatistic = [
    {
      id: 0,
      label: 'Action',
      menuItems: menuItemsAction,
      value: selectedAction,
      setValue: setSelectedAction
    },
    {
      id: 1,
      label: 'Player #1',
      menuItems: teams[0]?.gamesSquadsPlayer,
      value: firstTeamSelect,
      setValue: onFirstTeamSelect
    },
    {
      id: 2,
      label: 'Player #2',
      menuItems: secondTeam?.gamesSquadsPlayer,
      value: secondTeamSelect,
      setValue: onSecondTeamSelect
    },
    {
      id: 3,
      label: 'Successful',
      menuItems: [
        { id: 0, value: true, label: 'True' },
        { id: 1, value: false, label: 'False' }
      ],
      value: success,
      setValue: setSuccess
    }
  ]

  useEffect(() => {
    const isAction = ['red_card', 'yellow_card', 'foul', 'steal', 'interception', 'dribbling', 'block'].includes(selectedAction)
    if (isAction) {
      setSecondTeam(teams[1])
    } else {
      setSecondTeam(teams[0])
    }
    const isActionSolo = ['goal', 'losing_the_ball', 'position_error', 'created_moment'].includes(selectedAction)
    if (isActionSolo) {
      setSecondTeam(null)
    }
  }, [selectedAction, firstTeamSelect])

  return (
    <Grid container justifyContent='center' spacing={5}>
        {map(formStatistic, (form: FormType) => <Selector key={form.id} form={form} />)}
      <Grid item xs={12}>
        <Grid container justifyContent='center'>
          <Button variant='outlined' disabled={firstTeamSelect === secondTeamSelect || firstTeamSelect === null} onClick={() => {onCreateNewAction()}}>Add Record</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
