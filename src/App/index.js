import express from 'express'
import routerApi from '../routes/index.js'

const app = express()
app.use(express.json())
routerApi(app)

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint nor found'
  })
})

export default app
