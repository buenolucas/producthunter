import * as skins from './skins'
import { Menu as MenuIcon, Search as SearchIcon } from 'react-feather'
import BadassBrand from 'components/BadassBrand'

export type MenuProps = {
  children?: React.ReactNode
}

const Menu = () => (
  <skins.Component data-testid="menu-skin">
    <skins.Icon>
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
  </skins.Component>
)

export default Menu
