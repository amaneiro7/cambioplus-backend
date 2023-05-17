import { Sequelize } from 'sequelize'
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '../config'
import { setupModels } from '../db/models'

const USER = encodeURIComponent(DB_USER)
const PASSWORD = encodeURIComponent(DB_PASSWORD)
const URI = `postgres://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`

export const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
})

setupModels(sequelize)
