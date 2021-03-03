import { TypographyStyles } from './types'
const colors = {
  thinBlood: '#EB5757',
  groundAndBlood: '#784321',
  bootGray: '#4F4F4F',
  white: '#FAFAFA'
}

const palette = {
  blood: {
    main: colors.thinBlood,
    on: colors.white
  },
  groundAndBlood: {
    main: colors.groundAndBlood,
    on: colors.white
  },
  bootSole: {
    main: colors.bootGray,
    on: colors.white
  },
  neutral: {
    black: '#000000',
    white: '#000000'
  },
  background: {
    default: colors.thinBlood,
    paper: colors.white,
    negative: colors.bootGray
  }
}

const grid = {
  container: '130em',
  gutter: '3.2rem'
}

const fonts = {
  yrsa: {
    family: 'Yrsa',
    type: 'serif',
    weights: {
      normal: 400,
      bold: 700
    }
  },
  rye: {
    family: 'Rye',
    type: 'cursive',
    weights: {
      normal: 400
    }
  },
  smokum: {
    family: 'Smokum',
    type: 'cursive',
    weights: {
      normal: 400
    }
  },
  smythe: {
    family: 'Smythe',
    type: 'cursive',
    weights: {
      normal: 400
    }
  }
}

const shape = {
  borderRadius: {
    small: '0.4rem',
    medium: '0.8rem',
    large: '1.0rem'
  }
}
const typography: TypographyStyles = {
  body: {
    family: `'${fonts.yrsa.family}', ${fonts.yrsa.type}`,
    weight: fonts.yrsa.weights.normal,
    lineHeight: '3rem',
    size: '1.6rem'
  },

  heading2: {
    family: `'${fonts.rye.family}', ${fonts.rye.type}`,
    weight: fonts.smokum.weights.normal,
    size: '3.2rem',
    lineHeight: '140%',
    smSize: '2.4rem',
    smLineHeight: '140%'
  },

  button: {
    family: `'${fonts.smokum.family}', ${fonts.smokum.type}`,
    weight: fonts.smokum.weights.normal,
    size: '2.4rem',
    smSize: '2.2rem',
    lgSize: '3.4rem',
    lineHeight: '140%'
  },

  menu: {
    family: `'${fonts.smokum.family}', ${fonts.smokum.type}`,
    weight: fonts.smokum.weights.normal,
    size: '2.4rem',
    smSize: '2.2rem',
    lgSize: '3.2rem',
    lineHeight: '140%'
  }
}

const spacing = {
  xxxsmall: '0.4rem',
  xxsmall: '0.8rem',
  xsmall: '1.6rem',
  small: '2.4rem',
  medium: '3.2rem',
  large: '4.0rem',
  xlarge: '4.8rem',
  xxlarge: '5.6rem'
}

const layers = {
  base: 10,
  menu: 20,
  overlay: 30,
  modal: 40,
  alwaysOnTop: 50
}

export default {
  colors,
  palette,
  grid,
  shape,
  spacing,
  fonts,
  layers,
  typography
}
