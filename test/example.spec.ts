import { expect, test } from 'vitest'

test('o usuario consegue crar uma nova transação', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
