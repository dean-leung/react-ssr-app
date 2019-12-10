import path from 'path'
import Koa from 'koa'
import serve from 'koa-static'
import render from 'koa-ejs'
import renderer from './render'

const app = new Koa()

render(app, {
  root: path.resolve(process.cwd(), 'src/templates'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false
})

app.use(serve('public'))

app.use(async (ctx, next) => {
  console.log(ctx.method, ctx.path)
  await next()
})

app.use(renderer)

app.listen(3000, () => console.log(
  'Server is running...'
))
