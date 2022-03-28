import { getStatus } from '../../src/status/statusRepository.js'

jest.mock('../../src/status/statusRepository.js', () => ({
  getStatus: jest.fn(async () => {
    return Promise.resolve([
      { id: 1, name: 'Envoyé' },
      { id: 2, name: 'En cours' },
    ])
  }),
}))

describe('Status Repository', () => {
  describe('GetStatus', () => {
    test('Should Return Status', async () => {
      //* arrange
      const status = [
        { id: 1, name: 'Envoyé' },
        { id: 2, name: 'En cours' },
      ]
      //* act
      const data = await getStatus()
      //* assert
      expect(data).toStrictEqual(status)
    })
  })
})
