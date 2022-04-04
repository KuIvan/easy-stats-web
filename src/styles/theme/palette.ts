import type {
  PaletteColorsCommon,
} from 'src/types/theme/palette-custom';

const colorsCommon: PaletteColorsCommon = {
  white: {
    main: '#F4F5F6',
  },
};

const colorsPrimary = {
  main: '#00008B',
  alter: '#00008B',
};

const colorsSecondary = {
  main: '#CB7F07',
  alter: '#00008B',
};

const palette = {
  primary: colorsPrimary,
  secondary: colorsSecondary,
  system: colorsCommon,
};

export default palette
