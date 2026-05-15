import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders button text', () => {
    render(<Button label="Click Me" />)

    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })
})