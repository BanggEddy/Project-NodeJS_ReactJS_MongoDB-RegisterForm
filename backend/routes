const express = require('express') //Export Express
const SignUpTemplateCopy = require('./models/SignUpModel')
const router = express.Router()

//.pot = Post Request
router.post('/signup', (request, response) => { //When we're in signup page :
    const signedUpUser = new SignUpTemplateCopy({ //When they submit, they create a new SignUp
        fullName:request.body.fullName, //grab the fullName of the request they enter (request = post)
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
    })
    signedUpUser.save()//Save all data of user request
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router