import { GenerateListUsersFile } from '../../../src/app/contracts/files/GenerateListUsersFile'
import { User } from '../../../src/domain/entities/User'

export class GenerateListUsersFileTest implements GenerateListUsersFile {
  async generate (users: User[]): Promise<Buffer> {
    return Buffer.from('')
  }
}
