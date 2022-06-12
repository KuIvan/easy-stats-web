import React from 'react'
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { map, startCase, capitalize, get } from 'lodash'

interface TableStatsProps {
  stats: string[]
  rowsNames: string[]
  onRemoveAction?: Function
}

export default function TableStats({ rowsNames, stats, onRemoveAction }: TableStatsProps) {

  return (
    <Table>
      <TableHead>
        <TableRow>
          {map(rowsNames, (name: string) => <TableCell key={name} align="left">{name}</TableCell>)}
        </TableRow>
      </TableHead>

      <TableBody>
        {map(stats, (row: any, index: number) => {
          const initiatorPlayer = row.initiator.seasonsSquadsPlayer.teamsPlayer
          const addressablePlayer = get(row.addressable, 'seasonsSquadsPlayer.teamsPlayer', null)

          return (
            <TableRow key={row.id}>
              <TableCell align="left">{index + 1}</TableCell>

              <TableCell
                align="left">{[initiatorPlayer.number, initiatorPlayer.user.fullName].join(' ')}
              </TableCell>

              <TableCell align="left">
                {startCase(row.scope)}
              </TableCell>

              <TableCell align="left">
                {addressablePlayer && [addressablePlayer.number, addressablePlayer.user.fullName].join(' ')}
              </TableCell>

              <TableCell align="left">
                {capitalize(Boolean(row.isSuccessful).toString())}
              </TableCell>

              <TableCell>
                {(rowsNames[5] === 'Delete' && onRemoveAction) && <Button onClick={() => {onRemoveAction(row.id)}}>Delete</Button>}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
