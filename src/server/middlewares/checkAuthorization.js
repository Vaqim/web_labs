const {
  authorization: { userData },
} = require('../../config');

module.exports = (req, res, next) => {
  console.log(req.session.user, userData.username);
  if (req.session.user === userData.username) next();
  else res.render('login', { errorMessage: 'Authorization required!' });
};
