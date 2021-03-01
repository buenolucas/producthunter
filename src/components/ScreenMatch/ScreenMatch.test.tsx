import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import ScreenMatch from '.'

describe('<ScreenMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    render(
      <>
        <ScreenMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </ScreenMatch>
        <ScreenMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </ScreenMatch>
      </>
    )
    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden if no media query is passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hide based on the media passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
})
