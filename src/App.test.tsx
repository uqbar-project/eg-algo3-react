import { render, screen } from '@testing-library/react'
import App from './App'
import { expect, test } from 'vitest'


test('la aplicación levanta correctamente (smoke test)', async () => {
  render(<App />)
  expect(screen.getByTestId('principal')).toBeTruthy()
})
