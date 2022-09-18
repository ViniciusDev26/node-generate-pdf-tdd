import { describe, expect, it } from 'vitest'
import { Profile } from '../../../src/domain/valueObjects/Profile'

describe('User', () => {
  it('should can create new user', () => {
    const sut = new Profile('anyPhotoLink', 'anyLink')

    expect(sut).toBeInstanceOf(Profile)
    expect(sut.getPhotoUrl()).toBe('anyPhotoLink')
    expect(sut.getLinkedInUrl()).toBe('anyLink')
  })
})
