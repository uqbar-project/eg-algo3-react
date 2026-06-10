import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('la aplicación levanta correctamente (smoke test)', async () => {
  render(<App />)
  expect(screen.getByTestId('principal')).toBeTruthy()
})
