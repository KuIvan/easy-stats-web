import { Typography, Grid, useMediaQuery } from '@mui/material'
import { Breakpoints } from '@mui/system/createTheme/createBreakpoints'
// src
import SignInFormLayout from 'src/components/organisms/SignInFormLayout'

export default function AuthPage(): JSX.Element {

  const isMobile = useMediaQuery(({ breakpoints }: { breakpoints: Breakpoints }) => breakpoints.down('md'));

  return (
    <Grid
      item
      xs={12}
      sx={({ palette}) => ({
        borderRadius: 4,
        padding: 6,
        zIndex: 1,
      })}
    >
      <Grid
        container
        justifyContent="center"
        spacing={{ xs: 1, md: 4 }}
      >
        <Grid item sx={{ textAlign: 'center' }}>
          <Typography variant={isMobile ? "h5" : "h3"} color="system.white.main">
            {"Let's get to know with YourEasyStats!"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SignInFormLayout />
        </Grid>
      </Grid>
    </Grid>
  )
}
