import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utilities/test/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /baddass hunter/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
  })
})
