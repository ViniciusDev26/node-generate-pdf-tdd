import { ListAllUsersRepository } from '../../../app/contracts/ListAllUsersRepository'
import { User } from '../../../domain/entities/User'

export class InMemoryUserRepository implements ListAllUsersRepository {
  private readonly users: User[] = []

  addUser (user: User): void {
    this.users.push(user)
  }

  async list (): Promise<User[]> {
    return this.users
  }
}
