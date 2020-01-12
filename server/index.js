const Koa = require('koa')
const app = new Koa()
const { htmlTpl, ejsTpl } = require('./tpl')
const ejs = require('ejs')

app.use(async (ctx, next) => {
  ctx.type = 'text/html; charset="uft-8'
  ctx.body = ejs.render(ejsTpl, {
    name: 'coco',
    age: 18,
    discribtion: '3q3retrgeqgqgqegg'
  })
})

app.listen(3000)