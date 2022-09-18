import { beforeEach, describe, expect, it, vi } from 'vitest'
import { GetListUsersPdfService } from '../../../../src/app/services/files/GetListUsersPdf'
import { InMemoryUserRepository } from '../../../../src/infra/db/inMemory/InMemoryUserRepository'
import { GenerateListUsersPdf } from '../../../../src/app/contracts/files/GenerateListUsersFile'
import { GenerateListUsersPdfServiceTest } from '../../../mocks/files/GenerateListUsersPdfServiceTest'
import { User } from '../../../../src/domain/entities/User'
import { Profile } from '../../../../src/domain/valueObjects/Profile'

describe('GetListUsersFile', () => {
  let inMemoryUserRepository: InMemoryUserRepository
  let sut: GetListUsersPdfService
  let generateListUsersFile: GenerateListUsersPdf

  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    generateListUsersFile = new GenerateListUsersPdfServiceTest()

    sut = new GetListUsersPdfService(inMemoryUserRepository, generateListUsersFile)
  })

  it('should call repositories correctly', async () => {
    const listSpy = vi.spyOn(inMemoryUserRepository, 'list')
    await sut.execute()

    expect(listSpy).toHaveBeenCalledTimes(1)
  })

  it('should call GenerateListUsersFile correctly', async () => {
    const userOne = new User({
      name: 'anyName',
      age: 20,
      profile: new Profile('anyPhotoUrl', 'anyLinkedInUrl')
    })

    const userTwo = new User({
      name: 'anyName',
      age: 20,
      profile: new Profile('anyPhotoUrl', 'anyLinkedInUrl')
    })

    inMemoryUserRepository.addUser(userOne)
    inMemoryUserRepository.addUser(userTwo)

    const generateSpy = vi.spyOn(generateListUsersFile, 'generate')
    await sut.execute()

    expect(generateSpy).toHaveBeenCalledTimes(1)
    expect(generateSpy).toHaveBeenCalledWith([userOne, userTwo])
  })

  it('should return file buffer correctly', async () => {
    const response = await sut.execute()

    expect(response).toBeInstanceOf(Buffer)
  })
})
