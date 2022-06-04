import React, { ChangeEvent, useEffect, useState } from 'react'
import {
  Button,
  FormControl,
  Grid,
  InputLabel, Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
} from '@mui/material'
import { useQuery, useMutation } from '@apollo/client'
import { get, map } from 'lodash'
//src
import TableStats from 'src/components/molecules/TableStats'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import ButtonForm from 'src/components/atoms/ButtonForm'
import FormControlStats from 'src/components/atoms/FormControlStats'
import { GET_GAME_DATA } from 'src/graphql/queries/game';
import { ADD_ACTION } from 'src/graphql/mutation/action/AddAction'
import { REMOVE_ACTION } from 'src/graphql/mutation/action/RemoveAction'
import { useSnackbar } from 'notistack'
import { validateAuthErrors } from 'src/utils/parseUtils/error'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'

type PlayerType = {
  id: number
  fullName: string
}

type ActionPresent = {
  id: number
  initiator: object
  addressable: object
  scope: string
}

type FormType = {
  id: number
  menuItems: string[]
  setValue: Function
  value: any
  label: string
}

interface AddStatisticPageProps {
  gameId: number
}

export default function AddStatisticPage({ gameId }: AddStatisticPageProps) {

  const [playerFirst, setPlayerFirst] = useState<PlayerType | null>(null)
  const [playerSecond, setPlayerSecond] = useState<PlayerType | null>(null)
  const [action, setAction] = useState<string>('')
  const [menuItemsPlayerFirst, setMenuItemsPlayerFirst] = useState<any>(0)
  const [menuItemsPlayerSecond, setMenuItemsPlayerSecond] = useState<any>(0)
  const [actionsPresent, setActionsPresent] = useState<ActionPresent[]>([])
  const [teamChoose, setTeamChoose] = useState<string>('')
  const [successfulValue, setSuccessfulValue] = useState<boolean | null>(null)
  const { enqueueSnackbar } = useSnackbar()

  const { loading, error, data, refetch } = useQuery(GET_GAME_DATA, {
    variables: {
      id: gameId,
    },
  })

  const [deleteElement] = useMutation(REMOVE_ACTION, {
    onCompleted: (_data) => {
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
    },
    onError: (error) => {
      const errorObject = get(error, 'response.data.errors', false)
      if (errorObject) {
        enqueueSnackbar(validateAuthErrors(errorObject), { variant: 'error' })
      }
    }
  })

  function deleteRecord(event: MouseEvent, id: number) {
    refetch()
    return deleteElement({
      variables: {
        id
      }
    })
  }

  function handleAction() {
    return handleElement(
      {
        variables: {
          initiatorId: playerFirst?.id,
          addressableId: playerSecond?.id,
          scope: action,
          isSuccessful: successfulValue,
          gameId: gameId
        }
      })
  }

  useEffect(() => {
    if (teamChoose === 'team-1') {
      setMenuItemsPlayerFirst(data?.getGame.gamesSquads[0].gamesSquadsPlayer)
      if (action === 'red_card' || action === 'yellow_card' || action === 'foul' || action === 'steal' || action === 'interception' || action === 'dribbling') {
        setMenuItemsPlayerSecond(data?.getGame.gamesSquads[1].gamesSquadsPlayer)
      } else {
        setMenuItemsPlayerSecond(data?.getGame.gamesSquads[0].gamesSquadsPlayer)
      }
    } else {
      setMenuItemsPlayerFirst(data?.getGame.gamesSquads[1].gamesSquadsPlayer)
      if (action === 'red_card' || action === 'yellow_card' || action === 'foul' || action === 'steal' || action === 'interception' || action === 'dribbling') {
        setMenuItemsPlayerSecond(data?.getGame.gamesSquads[0].gamesSquadsPlayer)
      } else {
        setMenuItemsPlayerSecond(data?.getGame.gamesSquads[1].gamesSquadsPlayer)
      }
    }
    setActionsPresent(data?.getGame.actions)
  }, [data, action, teamChoose, actionsPresent])

  function handleChange(_event: ChangeEvent<{}>, setValue: any): void {
    setValue((_event.target as HTMLTextAreaElement).value)
    refetch()
  }

  const formStatistic = [
    {
      id: 0,
      label: 'Action',
      menuItems: [
        { id: 0, value: 'goal', label: 'Goal' },
        { id: 1, value: 'assist', label: 'Assist' },
        { id: 2, value: 'foul', label: 'Foul' },
        { id: 4, value: 'shot', label: 'Shot' },
        { id: 5, value: 'pass', label: 'Pass' },
        { id: 6, value: 'key_pass', label: 'Key pass' },
        { id: 7, value: 'dribbling', label: 'Dribbling' },
        { id: 8, value: 'losing_the_ball', label: 'Losing The Ball' },
        { id: 9, value: 'steal', label: 'Steal' },
        { id: 10, value: 'interception', label: 'Interception' },
        { id: 11, value: 'block', label: 'Block' },
        { id: 12, value: 'position_error', label: 'Position Error' },
        { id: 13, value: 'created_moment', label: 'Created Moment' },
        { id: 14, value: 'yellow_card', label: 'Yellow Card' },
        { id: 15, value: 'red_card', label: 'Red Card' }
      ],
      value: action,
      setValue: setAction
    },
    {
      id: 1,
      label: 'Player #1',
      menuItems: menuItemsPlayerFirst,
      value: playerFirst?.id,
      setValue: setPlayerFirst
    },
    {
      id: 2,
      label: 'Player #2',
      menuItems: menuItemsPlayerSecond,
      value: playerSecond?.id,
      setValue: setPlayerSecond
    },
    {
      id: 3,
      label: 'Successful',
      menuItems: [{ id: 0, value: true, label: 'True' }, { id: 1, value: false, label: 'False' }],
      value: successfulValue,
      setValue: setSuccessfulValue
    },
  ]

  function newSelectInput() {
    handleAction()
    setAction('')
    setPlayerFirst(null)
    setPlayerSecond(null)
    setSuccessfulValue(null)
    setTimeout(refetch, 500)
  }

  const chooseTeam = (event: SelectChangeEvent) => {
    setTeamChoose(event.target.value as string);
  };

  if (useCurrentUser() != 'admin-admin@gmail.com') {
    return <NoAccess/>
  } else {
    return (
      <Grid
        container
        spacing={5}
        justifyContent='center'
        sx={{ marginTop: 10 }}
      >
        <Grid item xs={12}>
          <DefaultLandingTitle title={`Add statistic for game ${gameId}`}/>
        </Grid>

        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel>Choose your Team</InputLabel>
            <Select
              label='Choose your Team'
              onChange={chooseTeam}
            >
              <MenuItem value='team-1'>Team #1</MenuItem>
              <MenuItem value='team-2'>Team #2</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            justifyContent='center'
          >
            {map(formStatistic, function (form: FormType) {
              return (
                <Grid item xs={2} key={form.id}>
                  {loading ? <Skeleton animation="wave" height='100%' variant="rectangular"/> :
                    <FormControlStats form={form} onChangeFunc={handleChange}/>}
                </Grid>
              )

            })}
            <Grid item xs={12}>
              <Grid container justifyContent='center'>
                <ButtonForm
                  onClickFunc={newSelectInput}
                  disabled={(!playerFirst || !action) || (playerFirst === playerSecond)}
                  value='Add Record'
                  variable={actionsPresent}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <TableStats
            rows={actionsPresent}
            rowName={['№', 'Initiator', 'action', 'Addressable', 'Successful']}
          />
        </Grid>

        <Grid item xs={1}>
          <Grid container marginTop='4vh'>
            {map(actionsPresent, function (currentAction: ActionPresent) {
              return (
                <Grid item xs={10} key={currentAction.id} marginTop='9%'>
                  <Button
                    variant='outlined'
                    onClick={(event) => deleteRecord(event, currentAction.id)}
                    fullWidth
                    style={{ height: '70%' }}
                  >
                    Delete
                  </Button>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Link href='/home'>
            <Grid container justifyContent='center'>
              <Button variant='outlined'>Home</Button>
            </Grid>
          </Link>
        </Grid>
      </Grid>
    )
  }
}
