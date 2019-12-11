import chalk from 'chalk'
import { Context, Next } from 'koa'

export default function () {
  return async (ctx: Context, next: Next) => {
    console.log(
      chalk.red(ctx.method),
      chalk.white(ctx.path)
    )
    await next()
  }
}
