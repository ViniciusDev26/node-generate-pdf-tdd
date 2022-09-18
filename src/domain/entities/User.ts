import { Profile } from '../valueObjects/Profile'

export interface UserParams {
  name: string
  age: number
  profile: Profile
}
export class User {
  private readonly name: string
  private readonly age: number
  private readonly profile: Profile

  constructor ({ name, age, profile }: UserParams) {
    this.name = name
    this.age = age
    this.profile = profile
  }

  public getName (): string {
    return this.name
  }

  public getAge (): number {
    return this.age
  }

  public getProfile (): Profile {
    return this.profile
  }
}
