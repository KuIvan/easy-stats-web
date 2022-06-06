import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { map } from 'lodash'

type ActionType = {
  id: number
  initiator: object
  addressable: object
  scope: string
  isSuccessful: boolean
}

interface TableStatsProps {
  rowName: string[]
  rows: ActionType
}

export default function TableStats({rowName, rows}: TableStatsProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {map(rowName, function (name: string) {
            return(
              <TableCell key={name} align="left">{name}</TableCell>
            )
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {map(rows, function (row: any, index: number) {
          return (
            <TableRow key={row.id}>
              <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{row.initiator.seasonsSquadsPlayer.teamsPlayer.number} {row.initiator.seasonsSquadsPlayer.teamsPlayer.user.fullName}</TableCell>
              <TableCell align="left">
                {(
                row.scope === 'key_pass' && 'Key pass' ||
                row.scope === 'losing_the_ball' && 'Losing the Ball' ||
                row.scope === 'red_card' && 'Red Card' ||
                row.scope === 'yellow_card' && 'Yellow_card' ||
                row.scope === 'position_error' && 'Position Error' ||
                row.scope === 'created_moment' && 'Created Moment') ||
                row.scope
                }
              </TableCell>
              <TableCell align="left">{row.addressable && row.addressable.seasonsSquadsPlayer.teamsPlayer.number} {row.addressable && row.addressable.seasonsSquadsPlayer.teamsPlayer.user.fullName}</TableCell>
              <TableCell align="left">{row.isSuccessful ? 'True' : 'False'}</TableCell>
            </TableRow>
          )}
        )}
      </TableBody>
    </Table>
  )
}
