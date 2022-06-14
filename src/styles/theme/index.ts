import { createTheme } from '@mui/material/styles';

import palette from './palette';
import typography from './typography';
import components from './overrides'

export default createTheme({
  palette,
  typography,
  components
});
