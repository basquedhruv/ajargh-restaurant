const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;


passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async (email, password, done) => {
        try {
            const user = await User.create({
                email, password
            })
            return done(null, user)
        } catch (err) {
            console.log(err);
            return done(err);
        }
    }
));

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async (email, password, done) => {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return done(null, false, { msg: "User not found." });
            }
            const validate = await user.isValidPassowrd(password);
            if (!validate) {
                return done(null, false, { msg: "Wrong password." });
            }
            return done(null, user, { msg: "Logged in successfully." });
        } catch (err) {
            console.log(err)
            return done(err);
        }
    }
))

passport.use(new jwtStrategy(
    {
        secretOrKey: "TOP_SECRET",
        jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
    },
    async (token, done) => {
        try {
            return done(null, token.user);
        } catch (err) {
            console.log(err);
            done(err)
        }
    }
))

