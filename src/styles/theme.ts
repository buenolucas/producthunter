import { TypographyStyles } from './types'
const colors = {
  redBlood: '#EB5757',
  groundAndBlood: '#6F4242',
  white: '#FAFAFA'
}

const palette = {
  primary: colors.redBlood,
  secondary: colors.groundAndBlood,
  mainBg: colors.redBlood
}

const grid = {
  container: '130em',
  gutter: '3.2rem'
}

const border = {
  radius: '0.4rem'
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
  }
}

export default {
  palette,
  grid,
  border,
  fonts,
  typography
}
