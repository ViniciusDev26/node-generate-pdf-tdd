import { GenerateListUsersPdf } from '../../contracts/files/GenerateListUsersFile'
import { ListAllUsersRepository } from '../../contracts/ListAllUsersRepository'

export class GetListUsersPdfService {
  constructor (
    private readonly listAllUsersRepository: ListAllUsersRepository,
    private readonly generateListUsersFile: GenerateListUsersPdf
  ) {}

  async execute (): Promise<Buffer> {
    const users = await this.listAllUsersRepository.list()
    const bufferFile = await this.generateListUsersFile.generate(users)

    return bufferFile
  }
}
