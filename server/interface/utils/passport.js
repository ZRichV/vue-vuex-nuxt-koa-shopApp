import passport from 'koa-passport';
import LocalStrategy from 'passport-local';
import UserModel from '../../dbs/models/users';

passport.use(new LocalStrategy(async function(username, password, done) {
    const where = {
        username
    };
    const res = await UserModel.findOne(where);
    if (res != null) {
        if (res.password === password) {
            return done(null, res);
        } else {
            return done(null, false, '密码错误');
        }
    } else {
        return done(null, false, '用户不存在');
    }
}))

// 查到用户后会把用户的信息存到session中
passport.serializeUser(function(user, done) {
    done(null, user);
})

passport.deserializeUser(function(user, done) {
    return done(null, user);
})

export default passport;