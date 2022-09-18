import { GenerateListUsersFile } from '../../contracts/files/GenerateListUsersFile'
import { ListAllUsersRepository } from '../../contracts/ListAllUsersRepository'

export class GetListUsersFile {
  constructor (
    private readonly listAllUsersRepository: ListAllUsersRepository,
    private readonly generateListUsersFile: GenerateListUsersFile
  ) {}

  async execute (): Promise<Buffer> {
    const users = await this.listAllUsersRepository.list()
    const bufferFile = await this.generateListUsersFile.generate(users)

    return bufferFile
  }
}
