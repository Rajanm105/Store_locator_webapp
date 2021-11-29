const passport = require('passport')
const passportService = require('./passportService')(passport);

const userAuth = passport.authenticate('jwt', { session: false })
function checkRole(role){
  return (req,res,next) => {
    if(req.user.role !== role){
      res.status(401)
      return res.send('Not allowed')
    }

    next()
  }
}

module.exports = {
  checkRole,
  userAuth
}