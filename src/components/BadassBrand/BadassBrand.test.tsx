import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utilities/test/helpers'
import BadassBrand from '.'

const SKIN = 'badass-brand-skin'
const THE_BAD = 'badass-brand-thebad'
const THE_NAME = 'badass-brand-thename'

describe('<BadassBrand />', () => {
  it('should render BadassBrand by default', () => {
    renderWithTheme(<BadassBrand />)
    expect(screen.getByTestId(SKIN)).toHaveStyle({
      color: '#FFFFFF'
    })
    expect(screen.getByTestId(THE_BAD)).toBeInTheDocument()
    expect(screen.getByTestId(THE_NAME)).toBeInTheDocument()
  })

  it('should render BadassBrand by default', () => {
    renderWithTheme(<BadassBrand negative />)
    expect(screen.getByTestId(SKIN)).toHaveStyle({
      color: '#000000'
    })
  })

  it('should render only the Type', () => {
    renderWithTheme(<BadassBrand elements="typo" />)
    expect(screen.getByTestId(THE_NAME)).toBeInTheDocument()
    expect(screen.getByTestId(THE_BAD)).toHaveStyleRule('display', 'none')
  })

  it('should render only the Icon', () => {
    renderWithTheme(<BadassBrand elements="icon" />)
    expect(screen.getByTestId(THE_BAD)).toBeInTheDocument()
    expect(screen.getByTestId(THE_NAME)).toHaveStyleRule('display', 'none')
  })

  it('should render a small BadassBrand', () => {
    renderWithTheme(<BadassBrand size="small" />)
    expect(screen.getByTestId('badass-brand-skin')).toHaveStyle({
      width: '9.1rem'
    })
  })

  it('should render a bigger BadassBrand', () => {
    renderWithTheme(<BadassBrand size="large" />)
    expect(screen.getByTestId('badass-brand-skin')).toHaveStyle({
      width: '35rem'
    })
  })
})
