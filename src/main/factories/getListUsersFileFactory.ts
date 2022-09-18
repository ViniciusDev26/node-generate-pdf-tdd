import { GetListUsersFile } from '../../app/services/files/GetListUsersFile'
import { User } from '../../domain/entities/User'
import { Profile } from '../../domain/valueObjects/Profile'
import { InMemoryUserRepository } from '../../infra/db/inMemory/InMemoryUserRepository'
import { PdfKitGenerateListUsers } from '../../infra/files/pdfkit/PdfKitGenerateListUsers'

const generateListUsersFile = new PdfKitGenerateListUsers()
const listAllUsersRepository = new InMemoryUserRepository()
const getListUsersFileService = new GetListUsersFile(listAllUsersRepository, generateListUsersFile)

const userOne = new User({
  name: 'anyName',
  age: 20,
  profile: new Profile('anyPhotoUrl', 'anyLinkedInUrl')
})

const userTwo = new User({
  name: 'anyName',
  age: 20,
  profile: new Profile('anyPhotoUrl', 'anyLinkedInUrl')
})

listAllUsersRepository.addUser(userOne)
listAllUsersRepository.addUser(userTwo)

export { getListUsersFileService }
