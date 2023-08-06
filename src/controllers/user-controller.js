const User = require('../models/user');

git config --global user.email "rishpalthind@gmail.com"
git config --global user.name "Rishpal singh"
async function createUser(req, res){
    
    try {

        const data = {
            name: req.body.name.trim(),
            password: req.body.password.trim(),
            email: req.body.email.trim()
        }
        const response = await User.create(data);
        const statusCode = response ? 200: 400;
        const message = response ? 'Created successfully': 'Unable to create';
        return res.status(statusCode).json({
            data: response,
            message
        });

    } catch (error) {
        
        return res.status(400).json({
            message: error.message
        });


    }
    
}

async function getAllUsers(req, res){
    try {
        
        console.log("get all users");
        const response = await User.find();
        return res.status(200).json({
            data: response,
            message: 'Success'
        });

    } catch (error) {

        return res.status(400).json({
            message: error.message
        });

    }
}


async function getUser(req, res){

    try {
        
        const uid = req.params.id;
        const response = await User.findById(uid);
        const message = response ? 'Success' : 'User not found';
        return res.status(200).json({
            data: response,
            message
        });

    } catch (error) {
        
        return res.status(400).json({
            message: error.message
        });

    }

}

async function updateUser(req, res){

    try {

        const uid = req.params.id;
        const data = req.body;
        const response = await User.findByIdAndUpdate(uid, data, {new: true});
        const message = response ? 'Success' : 'Not able to update';
        return res.status(200).json({
            data: response,
            message
        });

    } catch (error) {
        
        return res.status(400).json({
            message: error.message
        });

    }

}


async function deleteUser(req, res){
    try {        
        const uid = req.params.id;
        const response = await User.findByIdAndDelete(uid);
        const message = response ? 'Deleted successfully': 'Unable to delete';
        return res.status(200).json({
            data: response,
            message
        });
    } catch (error) {        
        return res.status(400).json({
            message: error.message
        });
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}