import { describe, expect, it, vi } from 'vitest'
import { User } from '../../../../src/domain/entities/User'
import { Profile } from '../../../../src/domain/valueObjects/Profile'
import { PdfKitGenerateListUsers } from '../../../../src/infra/files/pdfkit/PdfKitGenerateListUsers'

describe('PdfKitGenerateListUsers', () => {
  it('should return buffer correctly', async () => {
    const sut = new PdfKitGenerateListUsers()
    const userOne = new User({
      name: 'anyName',
      age: 20,
      profile: new Profile('anyPhotoUrl', 'anyLinkedInUrl')
    })

    const userTwo = new User({
      name: 'anyName2',
      age: 21,
      profile: new Profile('anyPhotoUrl', 'anyLinkedInUrl')
    })

    const buffer = await sut.generate([userOne, userTwo])

    expect(buffer).toBeInstanceOf(Buffer)
  })

  it('should throw if PdfKitGenerateListUsers throws', async () => {
    const sut = new PdfKitGenerateListUsers()
    const userOne = new User({
      name: 'anyName',
      age: 20,
      profile: new Profile('anyPhotoUrl', 'anyLinkedInUrl')
    })

    vi.spyOn(userOne, 'getProfile').mockImplementationOnce(() => {
      throw new Error()
    })

    const promise = sut.generate([userOne])

    await expect(promise).rejects.toThrow()
  })
})
