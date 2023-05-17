import app from './App/index.js'
import { PORT } from './config/index.js'

app.listen(PORT)
console.log('server running on port', PORT)
