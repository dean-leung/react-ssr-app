import { Context } from 'koa'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../routes'

const defaultTemplateHtml = `
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>React SSR APP</title>
</head>
<body>
  <div id="root"><!-- html --></div>
  <script src="/client.js"></script>
</body>
</html>
`

export default async function(ctx: Context) {
  console.log(ctx.path)
  let html = renderToString(
    <StaticRouter location={ctx.path}>
      {renderRoutes(routes)}
    </StaticRouter>
  )
  html = defaultTemplateHtml.replace('<!-- html -->', html)
  ctx.body = html
}
