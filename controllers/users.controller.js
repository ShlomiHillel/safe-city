const usersModel = require('../models/users.model');


const createUser = (req, res) => {
    // const data = req.body;
    const {userName} = req.body;
    let found = usersModel.findOne ( {userName});
    console.log(userName);
    console.log(found.userName);
     
    // if (found) {
    //     return res.json({"error": "user name is already exist"})
    // };

    
    const user = new usersModel({
        userName: userName,
    });
    user.save((err) => {
        if (err) return res.json({'error': err})
        return res.json({'success': user})
    });
    
}

const updateUser = async (req, res) => {
    // const data = req.body;
    const {userName} = req.body;
    let found = await usersModel.findOneAndUpdate ( userName,);
    if (!found) {
        return res.json({'error':'user name is not exist'})
    };
    
}

const readUser = (req, res) => {
    // const data = req.body;
    const {userName} = req.body;
    let found = usersModel.findOne ( userName);
    if (!found) {
        return res.json({'error':'user name is not exist'})
    };
    if (found) {
        return res.json({"success": user})
    };
    
}

const deleteUser = (req, res) => {
    // const data = req.body;
    const {userName} = req.body;
    let found = usersModel.findOneAndDelete ( userName);
    if (!found) {
        return res.json({"error": "user name is not exist"})
    };
    
    // user.delete((err) => {
    //     if (err) return res.json({"error": err})
    //     return res.json({"success": user})
    // });
}

const getUsers = (req, res) => {
    usersModel.find({}).then((users) => {
        return res.send(users)
    });
}

module.exports = {
    create: createUser,
    read: readUser,
    update: updateUser,
    delete: deleteUser,
    readAll: getUsers,
};

