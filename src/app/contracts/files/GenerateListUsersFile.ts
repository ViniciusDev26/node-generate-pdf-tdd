import { User } from '../../../domain/entities/User'

export interface GenerateListUsersPdf {
  generate: (users: User[]) => Promise<Buffer>
}
