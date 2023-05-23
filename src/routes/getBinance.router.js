import { Router } from 'express'
import { validatorHandler } from '../Middlewares/validator.handler.js'
import { getBinanceSchema } from '../Schemas/binanceSchema.schema.js'
import BinanceService from '../Controllers/binance.controllers.js'

const router = Router()
const service = new BinanceService()

// POST get Binance
router.post('/', validatorHandler(getBinanceSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const getBinance = await service.getBinanceData(body)
      res.json(getBinance)
    } catch (error) {
      next(error)
    }
  }
)

export default router
