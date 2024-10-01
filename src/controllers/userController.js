const bcrypt = require('bcrypt')
const {validateUser,validateLogInDetails} = require('../utils/validation')
const User = require('../Models/userModel')
const ErrorHandler = require('../utils/errorhandler')
const ApiError = require('../utils/Error')
const ApiResponse = require('../utils/ApiResponse')

const registerUser = ErrorHandler(async (req,res)=>{
    const {username,name,email,password} = req.body;
    
    //data validation
    const {error} = validateUser({username,name,email,password});
    
    if(error){
        throw new ApiError(400,"All fields are required");
    }

    let user = await User.findOne({ email });
    
    if (user){
        throw new ApiError(409,'user already exists')
    }
    const encryptedPassword = await bcrypt.hash(password,10)
    user = await User.create({
        name,
        email,
        username,
        password:encryptedPassword,
    })
    user.password = 'hidden';
    return res.status(201).json(
        new ApiResponse(201, user, "User registered Successfully")
    )

})

const loginUser =  ErrorHandler(async (req,res)=>{
    const {email,password} = req.body;
    const {error} = validateLogInDetails({email,password});
    
    if(error){
        throw new ApiError(400,"All fields are required");
    }

    let user = await User.findOne({ email });
    
    if (!user){
        throw new ApiError(404,'Email not found')
    }
    const matchPassword = await bcrypt.compare(password,user.password)
    if(!matchPassword) throw new ApiError(400,'Wrong Password!' )
    
    return res.status(200).json(
        new ApiResponse(200,user,"Log in successfully")
    )
})

module.exports = {registerUser,loginUser}