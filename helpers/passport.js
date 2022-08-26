const passport = require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/user.model');
//
// const opts = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: process.env.JWT_SECRET_KEY,
//   issuer: process.env.JWT_ISSUER,
//   audience: process.env.JWT_AUDIENCE,
// }
//
// passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
//   User.findOne({where: {username: jwt_payload.username}})
//     .then(user => {
//       if (user) {
//         return done(null, user);
//       }
//       return done(null, false);
//     }).catch(err => {
//       console.log(err);
//       return done(err, false);
//     }
//   )
// }));