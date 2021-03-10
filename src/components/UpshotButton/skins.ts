import styled, { css } from 'styled-components'
import { UpshotButtonProps } from './UpshotButton'

type ComponentProps = Pick<UpshotButtonProps, 'isVoted'>

export const Component = styled.button<ComponentProps>`
  ${({ theme, isVoted }) => css`
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
    padding-right: 1.2rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
    background-color: transparent;
    color: ${!isVoted ? theme.colors.bootGray : theme.colors.thinBlood};
    border: 1px solid
      ${!isVoted ? theme.colors.bootGray : theme.colors.thinBlood};
  `}
`
export const Label = styled.span`
  font-family: Smokum;
  font-size: 3.2rem;
`
