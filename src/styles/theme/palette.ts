import type {
  PaletteColorsCommon,
} from 'src/types/theme/palette-custom';

const colorsCommon: PaletteColorsCommon = {
  white: {
    main: '#F4F5F6',
  },
  black: {
    main: '#000000',
  },
};

const colorsPrimary = {
  main: '#093272',
  alter: '#00008B',
};

const colorsSecondary = {
  main: '#EE9E20',
  alter: '#00008B',
};

const palette = {
  primary: colorsPrimary,
  secondary: colorsSecondary,
  system: colorsCommon,
};

export default palette
