import { css } from 'styled-components'
import { TypographyStyle } from './types'

export const typography = (style: TypographyStyle) => css`
  font-family: ${style.family};
  font-size: ${style.size};
  font-weight: ${style.weight};
  line-height: ${style.lineHeight};
`
