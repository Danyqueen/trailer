const Koa = require('koa')
const app = new Koa()
const { normal } = require('./tpl')

app.use(async (ctx, next) => {
  ctx.type = 'text/html; charset="uft-8'
  ctx.body = normal
})

app.listen(3000)