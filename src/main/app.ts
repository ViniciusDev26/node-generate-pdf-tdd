import express from 'express'
import { getListUsersFileService } from './factories/getListUsersFileFactory'

const app = express()

app.get('/users/file', (req, res) => {
  getListUsersFileService.execute()
    .then((buffer) => {
      res
        .attachment('listUser.pdf')
        .send(buffer)
    })
    .catch(() => {
      res.status(500).send()
    })
})

export { app }
