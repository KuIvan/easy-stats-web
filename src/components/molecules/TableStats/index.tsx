import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { map } from 'lodash'
//src
import ButtonForm from 'src/components/atoms/ButtonForm'

interface TableStatsProps {
  rowName: string[]
  rows: any[]
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
          console.log('us', row)
          return (
            <TableRow key={row.id}>
              <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{row.initiator.seasonsSquadsPlayer.teamsPlayer.number} {row.initiator.seasonsSquadsPlayer.teamsPlayer.user.fullName}</TableCell>
              <TableCell align="left">{row.scope}</TableCell>
              <TableCell align="left">{row.addressable && row.addressable.seasonsSquadsPlayer.teamsPlayer.number} {row.addressable && row.addressable.seasonsSquadsPlayer.teamsPlayer.user.fullName}</TableCell>
            </TableRow>
          )}
        )}
      </TableBody>
    </Table>
  )
}
