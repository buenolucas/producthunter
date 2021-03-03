import { useState } from 'react'
import * as skins from './skins'
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  X as CloseIcon
} from 'react-feather'

import BadassBrand from 'components/BadassBrand'
import Button from 'components/Button'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <skins.Component data-testid="menu-skin">
      <skins.Icon onClick={() => setIsOpen(true)}>
        <MenuIcon size={24} aria-label="Open Menu" />
      </skins.Icon>

      <skins.Logo data-testid="logo-skin">
        <BadassBrand size="small" />
      </skins.Logo>

      <skins.MenuGroup>
        <skins.Icon>
          <SearchIcon size={24} aria-label="Search" />
        </skins.Icon>
      </skins.MenuGroup>

      <skins.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <skins.MenuNav>
          {!!username && (
            <>
              <skins.MenuLink href="#">Home</skins.MenuLink>
              <skins.MenuLink href="#">My Upshots</skins.MenuLink>
              <skins.MenuLink href="#">My Account</skins.MenuLink>
            </>
          )}
          <skins.MenuLink href="#">About</skins.MenuLink>
        </skins.MenuNav>

        <skins.AuthBox>
          {!username ? (
            <Button color="blood">Login</Button>
          ) : (
            <Button color="blood">Logout</Button>
          )}
        </skins.AuthBox>
      </skins.MenuFull>
    </skins.Component>
  )
}

export default Menu
