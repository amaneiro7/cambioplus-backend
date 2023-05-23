import { Router } from 'express'
import getBinanceRouter from './getBinance.router.js'

export default function routerApi (app) {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/getbinance', getBinanceRouter)
}
