import { describe, expect, it } from 'vitest'
import { User } from '../../../src/domain/entities/User'
import { Profile } from '../../../src/domain/valueObjects/Profile'

describe('User', () => {
  it('should can create new user', () => {
    const profile = new Profile('anyPhoto', 'anyLink')
    const sut = new User({
      name: 'anyName',
      age: 22,
      profile
    })

    expect(sut).toBeInstanceOf(User)
    expect(sut.getName()).toBe('anyName')
    expect(sut.getAge()).toBe(22)
    expect(sut.getProfile()).toBeInstanceOf(Profile)
  })
})
