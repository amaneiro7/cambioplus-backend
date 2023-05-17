import { Router } from 'express'

export default function routerApi (app) {
  const router = Router()
  app.use('/api/v1', router)
}
