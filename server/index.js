// 加载一些需要的包
import mongoose from 'mongoose'
import bodyParse from 'koa-bodyparser'
import session from 'koa-generic-session'
import Redis from 'koa-redis'
import json from 'koa-json'
import dbConfig from './dbs/config'
import passport from './interface/utils/passport'
import users from './interface/users'
import geo from './interface/geo'
import search from './interface/search'
import categroy from './interface/catagroy'

const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

// 配置
app.keys = ['kz', 'keyskeys'];
app.proxy = true;
app.use(session({ key: 'kz', prefix: 'kz:uid', store: new Redis() }));
app.use(bodyParse({
    extendTypes: ['json', 'form', 'text']
}))
app.use(json())

// 连接数据库
mongoose.connect(dbConfig.dbs, {
    useNewUrlParser: true
})
app.use(passport.initialize());
app.use(passport.session());

async function start() {
    // Instantiate nuxt.js
    const nuxt = new Nuxt(config)

    const {
        host = process.env.HOST || '127.0.0.1',
            port = process.env.PORT || 3000
    } = nuxt.options.server

    await nuxt.ready()
        // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }

    // 路由
    app.use(users.routes()).use(users.allowedMethods());
    app.use(geo.routes()).use(geo.allowedMethods());
    app.use(search.routes()).use(search.allowedMethods());
    app.use(categroy.routes()).use(categroy.allowedMethods());

    app.use((ctx) => {
        ctx.status = 200
        ctx.respond = false // Bypass Koa's built-in response handling
        ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
        nuxt.render(ctx.req, ctx.res)
    })

    app.listen(port, host)
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
}

start()