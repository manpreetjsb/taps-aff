import { render } from '@testing-library/react'

import Weather from './Weather'

const setup = () => {
  const utils = render(<Weather />)

  return {
    ...utils,
  }
}

describe('Weather', () => {
  it('Should have the city name', () => {
    const { getByText } = setup()
    expect(getByText('Glasgow')).toBeInTheDocument()
  })
  it('Should have the Shirt', () => {
    const { getByText } = setup()
    expect(getByText('Shirt')).toBeInTheDocument()
  })
})
