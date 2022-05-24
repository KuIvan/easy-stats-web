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
import ButtonForm from '../../atoms/ButtonForm'


interface TableStatsProps {
  rowName: any
  rows: any
  buttonFunc: Function
  buttonValue: string
}

export default function TableStats({rowName, rows, buttonFunc, buttonValue}: TableStatsProps) {
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
              <TableCell align="left">{row.initiator}</TableCell>
              <TableCell align="left">{row.action}</TableCell>
              <TableCell align="left">{row.addressable}</TableCell>
              <TableCell align="left">
                <ButtonForm onClickFunc={() => buttonFunc(row.id)} value={buttonValue}/>
              </TableCell>
            </TableRow>
          )}
        )}
      </TableBody>
    </Table>
  )
}
