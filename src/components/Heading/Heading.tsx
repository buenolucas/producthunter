import * as skins from './skins'

export type HeadingProps = {
  children: React.ReactNode
}

const Heading = ({ children }: HeadingProps) => (
  <skins.Component>{children}</skins.Component>
)

export default Heading
