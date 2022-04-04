import { Container, AppBar, Toolbar, Grid } from '@mui/material'
import Link from 'next/link'

export default function Header(): JSX.Element {
  return (
    <AppBar
      position="fixed"
      sx={({ palette}) => ({
        background: palette.primary.main
      })}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Link passHref href="/">
                <a>
                  <img
                    src="icons/default/logo1.png"
                    alt="Logo"
                    width={80}
                    height={55}
                    style={{ objectFit: 'cover' }}
                  />
                </a>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
