import Joi from 'joi'

const asset = Joi.string()
const fiat = Joi.string()
const merchantCheck = Joi.boolean()
const page = Joi.number()
const payTypes = Joi.array()
const publisherType = Joi.boolean().allow(null)
const rows = Joi.number()
const tradeType = Joi.string()

export const getBinanceSchema = Joi.object({
  asset,
  fiat,
  merchantCheck,
  page,
  payTypes,
  publisherType,
  rows,
  tradeType
})
