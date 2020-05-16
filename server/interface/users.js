import Router from 'koa-router';
import Redis from 'koa-redis';
import nodeMailer from 'nodemailer';
import Email from '../dbs/config'
import User from '../dbs/models/users';
import Passport from './utils/passport'
import Axios from './utils/axios'

const router = new Router({
    prefix: '/users'
})

const Store = new Redis().client

router.post('/signup', async(ctx) => {
    const {
        username,
        password,
        email,
        code
    } = ctx.request.body;
    if (code) {
        // 去redis获取 在nodemailer发验证码时在redis存的验证码
        const saveCode = await Store.hget(`nodemail:${username}`, 'code');
        const saveExpire = await Store.hget(`nodemail:${username}`, 'expire');
        if (code === saveCode) {
            if (new Date().getTime() - saveExpire > 0) {
                ctx.body = {
                    code: -1,
                    msg: '验证码已过期，请重新发送'
                }
                return false;
            }
        } else {
            ctx.body = {
                code: -1,
                msg: '请填写正确的验证码'
            }
        }
    } else {
        ctx.body = {
            code: -1,
            msg: '请填写验证码'
        }
    }
    const user = await User.find({
        username
    })
    if (user.length) {
        ctx.body = {
            code: -1,
            msg: '已经注册'
        }
        return
    }
    const nuser = await User.create({
        username,
        password,
        email
    })
    if (nuser) {
        const res = await Axios.post('/users/signin', { username, password })
        if (res.data && res.data.code === 0) {
            ctx.body = {
                code: 0,
                msg: '注册成功',
                user: res.data.user
            }
        } else {
            ctx.body = {
                code: -1,
                msg: 'error'
            }
        }
    } else {
        ctx.body = {
            code: -1,
            msg: '注册失败'
        }
    }
})

router.post('/signin', (ctx, next) => {
    return Passport.authenticate('local', function(err, user, info, status) {
        if (err) {
            ctx.body = {
                code: -1,
                msg: err
            }
        } else {
            if (user) {
                ctx.body = {
                    code: 0,
                    msg: '登录成功',
                    user
                }
                return ctx.login(user)
            } else {
                ctx.body = {
                    code: 1,
                    msg: info
                }
            }
        }
    })(ctx, next)
})

router.post('/verify', async(ctx, next) => {
    const username = ctx.request.body.username;
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
    if (saveExpire && new Date().getTime() - saveExpire < 0) {
        ctx.body = {
            code: -1,
            msg: '验证请求过于频繁'
        }
        return false;
    }
    // 发送邮件
    const transporter = nodeMailer.createTransport({
            host: Email.smtp.host,
            port: 587,
            secure: false,
            auth: {
                user: Email.smtp.user,
                pass: Email.smtp.pass
            }
        })
        // 确定接收方
    const ko = {
        code: Email.smtp.code(),
        expire: Email.smtp.expire(),
        email: ctx.request.body.email,
        user: ctx.request.body.username
    }
    const mailOptions = {
        from: `"认证邮件“ <${Email.smtp.User}>`,
        to: ko.email,
        subject: '周杰伦专辑',
        code: `邀请码是${ko.code}`
    }
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        } else {
            Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email);
        }
    });
    ctx.body = {
        code: 0,
        msg: '验证码已发送'
    }
})

router.get('/exit', async(ctx, next) => {
    await ctx.logout();
    if (!ctx.isAuthenticated()) {
        ctx.body = {
            code: 0
        }
    } else {
        ctx.body = {
            code: -1
        }
    }
})

router.get('/getuser', (ctx) => {
    if (ctx.isAuthenticated()) {
        const { username, email } = ctx.session.passport.user;
        ctx.body = {
            user: username,
            email
        }
    } else {
        ctx.body = {
            user: '',
            email: ''
        }
    }
})
export default router;