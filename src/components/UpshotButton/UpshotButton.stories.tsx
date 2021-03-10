import { Story, Meta } from '@storybook/react/types-6-0'
import UpshotButton, { UpshotButtonProps } from './UpshotButton'

export default {
  title: 'UpshotButton',
  component: UpshotButton
} as Meta

export const Default: Story<UpshotButtonProps> = (args) => (
  <UpshotButton {...args} />
)

Default.args = {
  votesCount: 1232
}

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'wantedposter'
  }
}
