import styled from 'styled-components'
import media from 'styled-media-query'
import { MenuProps } from './Menu'

type ComponentProps = MenuProps

export const Component = styled.div<ComponentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`
export const Logo = styled.div`
  ${media.lessThan('medium')`
    position:absolute;
    left:50%;
    transform: translateX(-50%)
  `}
`

export const Icon = styled.div`
  color: #ffffff;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`
export const MenuGroup = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`
