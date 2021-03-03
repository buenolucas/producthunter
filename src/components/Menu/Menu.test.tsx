import { fireEvent, screen } from '@testing-library/react'
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

  it('should handle open/close menu', () => {
    renderWithTheme(<Menu />)
    // select menu element
    const menuElement = screen.getByRole('navigation', { hidden: true })

    // check if menu is hidden
    expect(menuElement.getAttribute('aria-hidden')).toBe('true')
    expect(menuElement).toHaveStyle({ opacity: 0 })

    // click on menu button and check if is open
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(menuElement.getAttribute('aria-hidden')).toBe('false')
    expect(menuElement).toHaveStyle({ opacity: 1 })

    // click on closebutton and check if is closed
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(menuElement.getAttribute('aria-hidden')).toBe('true')
    expect(menuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show correct menu items when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/home/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/my upshots/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.getByText(/login/i)).toBeInTheDocument()
    expect(screen.queryByText(/logout/i)).not.toBeInTheDocument()
  })

  it('should show correct menu items when logged in', () => {
    renderWithTheme(<Menu username="buenolucas" />)

    expect(screen.queryByText(/home/i)).toBeInTheDocument()
    expect(screen.queryByText(/my upshots/i)).toBeInTheDocument()
    expect(screen.queryByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText(/logout/i)).toBeInTheDocument()
    expect(screen.queryByText(/login/i)).not.toBeInTheDocument()
  })
})
