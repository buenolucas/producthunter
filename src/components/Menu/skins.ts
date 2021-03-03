import styled, { css } from 'styled-components'
import { MenuProps } from './Menu'

type ComponentProps = MenuProps

export const Component = styled.div<ComponentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 4.2rem;
`
export const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const Icon = styled.div`
  color: #ffffff;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`
export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;

    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    > div {
      margin-left: ${theme.spacing.xsmall};
    }
  `}
`

export const MenuNav = styled.div``

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-family: ${theme.typography.menu.family};
    font-size: ${theme.typography.menu.size};
    margin: 0.3rem ${theme.spacing.small} 0;
    text-decoration: none;
    text-align: center;
    color: ${theme.colors.white};
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.thinBlood};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0%;
        }
      }
    }
  `}
`
type MenuFullProps = {
  isOpen: boolean
}
export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.palette.background.negative};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacing.xsmall};
      cursor: pointer;
      color: ${theme.colors.white};
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.colors.white};
      font-size: ${theme.typography.menu.lgSize};
      margin-bottom: ${theme.spacing.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${AuthBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const AuthBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacing.xlarge} ${theme.spacing.xlarge};
    > span {
      display: block;
      margin: ${theme.spacing.xxsmall};
    }
  `}
`
