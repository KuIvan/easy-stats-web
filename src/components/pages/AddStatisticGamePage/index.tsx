import React, { ChangeEvent, useEffect, useState } from 'react'
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
} from '@mui/material'
import { useQuery, useMutation } from '@apollo/client'
import { map } from 'lodash'
//src
import TableStats from 'src/components/molecules/TableStats'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import ButtonForm from 'src/components/atoms/ButtonForm'
import FormControlStats from 'src/components/atoms/FormControlStats'
import { GET_GAME_DATA } from 'src/graphql/queries/game';
import { ADD_ACTION } from '../../../graphql/mutation/action/AddAction'
import { REMOVE_ACTION } from '../../../graphql/mutation/action/RemoveAction'

interface AddStatisticPageProps {
  gameId: number
}

export default function AddStatisticPage({ gameId }: AddStatisticPageProps) {

  const [playerFirst, setPlayerFirst] = useState<object>({});
  const [playerSecond, setPlayerSecond] = useState<object>({});
  const [action, setAction] = useState<null | string>('');
  const [menuItemsPlayerFirst, setMenuItemsPlayerFirst] = useState<any>(0)
  const [menuItemsPlayerSecond, setMenuItemsPlayerSecond] = useState<any>(0)
  const [actionsPresent, setActionsPresent] = useState<any>( [])
  const [teamChoose, setTeamChoose] = useState<string>('')

  const { loading, error, data, refetch } = useQuery(GET_GAME_DATA, {
    variables: {
      id: gameId,
    },
  })

  const [deleteElement] = useMutation(REMOVE_ACTION, {
    onCompleted: (_data) => {
      console.log("data",_data)
    },
    onError: (error) => {
      console.log('error', error)
      // toast.error(`Ошибка при добавлении в закладки: ${error.message}`);
    },
  })

  function deleteRecord(event: MouseEvent, id: number) {
    refetch()
    return deleteElement({
      variables: {
        id
      }
    })
  }

  const [handleAction] = useMutation(ADD_ACTION, {
    variables: { initiatorId: playerFirst.id, addressableId: playerSecond.id, scope: action, gameId: gameId },
    onCompleted: (_data) => {
      refetch()
      // toast.success('Ссылка на соцсеть успешно добавлена!');
    },
    onError: (error) => {
      console.log('error', error)
      // toast.error(`Ошибка при добавлении в закладки: ${error.message}`);
    },
  })

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
    refetch()
    setActionsPresent(data?.getGame.actions)
  }, [data, action, teamChoose, actionsPresent])

  function handleChange(_event: ChangeEvent<{}>, setValue: any): void {
    setValue((_event.target as HTMLTextAreaElement).value)
  }

  const formStatistic = [
    {
      id: 0,
      label: 'Action',
      menuItems: [
        { id: 0, value: 'goal'},
        { id: 1, value: 'assist' },
        { id: 2, value: 'foul' },
        { id: 4, value: 'shot' },
        { id: 5, value: 'pass' },
        { id: 6, value: 'key_pass' },
        { id: 7, value: 'dribbling' },
        { id: 8, value: 'losing_the_ball'},
        { id: 9, value: 'steal'},
        { id: 10, value: 'interception'},
        { id: 11, value: 'block'},
        { id: 12, value: 'position_error'},
        { id: 13, value: 'created_moment'},
        { id: 14, value: 'yellow_card' },
        { id: 15, value: 'red_card' }
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
  ]
  function newSelectInput() {
    refetch()
    handleAction()
    setAction('')
    setPlayerFirst({})
    setPlayerSecond({})
  }

  const chooseTeam = (event: SelectChangeEvent) => {
    setTeamChoose(event.target.value as string);
    refetch()
  };

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
          spacing={5}
          justifyContent='center'
        >
          {map(formStatistic, function(form) {
            return(
              <Grid item xs={2} key={form.id}>
                {loading ? <Skeleton animation="wave" height='100%' variant="rectangular"/> : <FormControlStats form={form} onChangeFunc={handleChange} />}
              </Grid>
            )

          })}
          <Grid item xs={1}>
            <ButtonForm
              onClickFunc={newSelectInput}
              disabled={(!playerFirst || !action) || (playerFirst === playerSecond)}
              value='Add Record'
              variable={actionsPresent}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <TableStats
          rows={actionsPresent}
          rowName={['№','playerFirst', 'action', 'PlayerSecond']}
        />
      </Grid>
      <Grid item xs={1}>
        <Grid container marginTop='2.5vh' spacing={2.5}>
          {map(actionsPresent, function (currentAction: object) {
            return (
              <Grid item xs={10} key={currentAction.id}>
                <Button
                  variant='outlined'
                  onClick={(event) => deleteRecord(event, currentAction.id)}
                  fullWidth
                  style={{ height: '70%'}}
                >
                  Delete
                </Button>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}
