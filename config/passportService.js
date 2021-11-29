const User = require('../models/User')
const passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
}

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (payload, done) => {
      await User.findById(payload.id)
        .then(async (user) => {
          if (user) {
            return done(null, user)
          }
          return done(null, false)
        })
        .catch((error) => done(null, false))
    })
  )
}