import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utilities/test/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a Heading', () => {
    renderWithTheme(<Heading>Badass Product Hunter</Heading>)
    expect(screen.getByRole('heading', { name: /badass product hunter/i }))
  })
})
