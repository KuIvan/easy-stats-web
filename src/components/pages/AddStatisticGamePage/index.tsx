// import React, { useState, ChangeEvent } from 'react'
import React, { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
//src
import DefaultLandingTitle from 'src/components/atoms/DefaultLandingTitle'

interface AddStatisticPageProps {
  gameId: number
}

export default function AddStatisticPage({ gameId }: AddStatisticPageProps) {

  const [playerOne, setPlayerOne] = useState<null | number>(null);
  const [playerSecond, setPlayerSecond] = useState<null | number>(null);
  const [action, setAction] = useState<null | string>('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }, setValue: (event: any) => void) => {
    setValue(event.target.value);
  };

  // NOTE:: ChangeEvent can be useful for you
  // function handleChange(_event: ChangeEvent<{}>, value: any): void {}

  const formStatistic = [
    {
      id: 0,
      label: 'Player #1',
      menuItems: [{ id: 0, value: 17 }, { id: 1, value: 22 }, { id: 2, value: 23 }, { id: 3, value: 10 },],
      value: playerOne,
      setValue: setPlayerOne
    },
    {
      id: 1,
      label: 'Action',
      menuItems: [{ id: 0, value: 'goal' }, { id: 1, value: 'assist' }, { id: 2, value: 'yellow card' }, {
        id: 3,
        value: 'red card'
      },],
      value: action,
      setValue: setAction
    },
    {
      id: 2,
      label: 'Player #2',
      menuItems: [{ id: 0, value: 17 }, { id: 1, value: 22 }, { id: 2, value: 23 }, { id: 3, value: 10 },],
      value: playerSecond,
      setValue: setPlayerSecond
    },
  ]

  function newSelectInput() {
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
    const newArray = [
      ...rows.slice(0, id),
      ...rows.slice(id + 1)
    ]
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
        <DefaultLandingTitle title={'Add statistic'}/>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          spacing={5}
          justifyContent='center'
        >
          {formStatistic.map((form) => (
            <Grid item xs={2}>
              {/* NOTE:: Create Atom component FormControl */}
              <Box sx={{ minWidth: 120 }} key={form.id}>
                <FormControl fullWidth>
                  <InputLabel>{form.label}</InputLabel>
                  <Select
                    value={form.value}
                    label={form.label}
                    onChange={(event: any) => handleChange(event, form.setValue)}
                  >
                    {form.menuItems.map((item) => (
                      <MenuItem key={item.id} value={item.value}>{item.value}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Grid item xs={1}>
                </Grid>
              </Box>
            </Grid>
          ))}
          {/* NOTE:: Create Atom component Button */}
          <Grid item xs={1}>
            <Button
              onClick={newSelectInput}
              disabled={(!action || !playerOne) || (playerOne == playerSecond)}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        {/* NOTE:: Create Organism component Table */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">№</TableCell>
              <TableCell align="left">Player One</TableCell>
              <TableCell align="left">Action</TableCell>
              <TableCell align="left">Player Second</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any, index: number) => (
              <TableRow key={row.id}>
                <TableCell>{index+1}</TableCell>
                <TableCell align="left">{row.initiator}</TableCell>
                <TableCell align="left">{row.action}</TableCell>
                <TableCell align="left">{row.addressable}</TableCell>
                <TableCell align="left">
                  <Button onClick={() => {deleteRecord(row.id)}}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  )
}
