import palette from '../palette'

export default {
  styleOverrides: {
    containedSecondary: {
      color: palette.system.white.main,
    },
    "root": {
      "&.Mui-disabled": {
        backgroundColor: palette.secondary.alter
      }
    }
  }
}
