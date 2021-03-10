import styled, { css } from 'styled-components'

export const Component = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    padding: 1.6rem;
    position: relative;
  `}
`

export const ThumbBox = styled.div``

export const Actions = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`
export const InfoBox = styled.div`
  margin-left: 0.8rem;
`

export const Name = styled.h2`
  font-family: 'Bitter';
  font-weight: 900;
`

export const Tagline = styled.h3`
  font-family: 'Smythe';
  font-weight: 900;
  font-size: 2.2rem;
`
