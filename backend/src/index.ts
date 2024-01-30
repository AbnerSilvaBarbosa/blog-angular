import { AppDataSource } from './data-source'
import express from 'express'

AppDataSource.initialize()
  .then(async () => {
    const app = express()
    app.listen(3000, () => {
      console.log('Server running')
    })
  })
  .catch((error) => console.log(error))
