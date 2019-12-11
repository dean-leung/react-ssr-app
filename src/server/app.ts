import path from 'path'

import Koa from 'koa'
import serve from 'koa-static'
import logger from './logger'

const app = new Koa()

app.use(serve(path.resolve(process.cwd(), 'dist/static')))
app.use(logger())

export default app
