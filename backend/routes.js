const express = require('express') //Export Express
const SignUpTemplateCopy = require('./models/SignUpModel')
const router = express.Router()
const bcrypt = require('bcrypt')
//.pot = Post Request
router.post('/signup', async (request, response) => { //When we're in signup page :

    const saltPassword = await bcrypt.genSalt(10) //Generate the salt by 10
    const securePassword = await bcrypt.hash(request.body.password, saltPassword ) //salt and crypt the password the user send

    const signedUpUser = new SignUpTemplateCopy({ //When they submit, they create a new SignUp

        fullName:request.body.fullName, //grab the fullName of the request they enter (request = post)
        username:request.body.username,
        email:request.body.email,
        password:securePassword,
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