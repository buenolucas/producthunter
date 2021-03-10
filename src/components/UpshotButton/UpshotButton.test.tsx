import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utilities/test/helpers'

import UpshotButton from '.'

const SKIN = 'upshot-button-skin'

describe('<UpshotButton />', () => {
  it('should render the button', () => {
    renderWithTheme(<UpshotButton />)
    expect(screen.getByTestId(SKIN))
  })

  it('should render voted button', () => {
    renderWithTheme(<UpshotButton isVoted={true} />)
    expect(screen.getByRole('button', { name: /0/i })).toHaveStyle({
      color: theme.colors.thinBlood
    })
  })
})
