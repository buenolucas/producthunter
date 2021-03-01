import { Story, Meta } from '@storybook/react/types-6-0'
import ScreenMatch from '.'

export default {
  title: 'ScreenMatch',
  component: ScreenMatch
} as Meta

export const Desktop: Story = () => (
  <ScreenMatch greaterThan="medium">Only on Desktop</ScreenMatch>
)

export const Mobile: Story = () => (
  <ScreenMatch lessThan="medium">Only on Mobile</ScreenMatch>
)
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
