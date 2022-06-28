const userModel = require("../model/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

//=======Register User=======================================

const createUser= async function(req,res){
    try{
        var data = req.body;
        if (!(/^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/.test(data.email.trim()))) {
            return res.status(400).send({ status: false, msg: "please enter valid email" })
        }
        const dupEmail = await userModel.findOne({email:data.email})
        if (dupEmail) {
            return res.status(400).send({ status: false, msg: "This is already register" })
        }
        
        if (!(data.password.length >= 8 && data.password.length <= 15)) {
            return res.status(400).send({ status: false, msg: "password length should be 8 to 15" })
        }
        let saltRound = 10
        const hash = await bcrypt.hash(data.password, saltRound)
        data.password = hash
        

        const userRes = await userModel.create(data)
        return res.status(201).send({ status: true, msg: "Register successfully", data: data })

    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }

}
//=============logIn================================

const logIn = async function (req, res) {
    try {
        const { email, password } = req.body
       
        const validEmail = await userModel.findOne({ email: email.trim() })
        if (!validEmail) {
            return res.status(400).send({ status: false, msg: "email is incorrect" })
        }
        let userId = validEmail._id
        let pass = validEmail.password
        const matchPassword = await bcrypt.compare(password, pass)
        if (!matchPassword) {
            return res.status(400).send({ status: false, msg: "enter valid password" })
        }
        let token = jwt.sign({ userId: userId.toString(), iat: Math.floor(Date.now() / 1000) + (60 * 30) }, "secret-key", { expiresIn: "30m" });
        //res.setHeader("x-api-key", token);
        let result = { userId, token }
        return res.status(200).send({ status: true, data: result })

    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}
module.exports.createUser = createUser,
module.exports.logIn=logIn