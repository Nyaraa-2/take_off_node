import { getStatus } from '../../src/status/statusServices.js'

jest.mock('../../src/status/statusRepository.js', () => ({
  getStatus: jest.fn(async () =>
    Promise.resolve(
      {
        id: 1,
        name: 'Envoyé',
      },
      {
        id: 2,
        name: 'Accepté',
      },
      {
        id: 3,
        name: 'En cours',
      },
      {
        id: 4,
        name: 'Terminé',
      }
    )
  ),
}))
// const getStatus =

describe('StatusService.js', () => {
  describe('Get status', () => {
    const status = [
      {
        id: 1,
        name: 'Envoyé',
      },
      {
        id: 2,
        name: 'Accepté',
      },
      {
        id: 3,
        name: 'En cours',
      },
      {
        id: 4,
        name: 'Terminé',
      },
    ]
    it('Should return status', async () => {
      expect(status).toEqual(getStatus)
      expect()
    })
  })
})
