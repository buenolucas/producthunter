import { Story, Meta } from '@storybook/react/types-6-0'
import BadassBrand from '.'
import { BadassBrandProps } from './BadassBrand'

export default {
  title: 'BadassBrand',
  component: BadassBrand
} as Meta

export const Default: Story<BadassBrandProps> = (args) => (
  <BadassBrand {...args} />
)
