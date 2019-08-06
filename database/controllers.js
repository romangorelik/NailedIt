let { Users } = require('./schema.js');

exports.getUsers = (req, res) => {
  Users.find({})
       .then(response => res.send(response))
       .catch(err => res.send(err))
}

exports.updateUserCount = (req, res) => {
  console.log(req.body)
  let userType = req.body.userType
  
  let amounts = [0, 0, 0]

  if (userType === 'basic') {
    amounts[0] = 1
  } else if (userType === 'premium') {
    amounts[1] = 1
  } else if (userType === 'vip') {
    amounts[2] = 1
  }

  Users.update(
    {_id: '5d49a80041385157da7f9ca7'},
    { $inc: { basic: amounts[0], premium: amounts[1], vip: amounts[2] } }
  )
    .then(response => res.send(response))
    .catch(err => console.error(err))
}

