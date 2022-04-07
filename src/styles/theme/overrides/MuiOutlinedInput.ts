import palette from '../palette'

export default {
  styleOverrides: {
    root: {
      borderRadius: 5,
      background: palette.system.white.main,
      borderColor: palette.secondary.main,
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.system.white.main,
      },
      [`&:hover .MuiOutlinedInput-notchedOutline`]: {
        borderColor: palette.system.white.main,
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.system.white.main,
      },
      '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.system.white.main,
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.system.white.main,
      },
    },
    input: {
      paddingTop: 11,
      paddingBottom: 12,
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '20px'
    },
  }
}
