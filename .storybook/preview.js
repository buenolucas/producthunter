import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme.ts'

addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  backgrounds: {
    default: 'thinblood',
    values: [
      {
        name: 'thinblood',
        value: '#EB5757'
      },
      {
        name: 'bootsole',
        value: '#4F4F4F'
      },
      {
        name: 'wantedposter',
        value: '#FAFAFA'
      }
    ]
  }
}
