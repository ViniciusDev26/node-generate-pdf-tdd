import { GenerateListUsersPdf } from '../../../src/app/contracts/files/GenerateListUsersFile'
import { User } from '../../../src/domain/entities/User'

export class GenerateListUsersPdfServiceTest implements GenerateListUsersPdf {
  async generate (users: User[]): Promise<Buffer> {
    return Buffer.from('')
  }
}
