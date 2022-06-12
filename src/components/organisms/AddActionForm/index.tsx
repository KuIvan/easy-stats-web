import React from 'react'
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Skeleton } from '@mui/material'
import { map } from 'lodash'
import FormControlStats from 'src/components/atoms/FormControlStats'
import ButtonForm from 'src/components/atoms/ButtonForm'

type FormType = {
  id: number
  menuItems: string[]
  setValue: Function
  value: any
  label: string
}

interface AddActionFormProps {
  formStatistic: object[]
  loading: boolean
  handleChange: Function
  playerFirst: number | null
  playerSecond: number | null
  actionsPresent: object[]
  newSelectInput: Function
  action: string
  teamChoose: string
  setTeamChoose: Function
}

export default function AddActionForm({ formStatistic, loading, handleChange, playerFirst, playerSecond, actionsPresent, newSelectInput, action, teamChoose, setTeamChoose } : AddActionFormProps) {

  const chooseTeam = (event: SelectChangeEvent) => {
    setTeamChoose(event.target.value as string);
  }

  return (
    <Grid container justifyContent='center' spacing={5}>
      <Grid item xs={2}>
        <FormControl fullWidth>
          <InputLabel>Choose your Team</InputLabel>
          <Select
            value={teamChoose}
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
          {map(formStatistic, (form: FormType) => {
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
    </Grid>
  )
}
