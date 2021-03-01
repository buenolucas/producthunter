import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Component = styled.h2`
  ${({
    theme: {
      typography: { heading2 }
    }
  }) => css`
    font-family: ${heading2.family};
    font-weight: ${heading2.weight};
    font-size: ${heading2.smSize};
    line-height: ${heading2.smLineHeight};
    ${media.greaterThan('medium')`
      font-size:${heading2.size};
      line-height:${heading2.lineHeight};
    `}
  `}
`
