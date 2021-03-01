import styled, { css } from 'styled-components'

const sizeModifiers = {
  small: () => css`
    width: 9.1rem;
    height: 3.1rem;
    svg {
      height: 3.1rem;
    }
    img {
      width: 3.1rem;
    }
  `,
  normal: () => css`
    width: 23.2rem;
    height: 7.9rem;
    svg {
      height: 7.9rem;
    }
  `,
  large: () => css`
    width: 35rem;
    height: 11.9rem;
    svg {
      height: 11.9rem;
    }
    & > *:first-child {
      flex-grow: 1;
    }
  `
}

type SkinProps = {
  color: string
  isSingle: boolean
  size?: 'small' | 'normal' | 'large'
}
export const Component = styled.div<SkinProps>`
  ${({ color, isSingle, size }) => css`
    color: ${color};
    display: flex;
    ${!!size && sizeModifiers[size]}
    ${() =>
      !isSingle &&
      css`
        & > *:first-child {
          margin-right: 0.5rem;
        }
      `}
  `}
`

type ContainerProps = {
  show?: boolean
}
export const TheBadContainer = styled.div<ContainerProps>`
  ${({ show }) => css`
    display: ${show ? 'block' : 'none'};
  `}
`

export const TheNameContainer = styled.div<ContainerProps>`
  ${({ show }) => css`
    display: ${show ? 'block' : 'none'};
  `}
`

export const TheBad = styled.img`
  height: 100%;
`
