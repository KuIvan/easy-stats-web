import React, { ChangeEvent, useEffect, useState } from 'react'
import {
  Button, CircularProgress,
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
import { useSnackbar } from 'notistack'
//src
import TableStats from 'src/components/molecules/TableStats'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import ButtonForm from 'src/components/atoms/ButtonForm'
import FormControlStats from 'src/components/atoms/FormControlStats'
import { GET_GAME_DATA } from 'src/graphql/queries/game'
import { ADD_ACTION } from 'src/graphql/mutation/action/AddAction'
import { REMOVE_ACTION } from 'src/graphql/mutation/action/RemoveAction'
import { validateAuthErrors } from 'src/utils/parseUtils/error'
import useCurrentUser from 'src/components/molecules/useCurrentUser'
import NoAccess from 'src/components/pages/NoAccesPage'

type  PlayerType = {
  id: number
  fullName: string
  number: number
}

type ActionType = {
  id: number
  initiator: object
  addressable: object
  scope: string
  isSuccessful: boolean
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
  const { enqueueSnackbar } = useSnackbar()
  const { userEmail, loading: loadingCurrentUser } = useCurrentUser();

  const [teamChoose, setTeamChoose] = useState<string>('')
  const [playerFirst, setPlayerFirst] = useState<number | null>(null)
  const [playerSecond, setPlayerSecond] = useState<number | null>(null)
  const [action, setAction] = useState<string>('')
  const [menuItemsPlayerFirst, setMenuItemsPlayerFirst] = useState<PlayerType | null>(null)
  const [menuItemsPlayerSecond, setMenuItemsPlayerSecond] = useState<PlayerType | null  >(null)
  const [actionsPresent, setActionsPresent] = useState<ActionType[]>([])
  const [successfulValue, setSuccessfulValue] = useState<boolean>(true)

  const { loading, error, data, refetch } = useQuery(GET_GAME_DATA, {
    variables: {
      id: gameId,
    },
  })

  const [deleteElement] = useMutation(REMOVE_ACTION, {
    onCompleted: (_data) => {
      enqueueSnackbar('Success', { variant: 'success' })
      refetch()
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

  function deleteRecord(id: number) {
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
          initiatorId: playerFirst,
          addressableId: playerSecond,
          scope: action,
          isSuccessful: successfulValue,
          gameId: gameId
        }
      })
  }

  useEffect(() => {
    const isAction = ['red_card', 'yellow_card', 'foul', 'steal', 'interception', 'dribbling'].includes(action)

    if (teamChoose === 'host') {
      setMenuItemsPlayerFirst(data?.getGame.gamesSquads[0].gamesSquadsPlayer)
      if (isAction) {
        setMenuItemsPlayerSecond(data?.getGame.gamesSquads[1].gamesSquadsPlayer)
      } else {
        setMenuItemsPlayerSecond(data?.getGame.gamesSquads[0].gamesSquadsPlayer)
      }
    } else {
      setMenuItemsPlayerFirst(data?.getGame.gamesSquads[1].gamesSquadsPlayer)
      if (isAction) {
        setMenuItemsPlayerSecond(data?.getGame.gamesSquads[0].gamesSquadsPlayer)
      } else {
        setMenuItemsPlayerSecond(data?.getGame.gamesSquads[1].gamesSquadsPlayer)
      }
    }
    setActionsPresent(data?.getGame.actions)
  }, [data, action, teamChoose])

  function handleChange(_event: ChangeEvent<{}>, setValue: any): void {
    setValue((_event.target as HTMLTextAreaElement).value)
    refetch()
      .then(

      )
      .catch(

      )
  }

  function newSelectInput() {
    handleAction()
      .then(res => {
        setAction('')
        setPlayerFirst(null)
        setPlayerSecond(null)
        setSuccessfulValue(true)
      })
    setTimeout(refetch, 500)
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
      value: playerFirst,
      setValue: setPlayerFirst
    },
    {
      id: 2,
      label: 'Player #2',
      menuItems: menuItemsPlayerSecond,
      value: playerSecond,
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

  const chooseTeam = (event: SelectChangeEvent) => {
    setTeamChoose(event.target.value as string);
  }

  if (loadingCurrentUser) {
    return (
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        style={{ height: '80vh' }}
      >
        <CircularProgress/>
      </Grid>
    )
  } else {
    if (userEmail !== 'admin-admin@gmail.com') {
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
                <MenuItem value='host'>Host</MenuItem>
                <MenuItem value='guest'>Guest</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              spacing={2}
              justifyContent='center'
            >
              {map(formStatistic,(form: FormType) => {
                return (
                  <Grid item xs={2} key={form.id}>
                    {loading
                      ? <Skeleton animation="wave" height='100%' variant="rectangular"/>
                      : <FormControlStats form={form} onChangeFunc={handleChange}/>
                    }
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
              rowsNames={['№', 'Initiator', 'action', 'Addressable', 'Successful', 'Delete']}
              buttonFunc={deleteRecord}
            />
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
}
