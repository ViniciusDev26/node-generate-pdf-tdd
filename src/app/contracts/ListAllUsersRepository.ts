import { User } from '../../domain/entities/User'

export interface ListAllUsersRepository {
  list: () => Promise<User[]>
}
