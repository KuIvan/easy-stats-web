import React, { ChangeEvent, useEffect, useState } from 'react'
import { Grid, Skeleton } from '@mui/material'
import { useQuery } from '@apollo/client'
import { map } from 'lodash'
//src
import TableStats from 'src/components/molecules/TableStats'
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'
import ButtonForm from 'src/components/atoms/ButtonForm'
import FormControlStats from 'src/components/atoms/FormControlStats'
import { GET_GAME_DATA } from 'src/graphql/queries/game';

interface AddStatisticPageProps {
  gameId: number
}

export default function AddStatisticPage({ gameId }: AddStatisticPageProps) {

  const [playerOne, setPlayerOne] = useState<null | number>(0);
  const [playerSecond, setPlayerSecond] = useState<null | number>(0);
  const [action, setAction] = useState<null | string>('');
  const [menuItems, setMenuItems] = useState<any>(0)

  const { loading, error, data } = useQuery(GET_GAME_DATA, {
    variables: {
      id: gameId,
    },
})

  useEffect(() => {
    setMenuItems(data?.getGame.gamesSquads[0].gamesSquadsPlayer)
  }, [loading])

  function handleChange(_event: ChangeEvent<{}>, setValue: any): void {
   setValue((_event.target as HTMLTextAreaElement).value)
  }

  const formStatistic = [
    {
      id: 0,
      label: 'Player #1',
      menuItems,
      value: playerOne,
      setValue: setPlayerOne
    },
    {
      id: 1,
      label: 'Action',
      menuItems: [
        { id: 0, value: 'goal' },
        { id: 1, value: 'assist' },
        { id: 2, value: 'yellow card' },
        { id: 3, value: 'red card' },
      ],
      value: action,
      setValue: setAction
    },
    {
      id: 2,
      label: 'Player #2',
      menuItems,
      value: playerSecond,
      setValue: setPlayerSecond
    },
  ]

  function newSelectInput(rows: any) {
    const newArray = [ ...rows, {id: rows.size, initiator: playerOne, addressable: playerSecond, action: action }]
    setAction('')
    setPlayerOne(0)
    setPlayerSecond(0)
    return setRows(newArray)
  }

  const [rows, setRows] = useState<any>( [
    { id: 0, initiator: 17, addressable: 12, action: 'goal' },
    { id: 1, initiator: 27, addressable: 22, action: 'assist' },
    { id: 2, initiator: 37, addressable: 3, action: 'red card' },
    { id: 3, initiator: 47, addressable: 42, action: 'yellow card' },
  ])

  // NOTE:: Use lodash here
  function deleteRecord(id: number) {
    const newArray = [ ...rows.slice(id), ...rows.slice(id + 1) ]
    return setRows(newArray)
  }

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
              disabled={(!playerOne || !action) || (playerOne === playerSecond)}
              value='Add Record'
              variable={rows}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <TableStats
          rows={rows}
          rowName={['№','PlayerOne', 'action', 'PlayerSecond','Delete']}
          buttonFunc={deleteRecord}
          buttonValue='Delete'
        />
      </Grid>
    </Grid>
  )
}
