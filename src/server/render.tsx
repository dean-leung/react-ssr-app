import { Context } from 'koa'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../client/App'

const defaultHTML = (bodyContent: string) => `
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React SSR APP</title>
  </head>
  <body>
    <div id="react-root">${bodyContent}</div>
    <script>
    // 服务端：组件初始化时会请求数据，请求的数据会存到服务端仓库中，然后组件使用数据显示相应内容
    // 客户端：为了避免组件挂载时又一次的请求数据（当服务器端已经请求过数据并返回了有数据的内容） 
    // 所以这里要获取下存在服务端仓库中的数据并作为初始值存到 window 中
    // 俗称：数据的脱水
    window.context = {
    }
    </script>
    <script src="/client.js"></script>
  </body>
</html>
`

export default async function (ctx: Context) {
  let html = renderToString(<App/>)
  console.log(html)

  ctx.set('Content-Type', 'text/html; charset=utf-8')

  let defaultTemplate = 'default'

  await ctx.render(defaultTemplate, { html })
}
