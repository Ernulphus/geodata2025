import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Home from './Home'
import { MemoryRouter } from 'react-router'

describe('Home', () => {
  it('looks correct', () => {
    const { container } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>);
    expect(container).toMatchSnapshot()
  })
})
