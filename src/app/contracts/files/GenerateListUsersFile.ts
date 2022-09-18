import { User } from '../../../domain/entities/User'

export interface GenerateListUsersFile {
  generate: (users: User[]) => Promise<Buffer>
}
