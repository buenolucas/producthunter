import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './Button'
import tinycolor from 'tinycolor2'
type ComponentProps = Pick<
  ButtonProps,
  'size' | 'color' | 'fullWidth' | 'outlined'
>

const componentSizeModifiers = {
  small: (theme: DefaultTheme) => css`
    border-radius: ${theme.shape.borderRadius.small};
    font-size: ${theme.typography.button.smSize};
    padding: ${theme.spacing.xxxsmall} ${theme.spacing.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.typography.button.size};
    border-radius: ${theme.shape.borderRadius.medium};
    padding: ${theme.spacing.xxsmall} ${theme.spacing.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    border-radius: ${theme.shape.borderRadius.large};
    font-size: ${theme.typography.button.lgSize};
    padding: ${theme.spacing.xxsmall} ${theme.spacing.large};
  `,
  fullWidth: () => css`
    width: 100%;
  `
}

export const Component = styled.button<ComponentProps>`
  ${({
    theme: {
      typography: { button }
    },
    theme,
    size,
    fullWidth,
    color,
    outlined
  }) => css`
    font-family: ${button.family};
    font-weight: ${button.weight};
    font-size: ${button.size};
    line-height: ${button.smLineHeight};
    ${!!size && componentSizeModifiers[size](theme)};
    ${!!fullWidth && componentSizeModifiers.fullWidth()};
    ${outlined
      ? css`
          color: ${theme.palette[color!].main};
          border: 1px solid ${theme.palette[color!].main};
          &:hover {
            border-color: ${tinycolor(theme.palette[color!].main)
              .darken(10)
              .toString()};
          }
          &:active {
            border-color: ${tinycolor(theme.palette[color!].main)
              .darken(25)
              .toString()};
          }
        `
      : css`
          background-color: ${theme.palette[color!].main};
          border: none;
          color: ${theme.palette[color!].on};
          &:hover {
            background-color: ${tinycolor(theme.palette[color!].main)
              .darken(10)
              .toString()};
          }
          &:active {
            background-color: ${tinycolor(theme.palette[color!].main)
              .darken(25)
              .toString()};
          }
        `};
  `}
`
