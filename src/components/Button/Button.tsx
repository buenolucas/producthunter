import * as skins from './skins'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  color?: 'blood' | 'groundAndBlood' | 'bootSole'
  outlined?: boolean
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  size = 'medium',
  color = 'groundAndBlood',
  fullWidth = false,
  outlined = false,
  ...props
}: ButtonProps) => (
  <skins.Component
    data-testid="button-skin"
    size={size}
    color={color}
    fullWidth={fullWidth}
    outlined={outlined}
    {...props}
  >
    <span>{children}</span>
  </skins.Component>
)

export default Button
