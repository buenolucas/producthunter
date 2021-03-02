import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utilities/test/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the size and bg for default', () => {
    const { container } = renderWithTheme(<Button>upshot</Button>)

    expect(screen.getByRole('button', { name: /upshot/i })).toHaveStyle({
      'border-radius': '0.8rem',
      'font-size': '2.4rem',
      padding: '0.8rem 1.6rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">upshot</Button>)

    expect(screen.getByRole('button', { name: /upshot/i })).toHaveStyle({
      'border-radius': '0.4rem',
      'font-size': '2.2rem',
      padding: '0.4rem 0.8rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">upshot</Button>)

    expect(screen.getByRole('button', { name: /upshot/i })).toHaveStyle({
      'border-radius': '1.0rem',
      'font-size': '3.4rem',
      padding: '0.8rem 4.0rem'
    })
  })

  it('should render a full width version', () => {
    renderWithTheme(<Button fullWidth>upshot</Button>)

    expect(screen.getByRole('button', { name: /upshot/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render blood color button', () => {
    renderWithTheme(<Button color="blood">upshot</Button>)

    expect(screen.getByRole('button', { name: /upshot/i })).toHaveStyle({
      'background-color': '#EB5757'
    })
  })

  it('should render outlined blood color button', () => {
    renderWithTheme(
      <Button color="blood" outlined>
        upshot
      </Button>
    )

    expect(screen.getByRole('button', { name: /upshot/i })).toHaveStyle({
      color: '#EB5757',
      border: '1px solid #EB5757'
    })
  })
})
