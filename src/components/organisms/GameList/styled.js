import styled from '@emotion/styled'
import { Grid } from '@mui/material'

const StyledContainer = styled(Grid)`
  border-radius: 10px;
  border: 2px solid #0942ad90;
  margin-top: 30px;
  color: #EE9E20;
  &:hover {
    border: 2px solid #EE9E2090;
    color: #093272;
    box-shadow: 2px 4px 10px grey;
  }
`
export default StyledContainer
