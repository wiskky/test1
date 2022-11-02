const {Users} = require("../model/userModel");


//get all users
exports.getUsers = async(req, res) =>{
    try{
        const users = Users;
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message: err});
    }
}


//get single user

//create new user
exports.createUser = async(req, res){
    try{
        const user = await req.body;
        const newUser = Users.push(user);    //Users.push(user);

        res.status(201).json({
            message: "User Created",
            user: newUser,                   //user,
        });
    }catch (err){
        res.status(500).json({message, err.messsage});
    }
}


//update /edit user


//delete user