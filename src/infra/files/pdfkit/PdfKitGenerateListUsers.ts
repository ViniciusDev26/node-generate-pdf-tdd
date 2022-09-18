import { GenerateListUsersPdf } from '../../../app/contracts/files/GenerateListUsersFile'
import { User } from '../../../domain/entities/User'
import Pdfkit from 'pdfkit'
import { createWriteStream, readFileSync, unlinkSync } from 'fs'
import { resolve } from 'path'
import { randomUUID } from 'crypto'

export class PdfKitGenerateListUsers implements GenerateListUsersPdf {
  async generate (users: User[]): Promise<Buffer> {
    const pathFile = resolve(__dirname, '..', '..', 'tmp', `${randomUUID()} - listFile.pdf`)

    const stream = createWriteStream(pathFile)
    const document = new Pdfkit()
    document.pipe(stream)

    document.text('users:')

    for (const user of users) {
      document.text(`name: ${user.getName()}`)
      document.text(`linkedIn: ${user.getProfile().getLinkedInUrl()}`)
    }

    document.end()

    return await new Promise((resolve, reject) => {
      stream
        .on('error', (err) => {
          unlinkSync(pathFile)
          reject(err)
        })
        .on('finish', () => {
          const buffer = readFileSync(pathFile)
          unlinkSync(pathFile)

          return resolve(buffer)
        })
    })
  }
}
