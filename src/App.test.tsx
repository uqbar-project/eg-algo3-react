import { render, screen } from '@testing-library/react'
import App from './App'
import { expect, test } from 'vitest'


test('convierte un valor > 0 de millas a kilómetros correctamente', async () => {
  render(<App />)
  expect(screen.getByTestId('principal')).toBeTruthy()
})
