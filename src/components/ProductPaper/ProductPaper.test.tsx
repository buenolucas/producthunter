import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utilities/test/helpers'

import ProductPaper from '.'

const props = {
  id: '23213',
  slug: 'clearbit',
  name: 'Clearbit Company Logo API',
  tagline: 'Compare character count, pixel width & object length of text',
  thumbnail:
    'https://ph-files.imgix.net/38c837a3-99d1-458c-8efa-c8e4aaed04cc.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',

  isVoted: false,
  votesCount: 12333
}

describe('<ProductPaper />', () => {
  it('should render the correctly', () => {
    renderWithTheme(<ProductPaper {...props} />)

    expect(
      screen.getByRole('heading', {
        name: props.name
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: props.tagline
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: props.name
      })
    ).toHaveAttribute('src', props.thumbnail)
  })
})
